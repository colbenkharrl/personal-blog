import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:10101/api';

  private postStore = [];
  private categoryStore = [];

  private postSubject = new Subject();
  private categorySubject = new Subject();

  posts = this.postSubject.asObservable();
  categories = this.categorySubject.asObservable();

  constructor(
    private http: Http,
    private sb: MatSnackBar,
    private auth: AuthService) {
    this.getPosts(false);
  }

  getPosts(params) {
    this.http.get(this.BASE_URL + '/posts' + this.buildParamString(params)).subscribe(res => {
      this.postStore = res.json();
      this.postSubject.next(this.postStore);
    }, error => {
      this.handleError('Unable to get posts');
    });
  }

  getPostsById(id) {
    this.http.get(this.BASE_URL + '/posts/' + id).subscribe(res => {
      this.postStore = res.json();
      this.postSubject.next(this.postStore);
    }, error => {
      this.handleError('Unable to get posts');
    });
  }

  async postPost(post) {
    try {
      const response = await this.http.post(this.BASE_URL + '/posts', post, this.auth.tokenHeader).toPromise();
      this.postStore.push(response.json());
      this.postSubject.next(this.postStore);
    } catch (error) {
      this.handleError('Unable to send post');
    }
  }

  deletePost(id) {
    return this.http.delete(this.BASE_URL + '/posts/' + id, this.auth.tokenHeader).subscribe(res => {
      const index = this.postStore.findIndex(function(element) {
        return element._id === res.json()._id;
      });
      this.postStore.splice(index, 1);
      this.postSubject.next(this.postStore);
      this.handleError('Post deleted');
    }, err => {
      this.handleError('Unable to delete post');
    });
  }

  getCategories(category) {
    this.http.get(this.BASE_URL + '/categories').subscribe(res => {
      this.categoryStore = res.json();
      this.categorySubject.next(this.categoryStore);
    }, error => {
      this.handleError('Unable to get categories');
    });
  }

  async postCategories(category) {
    try {
      const response = await this.http.post(this.BASE_URL + '/categories', category, this.auth.tokenHeader).toPromise();
      this.categoryStore.push(response.json());
      this.categorySubject.next(this.categoryStore);
    } catch (error) {
      this.handleError('Unable to create catecory');
    }
  }

  getUser() {
    return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
  }

  saveUser(userData) {
    return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).map(res => res.json());
  }

  private handleError(error) {
    this.sb.open(error, 'Close', {duration: 5000});
  }

  private buildParamString(params) {
    let url = '';
    for (const name in params) {
      if (params.hasOwnProperty(name)) {
        url += (url === '' ? '?' : '&') + name + '=' + params[name];
      }
    }
    return url;
  }
}

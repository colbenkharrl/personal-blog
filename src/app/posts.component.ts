import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-posts',

  template: `
  <section class="body-container">
    <div *ngFor="let post of webService.posts | async">
      <mat-card class="card">
      <mat-card-title [routerLink]="['/posts', post._id]" style="cursor: pointer;">
        <p class="title">{{ post.title }}</p>
        <div class="category" *ngFor="let category of post.categories" [routerLink]="['/categories', category._id]">
          <p>{{category.name}}</p>
        </div>
      </mat-card-title>
        <markdown>---
        {{ post.text }}</markdown>
        <br />
      <p [routerLink]="['/user', post.author._id]" class="author">By {{post.author.username}}</p>
      <div *ngIf="auth.isAuthenticated">
        <mat-icon class="icon-btn" (click)="deletePost(post._id)">delete</mat-icon>
      </div>
      </mat-card>
    </div>
  </section>
  `,

  styles: [`
  .author {
    font-size: 12px;
    color: gray;
    cursor: pointer;
    margin: 0px 0px 10px 0px;
    display: inline;
  }

  .title {
    display:inline;
    padding-right:10px;
  }

  .title:hover {
    font-size: 26px;
  }

  .author:hover {
    color: #59687d;
    text-decoration: underline;
  }

  .category {
    background-color: #59687d;
    color: #FFF;
    display: inline-block;
    cursor: pointer;
    margin-right: 5px;
  }

  .category:hover {
    background-color: #bddac8;
  }

  .category p {
    margin: 0px;
    padding: 2px 5px;
    font-size: 12px;
  }

  .icon-btn {
    cursor: pointer;
    color: 	#59687d;
    padding-right: 10px;
  }

  mat-card-title {
    margin-bottom: 8px;
  }
  `]
})
export class PostsComponent implements OnInit {

  sub;

  constructor(
    public webService: WebService,
    public route: ActivatedRoute,
    public auth: AuthService) {
      const params = this.route.snapshot.params;
      if (params.id) {
        this.webService.getPostsById(this.route.snapshot.params.id);
      } else {
        const queryFilter = {};
        if (params.name) {
          queryFilter['category'] = this.route.snapshot.params.name;
        }
        if (params.user) {
          queryFilter['author'] = this.route.snapshot.params.user;
        }
        this.webService.getPosts(queryFilter);
      }
      if (this.auth.isAuthenticated) {
        this.webService.getUser().subscribe();
      }
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params.name) {
        this.webService.getPosts({category: params.name});
      }
    });
  }

  deletePost(id) {
    this.webService.deletePost(id);
  }
}

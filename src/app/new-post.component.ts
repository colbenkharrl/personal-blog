import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-new-post',

  template: `
  <mat-card class="card">
    <mat-card-content>
      <mat-input-container style="width:400px">
        <input matInput placeholder="Title" [(ngModel)]="post.title">
      </mat-input-container>
      <simplemde [(ngModel)]="post.text" [options]="{}"></simplemde>
      <mat-card-title>Categories</mat-card-title>
      <div class="category"
        *ngFor="let category of webService.categories | async"
        (click)="selectCategory(category._id)"
        [ngClass]="{'selected': post.categories.includes(category._id) }">
        <p>{{category.name}}</p>
      </div>
      <div class="category new" (click)="openDialog()">
        <p>New +</p>
      </div>
      <br />
      <button
          (click)="postContent()"
          mat-raised-button>Post</button>
    </mat-card-content>
  </mat-card>
  `,
  styles: [`
  .category {
    background-color: rgb(255, 255, 255);
    color: #000;
    display: inline-block;
    cursor: pointer;
    margin: 0px 10px 10px 0px;
    border: 1px solid black;
  }

  .category.selected {
    background-color: #59687d;
    color: #FFF;
    border: none;
  }

  .category:hover {
    background-color: #bddac8;

  }

  .category p {
    margin: 0px;
    padding: 2px 5px;
    font-size: 12px;
  }

  button {
    background-color: #59687d;
    color: #fcfaf9;
  }

  button:hover {
    background-color: #152c43;
  }
  `]
})

export class NewPostComponent implements OnInit {

  post = {
    author: '',
    text: '',
    title: '',
    categories: []
  };

  tags;

  constructor(
    public webService: WebService,
    private auth: AuthService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.webService.getUser().subscribe(res => {
      this.post.author = res._id;
    });
    this.webService.getCategories(false);
  }

  postContent() {
    this.webService.postPost(this.post);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewCategoryDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.webService.postCategories({name: result});
      }
    });
  }

  selectCategory(id) {
    const index = this.post.categories.indexOf(id);
    if (index > -1) {
      this.post.categories.splice(index, 1);
    } else {
      this.post.categories.push(id);
    }
  }
}

@Component({
  selector: 'app-new-category-dialog',
  template: `
  <h1 mat-dialog-title>New Category</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <input matInput tabindex="1" [(ngModel)]="data.name">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.name">Create</button>
    </div>
  `
})
export class NewCategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

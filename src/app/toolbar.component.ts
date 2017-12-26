import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar class="toolbar" [ngClass]="{'home': (router.url === '/')}">
    <div id="nav-container">
      <button mat-button (click)="openNav()"><mat-icon>reorder</mat-icon></button>
      <button mat-button *ngIf="!(router.url === '/')" routerLink="/" class="title">matt kharrl.</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button
        *ngIf="auth.isAuthenticated"
        (click)="auth.logout()"
        routerLink="/">Log Out</button>
    </div>
  </mat-toolbar>
  `,
  styles: [`

  .home {
    background-color: #fcfaf9;
    box-shadow: none;
  }

  .title {
    font-size: 25px;
    font-family: 'Merriweather Sans', 'Roboto';
  }

  button {
    font-weight: 700;
    font-size: 18px;
  }

  .title:hover,
  button:hover {
    color: #fff;
  }
  #nav-container {
    width: 100%;
    margin: auto;
    display: inherit;
    color: #152c43;
  }

  mat-toolbar {
    position:relative;
    z-index: 5;
    background: #fcfaf9;
    color: #152c43;
    height: 80px;
    padding: 0px;
    box-shadow: 0 2px 2px 0px #53665a, 0 4px 4px 0px #888888;
  }
  `]
})
export class ToolbarComponent implements OnInit {
  hiddenNav;

  @Output() opennav = new EventEmitter();

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.hiddenNav = this.router.url === '/';
  }

  openNav() {
    this.opennav.emit();
  }
}

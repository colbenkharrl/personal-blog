import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-sidenav-container class="sidenav-container">
    <mat-sidenav #sideNav>
      <app-side-nav (navselect)='sideNav.close()'></app-side-nav>
    </mat-sidenav>
    <mat-sidenav-content>
      <app-toolbar (opennav)='sideNav.toggle()'></app-toolbar>
      <div class="main-container">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [`
  .sidenav-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  mat-sidenav-content {
    background-color: #152c43;
  }

  mat-sidenav {
    background-color: #152c43;
  }

  .main-container {
    position:relative;
    z-index:2;
    padding: 0px;
    width: 100%;
    background-color: #8993a2;
    box-shadow:
      0 3px 3px 0px #000000,
      0 6px 6px 0px #222222;
  }
  `]
})
export class AppComponent {
  title = 'app';
}

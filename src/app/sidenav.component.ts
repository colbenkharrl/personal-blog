import { Component, Output, EventEmitter } from '@angular/core';
import { RouteService } from './route.service';

@Component({
  selector: 'app-side-nav',
  template: `
    <section class="sidenav-content">
      <div *ngFor="let path of route.links">
        <button mat-raised-button (click)="onNavSelect(path)" #btn (mouseover)="btn.focus()" class="nav-button">
          <mat-icon class="icon" >{{ path.icon }}</mat-icon>
          {{ path.title }}
        </button>
      </div>
    </section>
  `,
  styles: [`
    .sidenav-content {
      width: 300px;
    }
    .nav-button {
      width: 100%;
      height: 33%;
      text-align: left;
      color: #1d305f;
      font-size: 30px;
      height: 200px;
      background-color: #fcfaf9;
    }
    .nav-button:hover {
      color: #bddac8;
    }

    .icon {
      padding-right: 20px;
    }
  `]
})
export class SideNavComponent {

  @Output() navselect = new EventEmitter();

  constructor(public route: RouteService) { }

  onNavSelect(path) {
    this.navselect.emit(path);
    this.route.routeTo(path);
  }
}

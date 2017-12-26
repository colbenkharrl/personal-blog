import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-blog',
  template: `
    <div class="body-container">
      <app-posts></app-posts>
      <app-new-post *ngIf="auth.isAuthenticated"></app-new-post>
    </div>
  `,
  styles: [`
  `]
})
export class BlogComponent {
  constructor(public auth: AuthService) { }
}


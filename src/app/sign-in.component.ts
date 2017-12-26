import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  template: `
  <div class="body-container">
    <mat-card class="card">
      <form
        [formGroup]="form"
        (ngSubmit)="login()">
      <mat-input-container style="width:350px">
        <input matInput placeholder="Username" formControlName="username">
      </mat-input-container>
      <br />
      <mat-input-container style="width:350px">
        <input matInput placeholder="Password" type="password"  formControlName="password">
      </mat-input-container>
      <br />
      <button mat-raised-button [disabled]="!form.valid">Log In</button>
      <span class="error" *ngIf="errors?.valid">Invalid username or password</span>
      </form>
    </mat-card>
  <div>
  `,
  styles: [`
    .error {
      color: red;
      padding-left: 10px;
    }

    button {
      background-color: #59687d;
      color: #fcfaf9;
    }

    button:hover {
      background-color: #bddac8;
      color: #fcfaf9;
    }
  `]
})
export class SignInComponent {
  form;
  errors = null;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

  login() {
    this.auth.signin(this.form.value).subscribe(res => {
      if (!this.auth.authenticate(res)) {
        this.errors = { valid: true};
      }
    }, res => {
      console.log('login failed');
    });
  }
}

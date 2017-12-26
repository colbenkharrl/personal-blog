import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
  <app-greeting></app-greeting>
  <app-about-me></app-about-me>
  <app-education></app-education>
  <app-experience></app-experience>
  <app-skills></app-skills>
  `
})
export class AboutComponent {

}

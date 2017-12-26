import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-card class="card">
      <div class="container">
        <div><p class="name">matt kharrl.</p></div>
        <span style="flex: 1 1 auto"></span>
        <div id="social-links"><p>
        <a *ngFor="let link of links" href="{{link.link}}" [target]="link.external ? '_blank' : ''">
          <img src="{{link.image}}" class="contact-icon"/></a>
        </p></div>
      </div>
    </mat-card>
  `,
  styles: [`

  .container {
    display: flex;
    width: 100%;
    height: 72px;
  }

  mat-card {
    background-color: inherit;
    margin: 0px auto;
    padding: 15px;
    box-shadow: none !important;
  }

  .contact-icon {
    padding: 0px 2px;
    width: 30px;
  }

  .contact-icon:hover {
    width: 32px;
    padding: 0px 1px;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Merriweather Sans', Arial;
  }

  p {
    font-family: 'Merriweather Sans', Arial;
    color: #fcfaf9;
    display: table-cell;
    vertical-align: middle;
    height: 72px;
    padding: 0px;
    padding-right: 10px;
  }
  a,
  a.visited {
    color: #fcfaf9;
    text-decoration: none;
  }
  `]
})
export class FooterComponent {
  links = [
    { image: 'assets/images/contact-icons/mail-circle.png', link: 'mailto:m@kharrl.com', external: false},
    { image: 'assets/images/contact-icons/phone-circle.png', link: 'tel:623-251-0185', external: false},
    { image: 'assets/images/contact-icons/linkedin-circle.png', link: 'https://www.linkedin.com/in/mattkharrl/', external: true},
    { image: 'assets/images/contact-icons/github-circle.png', link: 'https://github.com/colbenkharrl', external: true},
    { image: 'assets/images/contact-icons/twitter-circle.png', link: 'https://twitter.com/mattkharrl', external: true},
    { image: 'assets/images/contact-icons/instagram-circle.png', link: 'https://www.instagram.com/mattkharrl/', external: true}
  ]
}

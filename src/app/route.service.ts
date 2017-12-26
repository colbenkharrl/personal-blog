import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteService {
  links = [
    {title: 'About', route: '/', icon: 'person'},
    {title: 'Blog', route: '/blog', icon: 'textsms'},
    {title: 'Admin', route: '/signin', icon: 'fingerprint'}
  ];

  constructor(private router: Router) { }

  routeTo(rt) {
    this.router.navigate([rt.route]);
  }

  get current() {
    return this.links[this.index];
  }

  get index() {
    return this.links.findIndex(l => l.route === this.router.url);
  }
}

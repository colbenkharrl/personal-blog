import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
  <div id="about-container">
    <div class="content-container light-section">
      <div class="section-title">
        <h1 class="section-title-text"><i class="material-icons title-icon">remove_red_eye</i>EXPERIENCE</h1>
      </div>
      <p style="font-size: 20px;">See what I've been up to for the past few years.</p>
      <div class="section-text">
        <div class="roles">
          <mat-card *ngFor="let work of employmentHistory">
            <h1 class="company-name">
              <a href="{{work.link}}" class="link" target="_blank">{{work.company}}</a>
              <span class="location">{{work.location}}</span>
            </h1>
            <p class="time">{{work.timespan}}</p>
            <h2 class="title">{{work.title}}</h2>
          </mat-card>
        </div>
      </div>
    </div>
  <div>
  `,
  styles: [`
    #about-container {
      background-color: #fcfaf9;
      position: relative;
      box-shadow: 0 2px 2px 0px #152c43, 0 4px 4px 0px #444;
      z-index: 1;
    }

    .roles {
      margin-right: 20px;
    }

    mat-card {
      margin: 10px 0px;
      background-color: #fcfaf9;
      border: 1px solid #152c43;
    }

    .company-name {
      color: #152c43;
      margin-bottom: 5px;
    }

    .time {
      color:#152c43;
      margin: 5px;
    }

    .link {
      padding-right: 10px;
      text-decoration: none;
      color: #152c43;
    }

    .link:hover {
      text-decoration: underline;
    }

    .title {
      color: #59687d;
      font-weight: 400;
    }

    .location {
      color: #59687d;
      font-size: 20px;
    }
  `]
})
export class ExperienceComponent {

  constructor() { }

  employmentHistory = [
    {
      company: 'ThreatMetrix',
      title: 'Developer',
      detail: '',
      location: 'San Jose, CA',
      link: 'https://www.threatmetrix.com/',
      timespan: 'August 2017 - Present'
    },
    {
      company: 'ThreatMetrix',
      title: 'Product Management Intern',
      detail: '',
      location: 'San Jose, CA',
      link: 'https://www.threatmetrix.com/',
      timespan: 'May 2017 - August 2017'
    },
    {
      company: 'Edupoint',
      title: 'Software Development Intern',
      detail: '',
      location: 'Mesa, AZ',
      link: 'http://www.edupoint.com/',
      timespan: 'January 2017 - May 2017'
    },
    {
      company: 'Apple Inc.',
      title: 'Technical Advisor',
      detail: '',
      location: 'Tempe, AZ',
      link: 'https://www.apple.com/',
      timespan: 'June 2015 - November 2016'
    }
  ];

}

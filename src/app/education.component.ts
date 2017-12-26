import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
  <div id="about-container">
    <div class="content-container dark-section">
      <div class="section-title">
        <h1 class="section-title-text"><i class="material-icons title-icon">school</i>EDUCATION</h1>
      </div>
      <div class="section-text">
        <div class="schools">
          <h1 id="uni">Bachelors of Sciences, Computer Science</h1>
          <h2>Arizona State University</h2>
          <p id="graduation">Expected Graduation: May 2019</p>
          </div>
      </div>
    </div>
  <div>
  `,
  styles: [`
    mat-card {
      background-color: #fcfaf9;

    }

    #about-container {
      background-color: #8993a2;
      position: relative;
      z-index: 2;
      box-shadow: 0 2px 2px 0px #555, 0 4px 4px 0px #777;
    }

    #uni {
      color: #fcfaf9;
      font-size: 40px;
      font-weight: 400;
      margin: 15px 0px;
    }

    #graduation {
      color: #fcfaf9;
      font-size: 20px;
    }

    h2 {
      color: #fcfaf9;
      font-size: 24px;
      font-family: 'Merriweather Sans', 'Roboto';
      margin: 15px 0px;
      font-weight: 700;
      font-size: 30px;
    }

    .schools {
      margin-right: 20px;
    }
  `]
})
export class EducationComponent {

}

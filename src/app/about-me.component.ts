import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
  <div id="about-container">
    <div class="content-container light-section">
      <div class="section-title">
        <h1 class="section-title-text"><i class="material-icons title-icon">person</i>ABOUT ME</h1>
      </div>
      <div class="section-text">
        <p class="basic-text">
        I am a software developer, and I like to build cool things for the web.
        I write code in modern web languages and technologies, such as TypeScript for Angular2, ES6 for NodeJS, and D3 for interactive data visualization.
        I develop apps for your phone as well, with experience in Swift/Xcode for native iOS development and Ionic for cross-platform hybrid applications.
        </p>

        <p class="basic-text">
        I also have experience on the back-end. I have developed for large information platforms utilizing strong
        Object-Oriented programming techniques and knowledge of database schemas and management in SQL.
        I am also experienced in the MEAN stack, and have deployed scaleable web applications with secure Express web servers and
        NoSQL document databases in MongoDB.</p>
      </div>
    </div>
  <div>
  `,
  styles: [`
    #about-container {
      background-color: #bddac8;
      position: relative;
      z-index: 3;
      box-shadow: 0 2px 2px 0px #474c54, 0 4px 4px 0px #666;
    }
  `]
})
export class AboutMeComponent {

}

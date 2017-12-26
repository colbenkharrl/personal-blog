import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
  <div id="about-container">
    <div id="greeting-container" class="about-content-panel">
      <h1 id="name-text">Matt Kharrl</h1>
      <h1 id="big-text">SOFTWARE DEVELOPER</h1>
      <p id="tagline">"Building a cool thing each day keeps the imposter syndrome away."</p>
      <p id="description">Specialized in the development of cross-platform client applications.</p>
    </div>
  <div>
  `,
  styles: [`
    #name-text {
      font-size: 40px;
      font-family: 'Merriweather Sans', 'Roboto';
      padding-top: 150px;
      margin: 0px;
      color: #152c43;
      font-weight: 400;
    }

    #big-text {
      font-size: 60px;
      font-family: 'Merriweather Sans', 'Roboto';
      color: #152c43;
      margin: 0px;
    }

    #tagline {
      font-size: 14px;
      font-style: italic;
      margin-top: 40px;
      font-family: 'Merriweather Sans', 'Roboto';
      color: #152c43;
    }

    #description {
      font-size: 20px;
      font-family: 'Merriweather Sans', 'Roboto';
      color: #152c43;
      padding-bottom: 150px;
    }

    #big-text:after {
      content: ' ';
      display: block;
      width: 15%;
      margin: 10px auto -10px 0;
      border: 2px solid #152c43;
    }

    #about-container {
      width: 100%;
      padding: 10px 0px;
      background-color: #fcfaf9;
      position: relative;
      z-index: 4;
      box-shadow: 0 2px 2px 0px #53665a, 0 4px 4px 0px #888888;
    }

    .about-content-panel {
      padding: 5px 20px;
      margin: auto;
      width: 100%;
      max-width: 1080px;
    }
  `]
})
export class GreetingComponent {

}

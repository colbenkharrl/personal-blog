import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
  <div id="about-container">
    <div class="content-container dark-section">
      <div class="section-title">
        <h1 class="section-title-text"><i class="material-icons title-icon">graphic_eq</i>SKILLS</h1>
      </div>
      <div class="section-text">
        <div *ngFor="let category of skillList" class="skill-container">
          <h2 class="skill-category">{{category.category}}</h2>
          <div *ngFor="let skill of category.skills" class="skill">
            <h3 class="name">{{skill.name}}</h3>
            <div class="meter">
              <div class="knowledge" [ngStyle]="{'width': skill.mastery + '%'}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div>
  `,
  styles: [`
    #about-container {
      background-color: #59687d;
      position: relative;
      z-index: 0;
    }

    .name {
      color: #fcfaf9;
      font-family: 'Merriweather Sans', 'Roboto';
      font-size: 16px;
      font-weight: 400;
      margin: 5px 0px;
    }

    .meter {
      width: 100%;
      height: 10px;
      background-color: rgba(252,250,249,0.5);
      margin-bottom: 15px;
    }

    .knowledge {
      height: 100%;
      background-color: rgb(252,250,249);
    }

    .skill-category {
      color: rgb(252,250,249);
      font-family: 'Merriweather Sans', 'Roboto';
      font-size: 24px;
      margin: 10px 0px;
    }

    .skill-container {
      margin-bottom: 50px;
    }
  `]
})
export class SkillsComponent {

  skillList = [
    {
      category: 'Web / Front End',
      skills: [
        { name: 'HTML', mastery: 85},
        { name: 'CSS', mastery: 60},
        { name: 'JavaScript', mastery: 75},
        { name: 'Angular2', mastery: 55}
      ]
    },
    {
      category: 'Server / Back End',
      skills: [
        { name: 'NodeJS', mastery: 70},
        { name: 'ASP.NET', mastery: 35},
        { name: 'Express', mastery: 60},
        { name: 'MongoDB', mastery: 45},
        { name: 'SQL', mastery: 45}
      ]
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Swift', mastery: 60},
        { name: 'Xcode', mastery: 45},
        { name: 'Ionic', mastery: 50}
      ]
    },
    {
      category: 'Object-Oriented Programming',
      skills: [
        { name: 'C#', mastery: 70 },
        { name: 'Java', mastery: 65 },
        { name: 'Python3', mastery: 55 },
        { name: 'C++', mastery: 45 }
      ]
    }
  ]

}

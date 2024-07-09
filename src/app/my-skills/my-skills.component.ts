import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    { img: './../../assets/img/Angular.png', name: 'Angular' },
    { img: './../../assets/img/Type-script.png', name: 'TypeScript' },
    { img: './../../assets/img/Javascript.png', name: 'JavaScript' },
    { img: './../../assets/img/html.png', name: 'HTML' },
    { img: './../../assets/img/Firebase.png', name: 'Firebase' },
    { img: './../../assets/img/git.png', name: 'GIT' },
    { img: './../../assets/img/css.png', name: 'CSS' },
    { img: './../../assets/img/api.png', name: 'Rest-Api' },
    { img: './../../assets/img/scrum.png', name: 'Scrum' },
    { img: './../../assets/img/material-design.png', name: 'Material Design' },
  ];
}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    this.animateMySkills();
  }

  animateMySkills(): void {
    let description = document.querySelectorAll('.description-my-skills');
    let skills = document.querySelectorAll('.skills-icons-container');

      gsap.fromTo(skills,
        {y: '100%', opacity: 0},
        {
          opacity: 1,
          y: '0%',
          scrollTrigger: {
            trigger: skills,
            start: 'top 99%',
            end: 'top 75%',
            scrub: true,
        },
        duration: 1,
      }
      );

      gsap.fromTo(description,
        {y: '100%', opacity: 0},
        {
          opacity: 1,
          y: '0%',
          scrollTrigger: {
            trigger: description,
            start: 'top 99%',
            end: 'top 75%',
            scrub: true,
        },
        duration: 1,
      }
      );
  }


}

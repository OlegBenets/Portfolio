import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

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
    this.shakeEffect();
  }

  animateMySkills(): void {
    let description = document.querySelectorAll('.description-my-skills');
    let skills = document.querySelectorAll('.skills-icons-container');

    gsap.fromTo(
      skills,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: skills,
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      description,
      { x: '100%', opacity: 0 },
      {
        opacity: 1,
        x: '0%',
        scrollTrigger: {
          trigger: description,
          start: 'top 99%',
          end: 'top 50%',
          scrub: true,
        },
        duration: 1,
      }
    );
  }

  shakeEffect(): void {
    let elements = this.elementRef.nativeElement.querySelectorAll('.skills-icons');

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('mouseenter', () => {
        this.animateElement(element);
      });
      element.addEventListener('mouseleave', () => {
        gsap.killTweensOf(element); // Stop all played Animations for this Element
        gsap.to(element, {x: 0, y: 0}); 
      });
    });
  }

  animateElement(element: HTMLElement): void {
    gsap.to(element, {
      duration: 0.1,
      x: 10,
      yoyo: true,
      repeat: 6,
      ease: 'power1.inOut',
    });
  }

}

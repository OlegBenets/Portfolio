import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements AfterViewInit {
    
  /**
   * Creates an instance of MySkillsComponent.
   * 
   * @param elementRef - The reference to the component's DOM element.
   * @param translate - The TranslateService for internationalization.
   */
  constructor(private elementRef: ElementRef, private translate: TranslateService) {}

  /**
   * The list of skills to be displayed in the 'My Skills' section.
   */
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

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   * 
   * Initializes the animations for the 'My Skills' section.
   */
  ngAfterViewInit(): void {
    this.animateMySkills();
    this.shakeEffect();
  }

  /**
   * Switches the application language.
   * 
   * @param language - The language code to switch to.
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  /**
   * Animates elements in the 'My Skills' section using GSAP.
   * 
   * Animates the description and skills icons with scroll-triggered animations.
   */
  animateMySkills(): void {
    this.setupAnimation('.skills-icons-container', { opacity: 0 }, { opacity: 1 }, 'top 99%', 'top 60%');
    this.setupAnimation('.description-my-skills', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'top 99%', 'top 50%');
  }
  
  /**
   * Helper function to set up GSAP animation.
   * 
   * @param selector - The CSS selector for the elements to animate.
   * @param fromVars - The starting properties for the animation.
   * @param toVars - The ending properties for the animation.
   * @param start - The start position for the scroll trigger.
   * @param end - The end position for the scroll trigger.
   */
  setupAnimation(selector: string, fromVars: gsap.TweenVars, toVars: gsap.TweenVars, start: string, end: string): void {
    const elements = document.querySelectorAll(selector);
    gsap.fromTo(elements, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: elements,
        start: start,
        end: end,
      },
      duration: 1,
    });
  }
  
  /**
   * Adds a shake effect to skill icons on mouse enter and stop the effect on mouse leave.
   */
  shakeEffect(): void {
    let elements =
      this.elementRef.nativeElement.querySelectorAll('.skills-icons');

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('mouseenter', () => {
        this.animateElement(element);
      });
      element.addEventListener('mouseleave', () => {
        gsap.killTweensOf(element);
        gsap.to(element, { x: 0, y: 0 });
      });
    });
  }

  /**
   * Animates the given element with a shaking effect.
   * 
   * @param element - The element to animate.
   */
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

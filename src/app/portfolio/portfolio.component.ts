import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements AfterViewInit {

  /**
   * Creates an instance of PortfolioComponent.
   * 
   * @param translate - The TranslateService for handling translations.
   */
  constructor(private translate: TranslateService) {}

  /**
   * The data service for fetching project data.
   */
  projectsdata = inject(DataService);

  /**
   * Lifecycle hook that is called after Angular has fully initialized a component's view.
   * This method is used to perform post-view initialization. It calls `animateProjects` to trigger animations.
   */
  ngAfterViewInit(): void {
    this.animateProjects();
  }

  /**
   * Switches the application language and stores the selected language in local storage.
   * 
   * @param language - The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  /**
   * Animates project items and other elements in the portfolio using GSAP.
   * This method handles animations for project items, descriptions, and headlines.
   */
  animateProjects(): void {
    document.querySelectorAll('.single-project').forEach((project, index) => {
      const direction = index % 2 === 0 ? '-100%' : '100%';

      gsap.fromTo(project,
        { x: direction, opacity: 0 },
        {x: '0%', opacity: 1,
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
          duration: 1,
        }
      );
    });

    this.setupAnimation('.description', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'top 99%', 'top 30%', 2);
    this.setupAnimation('.portfolio-headline', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'top 99%', 'top 30%', 2);
  }

  /**
   * Helper function to set up GSAP animations with scroll-trigger.
   * 
   * @param selector - The CSS selector for the elements to animate.
   * @param fromVars - The starting properties for the animation.
   * @param toVars - The ending properties for the animation.
   * @param start - The start position for the scroll trigger (e.g., 'top 80%').
   * @param end - The end position for the scroll trigger (e.g., 'top 50%').
   * @param duration - Optional duration of the animation in seconds. Defaults to 1 second.
   */
    setupAnimation(selector: string, fromVars: gsap.TweenVars, toVars: gsap.TweenVars, start: string, end: string, duration: number = 1): void {
      const elements = document.querySelectorAll(selector);
      gsap.fromTo(elements, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: elements,
          start: start,
          end: end,
          scrub: true,
        },
        duration: duration,
      });
    }
}

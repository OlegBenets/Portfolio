import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  /**
   * Creates an instance of AboutMeComponent.
   *
   * @param translate - The TranslateService for internationalization.
   */
  constructor(private translate: TranslateService) {}

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
   * Lifecycle hook that is called after the component's view has been fully initialized.
   *
   * Initializes the animations for the 'About Me' section.
   */
  ngAfterViewInit(): void {
    this.animateAboutMe();
  }

  /**
   * Animates elements in the 'About Me' section using GSAP.
   *
   * Animates the image and description elements with scroll-triggered animations.
   */
  animateAboutMe(): void {
    this.setupAnimation('.small-image-container', '100%');
    this.setupAnimation('.description-about-me', '-100%');
  }

  /**
   * Helper function to set up GSAP animation.
   *
   * @param selector - The CSS selector for the elements to animate.
   * @param xStart - The starting x position for the animation.
   */
  setupAnimation(selector: string, xStart: string): void {
    let elements = document.querySelectorAll(selector);

    gsap.fromTo(
      elements,
      { x: xStart, opacity: 0 },
      {
        opacity: 1,
        x: '0%',
        scrollTrigger: {
          trigger: elements,
          start: 'top 80%',
          end: 'top 50%',
        },
        duration: 1,
      }
    );
  }
}

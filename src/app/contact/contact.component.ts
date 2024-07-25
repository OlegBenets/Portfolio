import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  /**
   * Creates an instance of ContactComponent.
   *
   * @param translate - The TranslateService for internationalization.
   */
  constructor(public translate: TranslateService) {}

  /**
   * The HttpClient instance for making HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   *
   * Initializes the animations for the 'Contact' section.
   */
  ngAfterViewInit(): void {
    this.animateContact();
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
   * The data model for the contact form.
   */
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  /**
   * A flag for testing the form submission without actually sending data.
   */
  mailTest = true;

  /**
   * Configuration for the HTTP POST request.
   */
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission.
   *
   * Sends the form data to the server if the form is valid and not in test mode.
   *
   * @param ngForm - The form to be submitted.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  /**
   * Animates elements in the 'Contact' section using GSAP.
   * 
   * Animates the headline and form elements with scroll-triggered animations.
   */
  animateContact(): void {
    this.setupAnimation('.headline', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1 }, 'top 99%', 'top 40%');
    this.setupAnimation('.form-description-container', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1 }, 'top 150%', 'top 90%');
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
        scrub: true,
      },
      duration: 1,
    });
  }
}

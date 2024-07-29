import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  /**
   * Indicates whether the burger menu is visible or not.
   * @type {boolean}
   */
  isBurgerMenuVisible: boolean = false;

  /**
   * Array of image paths for the burger menu animation.
   * @type {string[]}
   */
  images: string[] = [
    './../../../assets/img/burger menu.png',
    './../../../assets/img/Property 1=Transition.png',
    './../../../assets/img/Property 1=close medium.png',
    './../../../assets/img/Property 1=CLOSE FINAL.png',
  ];

  /**
   * The current image being displayed in the burger menu animation.
   * @type {string}
   */
  currentImage: string = this.images[0];

  /**
   * Interval ID for the image animation.
   * @type {any}
   */
  animationInterval: any;

  /**
   * The currently active link.
   * @type {string}
   */
  activeLink: string = '';
 
  /**
   * Creates an instance of the HeaderComponent.
   * @param {TranslateService} translate - Service used for language translation.
   */
  constructor(private translate: TranslateService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   */
  ngOnInit(): void {
    this.animateHeader();
  }

  /**
   * Switches the application's language and stores the selected language in local storage.
   * @param {string} language - The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
  
  /**
   * Sets the active link.
   * @param {string} link - The link to set as active.
   */
  setActiveLink(link: string) {
    this.activeLink = link;
  }

  /**
   * Animates the header element using GSAP.
   */
  animateHeader(): void {
    const header = document.querySelector('header');

    gsap.fromTo(
      header,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1 }
    );
  }

  /**
   * Toggles the visibility of the burger menu and manages the image animation.
   */
  toggleBurgerMenu() {
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;

    if (this.isBurgerMenuVisible) {
      this.animateImages();
    } else {
      this.reverseAnimationImages();
    }
  }

  /**
   * Starts animating the burger menu images in a forward direction.
   */
  animateImages() {
    let index = 0;
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(() => {
      this.currentImage = this.images[index];
      index = (index + 1) % this.images.length;
      if (!this.isBurgerMenuVisible || index === 0) {
        clearInterval(this.animationInterval);
      }
    }, 90);
  }

  /**
   * Starts animating the burger menu images in a reverse direction.
   */
  reverseAnimationImages() {
    let index = this.images.length - 1;
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(() => {
      this.currentImage = this.images[index];
      index--;
      if (index < 0 || this.isBurgerMenuVisible) {
        clearInterval(this.animationInterval);
      }
    }, 90);
  }
}

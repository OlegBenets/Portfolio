import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isBurgerMenuVisible: boolean = false;
  images: string[] = [
    './../../../assets/img/burger menu.png',
    './../../../assets/img/Property 1=Transition.png',
    './../../../assets/img/Property 1=close medium.png',
    './../../../assets/img/Property 1=CLOSE FINAL.png'
  ];
  currentImage: string = this.images[0];
  animationInterval: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.animateHeader();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  animateHeader():void {
    const header = document.querySelector('header');

    gsap.fromTo(header, 
      {y: '-100%', opacity: 0},
      {y: '0%', opacity: 1, duration: 1}
    )
  }

  toggleBurgerMenu() {
    this.isBurgerMenuVisible = !this.isBurgerMenuVisible;
      
    if (this.isBurgerMenuVisible) {
      this.animateImages();
    } else {
      this.reverseAnimationImages();
    }
  }

  animateImages() {
    let index = 0;
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(() => {
      this.currentImage = this.images[index];
      index = (index + 1) % this.images.length;
      if(!this.isBurgerMenuVisible || index === 0) {
        clearInterval(this.animationInterval);
      }
    }, 90);
  }

  reverseAnimationImages() {
    let index = this.images.length - 1;
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(() => {
      this.currentImage = this.images[index];
      index--;
      if(index < 0 || this.isBurgerMenuVisible) {
        clearInterval(this.animationInterval);
      }
    }, 90);
  }
}

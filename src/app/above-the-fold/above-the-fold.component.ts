import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.animateATF();
  }

  animateATF():void {
    let imageOfMe = document.querySelector('.profile-img');
    let nameContainer = document.querySelector('.introduce');
    let button = document.querySelector('.lets-talk-button');
    let scroll = document.querySelector('.scroll-container');
    let links = document.querySelector('.social-links');

    gsap.timeline()
      .fromTo(imageOfMe, 
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1 }
      )
      .fromTo(nameContainer, 
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1 },
        '-=1'
      )
      .fromTo(button, 
        { y: '200%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1 },
        '-=1' 
      );
      gsap.fromTo(scroll, 
        {y: -15},
        {y:15, duration: 1, ease: 'power1.inOut', repeat: -1, yoyo: true}
      );
      gsap.fromTo(links, 
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1 }
      );
  }
}

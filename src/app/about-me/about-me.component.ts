import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    this.animateAboutMe();
  }

  animateAboutMe(): void {
    let image = document.querySelectorAll('.small-image-container');
    let description = document.querySelectorAll('.description-about-me');

      gsap.fromTo(image,
        {x: '100%', opacity: 0},
        {
          opacity: 1,
          x: '0%',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
        duration: 1,
      }
      );

      gsap.fromTo(description,
        {x: '-100%', opacity: 0},
        {
          opacity: 1,
          x: '0%',
          scrollTrigger: {
            trigger: description,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
        duration: 1,
      }
      );
  }
}


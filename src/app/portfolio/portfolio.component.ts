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
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit{

  constructor(private translate: TranslateService) {}
  
  projectsdata = inject(DataService)

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateProjects();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  animateProjects(): void {
    let projects = document.querySelectorAll('.single-project');
    let headline = document.querySelectorAll('.portfolio-headline');
    let description = document.querySelectorAll('.description');

    projects.forEach((project, index) => {
      const direction = index % 2 === 0 ? '-100%' : '100%';

      gsap.fromTo(project,
        {x:direction, opacity: 0},
        {
          x: '0%',
          opacity: 1,
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

    gsap.timeline()
      .fromTo(description, 
        { x: '100%', opacity: 0 },
        { x: '0%', 
          opacity: 1, 
          scrollTrigger: {
            trigger: description,
            start: 'top 99%',
            end: 'top 30%',
            scrub: true,
          },
        duration: 2 
        }
      )
      .fromTo(headline, 
        { x: '100%', opacity: 0 },
        { x: '0%', 
          opacity: 1, 
          scrollTrigger: {
            trigger: headline,
            start: 'top 99%',
            end: 'top 30%',
            scrub: true,
          },
        duration: 2 
        }
      );
  }
}

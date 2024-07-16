import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    this.animateHeader();
  }


  animateHeader():void {
    const header = document.querySelector('header');

    gsap.fromTo(header, 
      {y: '-100%', opacity: 0},
      {y: '0%', opacity: 1, duration: 1}
    )
  }
}

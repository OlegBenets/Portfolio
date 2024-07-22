import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './shared/header/header.component';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public translate: DataService){}

  title = 'Oleg Benets - Portfolio';

  currentLanguage: string = 'en';

  ngOnInit() {
    this.switchLanguage(this.currentLanguage);
  }

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
  }
}

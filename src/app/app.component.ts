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
    MainContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  /**
   * The title of the application.
   * @type {string}
   */
  title = 'Oleg Benets - Portfolio';

  /**
   * Creates an instance of AppComponent.
   * @param {DataService} translate - The service used for managing translations.
   */
  constructor(public translate: DataService) {}

  /**
   * Switches the language for the application.
   * This method updates the language using the DataService and saves the selected language in local storage.
   * @param {string} language - The language code to switch to (e.g., 'en' or 'de').
   */
  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
    localStorage.setItem('language', language);
  }
}

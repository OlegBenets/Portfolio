import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {

  /**
   * This method is called after the component's initialization and ensures
   * that the page is scrolled to the top.
   */
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Creates an instance of ImprintComponent.
   * 
   * @param translate - The TranslateService for internationalization.
   */
  constructor(public translate: TranslateService) {}

  /**
   * Switches the application language.
   * 
   * @param language - The language code to switch to.
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}

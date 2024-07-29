import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

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

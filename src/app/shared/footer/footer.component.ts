import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  /**
   * Creates an instance of the FooterComponent.
   * 
   * @param {TranslateService} translate - Service used for language translation.
   */
  constructor(private translate: TranslateService) {}

  /**
   * Switches the application's language and stores the selected language in local storage.
   * 
   * @param {string} language - The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}

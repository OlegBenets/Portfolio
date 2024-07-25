import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

/**
 * Factory function to create a TranslateLoader.
 * This loader will be used to load translation files from a specific path.
 * 
 * @param {HttpClient} http - The HttpClient instance used to make HTTP requests.
 * @returns {TranslateLoader} - An instance of TranslateHttpLoader configured with the given HttpClient.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * Provides the configuration for the TranslateModule.
 * This configuration includes setting up the loader for translations.
 * 
 * @returns {TranslateModule} - The configuration for the TranslateModule.
 */
export function provideTranslation() {
  return TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  });
}

/**
 * The application configuration for Angular, specifying providers and imports.
 * This configuration sets up routing, HTTP client, and translation services.
 * 
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(provideTranslation()),
  ],
};

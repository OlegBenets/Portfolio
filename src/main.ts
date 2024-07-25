import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Initializes the Angular application with the given configuration.
 * Logs errors to the console if bootstrapping fails.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

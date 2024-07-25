import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

/**
 * The route configuration for the Angular application.
 * 
 * This configuration defines the available routes and the corresponding components
 * that should be displayed when navigating to these routes.
 * 
 * @type {Routes}
 */
export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
];

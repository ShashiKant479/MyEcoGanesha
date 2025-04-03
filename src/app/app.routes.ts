import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown paths to Home
];

// { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'terms-and-conditions', loadComponent: () => import('./terms/terms.component').then(m => m.TermsComponent) },
//   { path: 'privacy-policy', loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent) },
//   { path: 'cancellation-policy', loadComponent: () => import('./cancellation/cancellation.component').then(m => m.CancellationComponent) },
//   { path: 'refund-process', loadComponent: () => import('./refund/refund.component').then(m => m.RefundComponent) },
//   { path: '**', redirectTo: '' },

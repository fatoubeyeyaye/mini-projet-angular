import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { ConnexionComponent } from './app/connexion/connexion.component';
import { AccueilComponent } from './app/accueil/accueil.component';
import { AuthGuard } from './app/auth.guard';  
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

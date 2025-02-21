import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ConnexionComponent, AccueilComponent],
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
      <div *ngIf="userData" class="user-info">
        <h2>Bienvenue, {{ userData.username }}!</h2>
        <p>Nom d'utilisateur: {{ userData.username }}</p>
        <p>Mot de passe: {{ userData.password }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mini Projet Angular';
  userData: { username: string; password: string } | null = null;

  ngOnInit() {
    // Vérifie si le code s'exécute côté client
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        this.userData = JSON.parse(storedData);
        console.log('Données utilisateur récupérées :', this.userData);
      } else {
        console.log('');
      }
    }
  }
}

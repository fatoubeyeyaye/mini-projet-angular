import { Component } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component'; // Importer ConnexionComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ConnexionComponent] 
})
export class AppComponent {
  title = 'Mini Projet Angular';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  standalone: true,   
  imports: [CommonModule]
})
export class AccueilComponent {
  userData: any;

 
}

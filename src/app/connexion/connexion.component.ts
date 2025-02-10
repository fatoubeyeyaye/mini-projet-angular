import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule ici
import { CommonModule } from '@angular/common'; // Importez CommonModule ici pour *ngIf

@Component({
  selector: 'app-connexion',
  standalone: true, // Assurez-vous que ce composant est autonome
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [ReactiveFormsModule, CommonModule] // Ajoutez les deux modules ici
})
export class ConnexionComponent {
  loginForm: FormGroup;
  submitted = false;
  userData: any;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Accès facile aux champs du formulaire
  get f() { return this.loginForm.controls; }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.userData = this.loginForm.value;
    }
  }
}

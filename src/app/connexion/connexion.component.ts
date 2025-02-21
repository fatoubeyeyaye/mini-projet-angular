import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ConnexionComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      localStorage.setItem('userData', JSON.stringify(userData));
      this.router.navigate(['/accueil']); // Redirige vers la page Accueil
    } else {
      this.errorMessage = "Nom d'utilisateur ou mot de passe invalide.";
    }
  }
}

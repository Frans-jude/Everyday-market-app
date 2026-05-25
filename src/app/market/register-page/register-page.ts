import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  registerForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[A-Za-z ]+$')
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    phone: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]],

    dateOfBirth: ['', Validators.required],

    streetAddress: ['', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9 ]+$')
    ]],

    province: ['', Validators.required],

    country: ['', Validators.required],

    terms: [false, Validators.requiredTrue]
  });

  onSubmit() {
    if (
      this.registerForm.valid &&
      this.registerForm.value.country === 'Canada'
    ) {
      this.router.navigate(['/products']);
    }
  }
}
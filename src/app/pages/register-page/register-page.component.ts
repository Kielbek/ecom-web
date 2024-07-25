import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function validateEqualPasswords(
  passwordControl: AbstractControl,
): ValidatorFn {
  return (
    confirmPasswordControl: AbstractControl,
  ): { [key: string]: any } | null => {
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
    return password !== confirmPassword
      ? { validateEqualPasswords: true }
      : null;
  };
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  email!: string;
  password!: string;
  confirmPassword!: string;
  terms!: boolean;

  ngOnInit() {
    const passwordControl = new FormControl(this.password, [
      Validators.required,
      Validators.minLength(6),
    ]);
    const confirmPasswordControl = new FormControl(this.confirmPassword, [
      Validators.required,
      validateEqualPasswords(passwordControl),
    ]);
  }

  register() {}

  loginWithGoogle() {}

  loginWithFacebook() {}

  loginWithApple() {}
}

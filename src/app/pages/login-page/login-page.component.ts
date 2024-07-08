import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  rememberMe!: boolean;

  login() {
    // Tutaj można dodać logikę logowania, np. z użyciem serwisu autoryzacji
    console.log(
      'Logging in with email:',
      this.email,
      'and password:',
      this.password,
    );
    // Przykładowa logika autoryzacji:
    // this.authService.login(this.email, this.password).subscribe(
    //   (response) => {
    //     console.log('Login successful:', response);
    //     // Przekierowanie do innej strony po udanym logowaniu
    //   },
    //   (error) => {
    //     console.error('Login failed:', error);
    //     // Obsługa błędów logowania
    //   }
    // );
  }

  loginWithGoogle() {}

  loginWithFacebook() {}

  loginWithApple() {}
}

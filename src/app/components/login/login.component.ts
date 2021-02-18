import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  constructor(public authService: AuthService, private router: Router) {}

  async onSubmit() {
    await this.authService.loginWithEmail(this.form.email, this.form.password);
    this.router.navigate(['/customers']);
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  ngOnInit(): void {}
}

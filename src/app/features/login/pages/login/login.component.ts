import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../../../sign-up/services/signup.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;

  email?: string;
  password?: string;

  constructor(private signService: SignUpService, private router: Router) {}

  ngOnInit(): void {}

  authenticate() {
    const user = this.signService.getUserByEmailAndPassword(
      this.email,
      this.password
    );
    if (!user) {
      this.error = true;
    } else {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('home');
    }
  }
}

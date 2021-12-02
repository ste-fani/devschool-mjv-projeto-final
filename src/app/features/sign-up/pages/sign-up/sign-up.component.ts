import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { SignUpService } from '../../services/signup.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: User = this.signService.getDefaultUser();

  constructor(private signService: SignUpService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm) {
    const formValue = userForm.form.value;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.signService.createUser(this.user);
    alert('Usuário criado!');
    this.router.navigateByUrl('/login');
  }
}

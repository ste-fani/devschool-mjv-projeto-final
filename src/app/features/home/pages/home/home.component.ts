import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/sign-up/models/user.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user?: User;

  constructor() {}

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      this.user = JSON.parse(userStorage);
    }
  }
}

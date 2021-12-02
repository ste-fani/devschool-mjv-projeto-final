import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  newUser: Array<User> = [
    {
      id: 1,
      name: 'Emile Santos',
      email: 'emile@email.com',
      password: 'emile12',
    },
  ];

  constructor() {}

  getDefaultUser(): User {
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
    };
  }

  getUserByEmailAndPassword(
    email: string | undefined,
    password: string | undefined
  ) {
    return this.newUser.find(
      (user) => user.email === email && user.password === password
    );
  }

  createUser(user: User) {
    this.newUser.push(user);
    return this.newUser;
  }

  generateNextId(): number {
    return this.newUser[this.newUser.length - 1].id + 1;
  }
}

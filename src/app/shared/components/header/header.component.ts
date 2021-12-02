import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/sign-up/models/user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user?: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      this.user = JSON.parse(userStorage);
    }
  }

  messagePage() {
    alert(
      'Estamos passando por manutenção e algumas páginas e funções não estão disponíveis no momento.'
    );
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  exit() {
    sessionStorage.clear();
    location.reload()
    this.navigateByUrl('/home');
  }
}

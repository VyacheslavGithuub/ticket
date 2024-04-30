import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface INavLinks {
  path: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isFullSize = false;
  navLinks: INavLinks[] = [
    { path: '/profile', name: 'Профиль', icon: 'IconNavbarHome.svg' },
    {
      path: '/tickets',
      name: 'Задачи',
      icon: 'iconNavbarRates.svg',
    },
    {
      path: '/login',
      name: 'Выход',
      icon: 'iconNavbarRates.svg',
    },
  ];

  handleSizeButtonClick(flag: boolean): void {
    this.isFullSize = flag;
  }
}

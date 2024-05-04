import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INavbarLinks, NavbarComponent } from '../navbar/navbar.component';
import { LayoutWithTitleComponent } from '../layout-with-title/layout-with-title.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [NavbarComponent, LayoutWithTitleComponent, RouterOutlet],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
})
export class LayoutPageComponent {
  navLinks: INavbarLinks[] = [
    {
      path: '/tickets',
      name: 'Задачи',
      icon: 'assets/icons/navbar/IconTickets.svg',
    },
    { path: '/profile', name: 'Профиль', icon: 'assets/icons/navbar/IconPerson.svg' },
    {
      path: '/login',
      name: 'Выход',
      icon: 'assets/icons/navbar/IconExit.svg',
    },
  ];
}

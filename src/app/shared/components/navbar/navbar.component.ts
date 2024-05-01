import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface INavbarLinks {
  path: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) navLinks: INavbarLinks[] = [];
  isFullSize = false;

  handleSizeButtonClick(): void {
    this.isFullSize = !this.isFullSize;
  }
}

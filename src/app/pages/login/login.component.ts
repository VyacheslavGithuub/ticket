import { Component } from '@angular/core';
import { LayoutWithTitleComponent } from '../../shared/components/layout-with-title/layout-with-title.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutWithTitleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}

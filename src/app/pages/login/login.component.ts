import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutWithTitleComponent } from '../../shared/components/layout-with-title/layout-with-title.component';
import { nnfb } from '../../shared/helpers/nnfb';
import { IUserFormGroup } from '../../shared/api/api-users/api-user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutWithTitleComponent, NgClass, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLogin = true;
  formLogin: IUserFormGroup = nnfb.group({
    // id: nnfb.control(uuidv4()),
    login: nnfb.control('', Validators.required),
    password: nnfb.control('', [Validators.required, Validators.minLength(6)]),
  });

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const button = document.querySelector('.password-input button') as HTMLButtonElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      button.textContent = 'Скрыть';
    } else {
      passwordInput.type = 'password';
      button.textContent = 'Показать';
    }
  }

  changeLogin(check: boolean) {
    this.isLogin = check;
  }
}

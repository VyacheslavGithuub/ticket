import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutWithTitleComponent } from '../../shared/components/layout-with-title/layout-with-title.component';
import { nnfb } from '../../shared/helpers/nnfb';
import { IUserFormGroup } from '../../shared/api/api-users/api-user';
import { UiPasswordComponent } from '../../shared/UI/ui-password/ui-password.component';
import { UiInputComponent } from '../../shared/UI/ui-input/ui-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LayoutWithTitleComponent,
    NgClass,
    ReactiveFormsModule,
    UiPasswordComponent,
    UiInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLogin = true;
  formLogin: IUserFormGroup = nnfb.group({
    login: nnfb.control('', Validators.required),
    password: nnfb.control('', [Validators.required, Validators.minLength(6)]),
  });

  changeLogin(check: boolean) {
    this.isLogin = check;
  }
}

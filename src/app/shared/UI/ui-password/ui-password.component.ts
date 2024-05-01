import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ui-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './ui-password.component.html',
  styleUrl: './ui-password.component.scss',
})
export class UiPasswordComponent {
  @Input({ required: true }) control!: FormControl<string>;
  passwordType: 'password' | 'text' = 'password';

  changePasswordType() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}

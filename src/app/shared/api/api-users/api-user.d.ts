import { FormControl, FormGroup } from '@angular/forms';

export type IUserFormGroupValue = typeof userForm.controls;

export type IUserFormGroup = FormGroup<{
  login: FormControl<string>;
  password: FormControl<string>;
}>;

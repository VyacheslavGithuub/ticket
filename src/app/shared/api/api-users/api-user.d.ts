import { FormControl, FormGroup } from '@angular/forms';

export type IUserFormGroupValue = typeof userForm.controls;

export type IUserFormGroup = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>;

export interface ILoginAndRegistrationResponse {
  accessToken: string;
  user: {
    email: string;
    id: string;
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { IUserFormGroupValue } from './api-user';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private httpClient: HttpClient) {}

  loginAndRegistration(path: 'login' | 'register', data: IUserFormGroupValue) {
    this.httpClient.post(`${environment.users}/${path}`, data).pipe(take(1)).subscribe();
  }
}

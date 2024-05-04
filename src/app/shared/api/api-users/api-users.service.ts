import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { ILoginAndRegistrationResponse, IUserFormGroupValue } from './api-user';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private httpClient: HttpClient) {}

  loginAndRegistration(
    path: 'login' | 'register',
    data: IUserFormGroupValue,
  ): Observable<ILoginAndRegistrationResponse> {
    return this.httpClient
      .post<ILoginAndRegistrationResponse>(`${environment.users}/${path}`, data)
      .pipe(take(1));
  }
}

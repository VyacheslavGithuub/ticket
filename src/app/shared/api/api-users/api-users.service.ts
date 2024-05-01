import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private httpClient: HttpClient) {}
}

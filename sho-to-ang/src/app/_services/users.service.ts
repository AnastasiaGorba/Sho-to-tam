import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    let url = "https://localhost:7053/api/users/" + id;
    return this.http.get<User>(url);
  }
}
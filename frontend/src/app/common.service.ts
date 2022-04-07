import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import {User} from './shared/user.model'


@Injectable({
  providedIn: 'root'
})
export class CommonService{
  selectedUser: User = new User;
  users: User[] = [];
  readonly baseURL = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  createUser(user: User){
    return this.http.post(this.baseURL + '/register', user);
  }

  checkUser(user: User){
    return this.http.post(this.baseURL + '/authenticate', user);
  }

  isUserVerified(user: User){
    return this.http.post(`${this.baseURL}/user/verify`, user);
  }

  getOrders(email: any){
    return this.http.post(`${this.baseURL}/myOrders`, {email});
  }
}


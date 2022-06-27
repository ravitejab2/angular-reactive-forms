import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(){
    localStorage.setItem('Access_Token',"access_token");
  }

  public IsLoggedIn(){
    return localStorage.getItem('Access_Token')!==null;
  }

  public logout(){
    localStorage.removeItem('Access_Token')
  }
}

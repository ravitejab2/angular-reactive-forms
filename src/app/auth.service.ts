import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo:IUser){
    localStorage.setItem('Access_Token',"access_token");
  }

  public IsLoggedIn(){
    return localStorage.getItem('Access_Token')!==null;
  }

  public logout(){
    localStorage.removeItem('Access_Token')
  }
}

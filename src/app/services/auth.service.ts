import { Injectable } from '@angular/core'  ;
import {Router} from "@angular/router";
import {UserService } from "./user.service";

 @Injectable({
  providedIn: 'root'
})
export class  AuthService {

  constructor (  private router: Router) { }

    public   isLogged():  boolean {
    const  token = this.getToken();
     return token  !== null
  }

   getToken   () {
    const token =  localStorage.getItem('token' )
    if  (token != 'undefined ')  {
      return   token;
    } else {
       return  null  ;
    }
  }


     logout  () {

    localStorage.clear ();

    this.router.navigate( ['/login'] )
   }
}

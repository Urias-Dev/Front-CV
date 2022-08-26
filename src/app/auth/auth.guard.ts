import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";
import {LoginComponent} from "../pages/login/login.component";

@Injectable({
  providedIn: 'root'
  })
export class AuthGuard  implements CanActivate  {

   public token: boolean ;
    constructor (private userService: UserService, private router:  Router) {

     }

  canActivate  (
    next: ActivatedRouteSnapshot ,
    state:  RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.check(next,  state)
  }

  private check   (next: ActivatedRouteSnapshot, state:  RouterStateSnapshot) {

     this.token =  this.userService.getToken();

    if (this.token   ) {
      return true;
    } else {
        this.router.navigate  (['login'] );
    }

    return this.token
  }

}

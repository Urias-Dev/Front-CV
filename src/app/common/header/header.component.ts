import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private router: Router , private userService: UserService) { }

  ngOnInit():  void {
    this.validarUser() ;

  }

  login (page : string) {
     this.router.navigate([`${ page}`])
  }


    validarUser   () {

    const   token : boolean =   this.userService.getToken();

    if (token ) {
        return true;
    }
    else  {
      return false;
     }

   }

    logout () {
    localStorage.clear();
    this.router.navigate(['home'])
  }

}

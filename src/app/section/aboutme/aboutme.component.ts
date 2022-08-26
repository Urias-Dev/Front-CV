import {Component, Input, OnInit, Output} from '@angular/core' ;
import {UserService} from "../../services/user.service";

@Component({
  selector:  'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class   AboutmeComponent  implements OnInit {

     public name: any


     constructor    ( private userService :   UserService ) {}


    ngOnInit (): void {
      this.getDatos()    ;
    }

    async getDatos    () {
      const query : any =  await  this.userService.findUser();
      console.log( "nombre ",  query.data.nombre)
        this.name =   query.data  ;
    }

}




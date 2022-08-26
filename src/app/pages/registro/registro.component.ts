import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   public  formRegistro: FormGroup ;

  constructor( private userService : UserService,  private  formBuilder  : FormBuilder, private router: Router) { }

  ngOnInit(): void {
     this.formRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required]] ,
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required ]],
       password:  ['', Validators.required ]   ,
        foto: ['', Validators.required ],
     profesion: ['', Validators.required],
       descripcion: ['', Validators.required  ]

     })

  }


   async  registro  ( ) {
     const query : any =  await this.userService.createUser  (this.formRegistro.value)
     if (query.ok )  {
       console.log("registro exitoso,")
       this.router.navigate(['login']  )
     }
   }

}

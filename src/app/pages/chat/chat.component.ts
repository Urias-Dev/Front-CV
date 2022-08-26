import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

   public formChat :    FormGroup ;

    constructor   ( private  userService : UserService   ,  private   formBuilder : FormBuilder )   { }

  ngOnInit(): void {

       this.formChat =  this.formBuilder.group({
          message:  ['',   Validators.required ]
       })
     }

    async SendMessage  () {

       await  this.userService.sendMessage(this.formChat.value);
       console.log("mensahee",   this.formChat.value    ) ;
      this.formChat.reset ();

    }

}

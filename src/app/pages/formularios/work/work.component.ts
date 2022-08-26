import { Component, OnInit } from '@angular/core';
  import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WorkService} from "../../../services/work.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    public formWork  :  FormGroup


  constructor( private  formBuilder : FormBuilder, private    workService: WorkService  , private  router: Router ) { }

  ngOnInit(): void {

    this.formWork = this.formBuilder.group({
      empresa: [ '', Validators.required ],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
      logo  : ['', Validators.required ]
    })

    }

  get datos () {
        return this.formWork.controls;
  }

   async  registroWork  () {
     const query : any = await this.workService.createWork(this.formWork.value );
      console.log(query  )
      await  this.router.navigate(['admin/work/list'] )
   }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
 import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WorkService} from "../../../../services/work.service";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class   EditarComponent implements OnInit {


       public  formEditar = new FormGroup({

          empresa: new FormControl(''),
        fecha:  new FormControl('' ),
        descripcion : new  FormControl(''),
        logo: new FormControl( '')

      } )


   constructor(private activeRouter: ActivatedRoute , private workService: WorkService,  private  formBuilder: FormBuilder  , private  router : Router )  {

     }

      ngOnInit(): void  {
     this.findOne ()
    }

    async findOne    () {
          let  id = this.activeRouter.snapshot.paramMap.get('id' )
     console.log(id  )
    const query : any = await this. workService.findOne   (id);
     console.log(query. data  )

     this .formEditar.setValue   ( {
      'empresa': query.data.empresa ,
       'fecha'  : query.data.fecha ,
       'descripcion' : query.data.descripcion,
        'logo':   query.data.logo
     }   )
   }

    get     datos () {
         return this.formEditar.controls;
   }


    async editar   (form: any )  {
     let id =  this.activeRouter. snapshot.paramMap.get('id')
     const  query :  any = await  this.workService.editarWork(form , id );
     console.log (query ) ;
     this.router.navigate(['admin/work/list'] );
     }

 }

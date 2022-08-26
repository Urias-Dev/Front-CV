import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
  import {FormControl, FormGroup} from "@angular/forms";
import {EducationService} from "../../../../services/education.service";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public  formEditar = new  FormGroup({
    institucion  : new FormControl (''),
    especialidad: new FormControl(''),
    fecha: new FormControl( '')  ,
    logo: new FormControl('')

  })

  constructor(private activeRouter: ActivatedRoute , private eduService :   EducationService, private router :  Router) { }


   ngOnInit(): void  {
    this.findOne ();
  }

  async  findOne () {
     let id = this.activeRouter.snapshot.paramMap.get('id')
    const query: any =  await this.eduService.findOneEdu(id);
    console.log ( query.data   );

    this.formEditar.setValue ({
      'institucion' : query.data.institucion,
      'especialidad' : query.data.especialidad  ,
       'fecha': query.data.fecha,
      'logo'  : query.data.logo ,
    })
  }

  get datos  () {
     return  this.formEditar.controls
  }


   async   editar  (form: any) {
     let id =  this.activeRouter.snapshot.paramMap.get ('id')
     const  query : any = await this.eduService.updateEdu(form, id )
     console.log(query )
     await  this.router.navigate(['admin/edu/list'])
   }

}

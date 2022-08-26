import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillsService} from "../../../../services/skills.service";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit {

  public   formEditar   = new FormGroup( {
      lenguaje:  new FormControl('' ),
     porcentaje : new FormControl('') ,
     logo : new FormControl('')
  })

    constructor (   private  activeRouter  : ActivatedRoute , private     skillService:SkillsService,  private   formBuilder : FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.findOne();
  }


    async    findOne () {
     let id  = this.activeRouter.snapshot.paramMap.get('id')
     console.log(id)
     const  query : any = await  this.skillService.findOneSkill(id )
      console.log(query.data )

      this.formEditar. setValue ({
         'lenguaje'  :  query.data.lenguaje ,
         'porcentaje' : query.data.porcentaje ,
         'logo' : query.data.logo
      })
   }

     get datos() {
    return this.formEditar.controls
    }


    async editar  (form: any) {
     let id = this. activeRouter.snapshot.paramMap .get('id')
       const query  : any = await  this.skillService.updateSkill(form, id)
      console.log(query )
      this.router.navigate( ['admin/skills/list']  )
    }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkillsService} from "../../../services/skills.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    public formSkills : FormGroup;

  constructor (  private formBuilder :   FormBuilder, private  skillService  :SkillsService , private  router: Router ) { }

   ngOnInit( ): void {
    this.formSkills = this.formBuilder.group({
     lenguaje: ['', Validators.required],
      porcentaje :['', Validators.required ] ,
       logo : ['' , Validators.required  ]
      })
  }

   get   datos  () {
    return this.formSkills.controls ;
    }

    async    createSkill () {
     const query : any  = await  this.skillService.createSkill(this.formSkills.value ) ;
     console.log(query  )
        await  this.router.navigate(['admin/skills/list']  )
      }
 }

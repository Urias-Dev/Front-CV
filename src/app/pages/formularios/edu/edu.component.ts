import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EducationService} from "../../../services/education.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

   public  formEducation:  FormGroup;

  constructor(  private formBuilder : FormBuilder, private eduService :  EducationService , private  router: Router  ){ }

  ngOnInit(): void {
    this.formEducation = this.formBuilder.group({
       institucion: [ '', Validators.required],
      especialidad: ['', Validators. required],
       fecha  :['',  Validators.required ],
       logo: ['', Validators.required  ]
    })
    }

  get   datos () {
       return this.formEducation.controls ;
   }

     async createEdu () {
      const query : any = await this.eduService.createEdu(this.formEducation.value)
     console.log(query)  ;
       await  this.router.navigate(['admin/edu/list'] )
  }

}

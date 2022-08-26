import { Component, OnInit } from '@angular/core';
 import {EducationService} from "../../services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit  {

     public datas : any


   constructor  ( private   eduService : EducationService ) { }

  ngOnInit(): void {
      this.findOneEduc   ( ) ;
  }


   async  findOneEduc () {
       if (localStorage.getItem('token' )) {
          const data: any = await  this. eduService. findEduAll();
            console.log(data )

         this.datas  = data.data;

           }
        else    {
          console .log("no hayh tokendvfB  Ñv")
       }
    }
}

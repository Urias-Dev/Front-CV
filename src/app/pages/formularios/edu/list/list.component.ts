import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EducationService} from "../../../../services/education.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   public edus : any

  constructor  (  private    eduService: EducationService , private router: Router) { }

  ngOnInit(): void {
     this.findEduAll();
   }

  async findEduAll () {
     const query : any = await this. eduService.findEduAll ();
    console.log (query.data)
    this.edus = query.data;
   }



   async  editar (id :  any ) {
      this.router.navigate(['admin/edu/editar' , id])
  }

  async   eliminar (id: any ) {
     await  this.eduService.eliminarEdu(id  );
       window.location.reload() ;
  }
}

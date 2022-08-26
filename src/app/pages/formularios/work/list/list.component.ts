import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WorkService} from "../../../../services/work.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls:    ['./list.component.css']
})
export class  ListComponent implements OnInit {

  public works: any ;

    constructor( private  workService: WorkService ,  private router : Router  ) { }

   ngOnInit(): void {
    this.findWork   ( );
  }


   async findWork () {
    const query: any  =   await   this.workService.findWorkAll();
    console.log(query.data)
    this.works = query.data  ;

    }
      async editar (id:  any   )   {
      console.log("ID",  id)
      this.router.navigate (['admin/work/editar' , id]);
   }

     async   eliminar   ( id: any ) {
       const  query : any = await   this. workService.eliminarWork(id) ;
     console.log(query  ) ;
     window.location.reload () ;
   }
}

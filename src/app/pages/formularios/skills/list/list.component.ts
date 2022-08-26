import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../../../services/skills.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

     public  skills : any

  constructor (private   skillService :   SkillsService ,  private  router : Router  ) { }

  ngOnInit(): void {

   this.findSkillAll();

      }

    async   findSkillAll () {
        const data  : any = await   this.skillService.findSkillAll() ;
         console.log(data)
      this.skills = data.data;
  }

      editar  ( id: any) {
      this.router.navigate( ['admin/skills/editar', id ])
     }

     async eliminar  (id: any )  {
       const query  : any  =  await  this.skillService.eliminarSkill( id)
      console.log(" eliminado ID: ",  id)
       console.log(query   )
        window.location.reload ();
       }
}

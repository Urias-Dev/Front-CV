import { Component, OnInit } from '@angular/core';
import { SkillsService} from "../../services/skills.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements  OnInit {

  public datas :  any

   constructor ( private skillService: SkillsService ) { }

  ngOnInit(): void {
     this.findSkillAll() ;
  }

    async     findSkillAll  () {
     const data : any =  await  this.skillService.findSkillAll();
       this.datas  =   data.data;
       console.log(data  )
     }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";

const routes: Routes =  [
  {
    path : '', component: AdminComponent,
   },
  {
    path: 'work' , loadChildren: ()=> import ('../formularios/work/work.module').then(m => m.WorkModule)
   },
  {
    path:   'edu' , loadChildren: ()=> import('../formularios/edu/edu.module').then(m => m.EduModule)
   },

  {
     path:  'skills', loadChildren: ()=> import('../formularios/skills/skills.module').then( m => m.SkillsModule)
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

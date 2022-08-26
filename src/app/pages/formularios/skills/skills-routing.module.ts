import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from "./skills.component";

const routes: Routes = [
  {
      path: '', component: SkillsComponent,
   },

  {
      path : 'list', loadChildren:  ()=> import('../skills/list/list.module').then(m=> m.ListModule)
  },

  {
      path: 'editar/:id' , loadChildren: ()=> import('../skills/editar/editar.module'). then(m=> m.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }

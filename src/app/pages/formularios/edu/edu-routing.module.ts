import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EduComponent} from "./edu.component";

const routes: Routes = [
  {
    path:  '', component: EduComponent
  },
  {
    path: 'list', loadChildren: () => import('../edu/list/list.module').then(m => m.ListModule)
   },
  {
    path:  'editar/:id', loadChildren:  () => import ('../edu/editar/editar.module').then(m => m.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EduRoutingModule { }

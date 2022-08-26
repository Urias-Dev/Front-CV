import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkComponent} from "./work.component";
import {AuthGuard} from "../../../auth/auth.guard";

 const routes: Routes =  [
   {
     path: '',  component:  WorkComponent
   },
   {
     path:   'list',  canActivate:[AuthGuard],  loadChildren: ()=> import ('../work/list/list.module').then(m => m.ListModule )
    },
   {
     path:  'editar/:id' , canActivate:[AuthGuard] , loadChildren: ()=> import ('../work/editar/editar.module').then(m => m.EditarModule)
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }

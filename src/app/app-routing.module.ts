import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes  = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:   'full'
  },
   {
    path: 'home',  loadChildren: ()=> import ('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [],
  },
  {
    path: 'login', canActivate:[],  loadChildren: ()=> import('./pages/login/login.module').then(m=> m.LoginModule)
   },
  {
    path:  'admin' ,  canActivate: [AuthGuard] , loadChildren: ()=> import('./pages/admin/admin.module' ).then(m => m.AdminModule)
  },
  {
    path:    'registro' , loadChildren: ()=> import ('./pages/registro/registro.module').then(m => m.RegistroModule )
  },
   {
     path: 'chat', loadChildren: () => import( './pages/chat/chat.module').then(m => m.ChatModule )
   }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

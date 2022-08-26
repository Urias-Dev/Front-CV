import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
 import { ListComponent } from './list/list.component';
import { EditarComponent } from './editar/editar.component';
import {ReactiveFormsModule} from "@angular/forms";


 @NgModule({
  declarations: [
    ListComponent,
    EditarComponent
  ],
     imports: [
         CommonModule,
         WorkRoutingModule,
         ReactiveFormsModule
     ]
 })
export class WorkModule { }

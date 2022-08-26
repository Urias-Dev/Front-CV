import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
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
    SkillsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SkillsModule { }

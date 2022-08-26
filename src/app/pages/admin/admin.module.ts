import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
     AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AdminModule { }

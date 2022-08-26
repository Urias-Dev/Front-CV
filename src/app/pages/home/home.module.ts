import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

/*import de component */

import { HomeComponent } from './home.component';
import {SectionModule} from "../../section/section.module";

@NgModule({
    declarations: [
        HomeComponent,
    ],
  imports: [
    CommonModule ,
    HomeRoutingModule,
    SectionModule,
  ]
})
export class HomeModule { }

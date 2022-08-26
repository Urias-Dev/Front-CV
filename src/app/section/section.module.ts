import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import {HeaderComponent} from "../common/header/header.component";
import {FooterComponent} from "../common/footer/footer.component";


import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon"  ;
import { JobComponent } from './job/job.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import  {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AboutmeComponent,
    EducationComponent,
    SkillComponent,
    HeaderComponent,
    FooterComponent,
    JobComponent,
  ],
  exports: [
    AboutmeComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    JobComponent,
    SkillComponent
  ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        RouterModule,
    ]
})
export class SectionModule { }

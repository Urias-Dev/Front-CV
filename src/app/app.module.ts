import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component' ;
import {SectionModule} from "./section/section.module";
import {UserService} from "./services/user.service" ;
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {JtwInterceptor } from "./interceptor/jtw.interceptor" ;
import  {ReactiveFormsModule} from "@angular/forms";
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { WorkComponent } from './pages/formularios/work/work.component';
import { EduComponent } from './pages/formularios/edu/edu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SkillsComponent } from './pages/formularios/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    EduComponent,
    ChatComponent,
    SkillsComponent,
  ],
    imports: [
    BrowserModule  ,
     AppRoutingModule,
    SectionModule  ,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule ,
  ],
  providers  : [ { provide: HTTP_INTERCEPTORS , useClass:  JtwInterceptor, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }

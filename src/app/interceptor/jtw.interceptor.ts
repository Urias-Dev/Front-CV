import { Injectable } from   '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
   HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {environment} from "../../environments/environment";

@Injectable()
export class   JtwInterceptor implements HttpInterceptor {

   private  currentToken  : string

    constructor( private auth : AuthService, private router:  Router )    {}

   intercept(req: HttpRequest<any>,  next: HttpHandler):  Observable<HttpEvent<any>> {


     let headers: any  =   {
     };
     if ( this.auth.isLogged ()  ) {
        headers = {
        ...headers  ,
          Authorization : `${this.auth.getToken()}`
       };

        req = req .clone ( {setHeaders:  headers } );

        return next.handle (req).pipe(tap((value:  HttpEvent<any>) => {
      } ), catchError(  (err :  HttpErrorResponse)  => {
        if (err.status ===  403    && this.router.routerState.snapshot.url !== '/login' ){
          console.log("eroror 403 ,")
          this.router.navigateByUrl ('/login' );
          this.auth.logout ();
        } else if (err.status ===  401 ) {
           console.log("errorr  401 ")
          this.auth.logout() ;
          this.router.navigateByUrl('/login'  );
        }
          return throwError ( err)
      }));
    }
     return next.handle (req);
  }
  }

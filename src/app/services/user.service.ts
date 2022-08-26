import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,   HttpHeaders} from "@angular/common/http";
 import {Observable} from  "rxjs" ;
import {query} from "@angular/animations";

@Injectable({
    providedIn : 'root'
})
 export  class UserService  {

    // private aPI_URL =   environment.apiUrl;
   public url: string

  constructor( public  httpClient:  HttpClient) {
      this.url  = environment.apiUrl

    }

   //  modulo de Login y Registro de usuarioss

       async signup   ( data :  any )  {
      const query  =   this.httpClient.post (this.url +   '/login' ,  data).toPromise ()
      console.log( data)
          return query ;
     }


   async   createUser   ( user: any) {
      const query =  this.httpClient.post( this.url + '/registro'  , user).toPromise();
      console.log(user );
     return  query;

    }


    async     findUser    ()   {
     const user   =   this.httpClient.get( this.url  + '/find_user').toPromise();
     console.log(user);
     return  user;
   }

     //   obteDner el Token en el  localstorage

  getToken  () {
      if   (localStorage.getItem('token'   )  ) {
        return true
     } else {
       return  false;
      }
   }

     async     sendMessage  (message:  string ) {
      const query  = this.httpClient.post( this.url + "/sendMessage" ,  message).toPromise() ;
      console.log(query );
     }

 }

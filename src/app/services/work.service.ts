import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  public url: string

  constructor (public httpClient : HttpClient) {
    this.url  = environment.apiUrl
     }


  //  Modulo de Experiencia  Laboral


  async  findWorkAll  () {
    const query =  this.httpClient.get(this.url + '/find_work'   ).toPromise ();
    console.log(query )
    return query;
  }


  async  findOne (id : any ) {
    const query = this.httpClient.get(this.url + '/findone_work/' + id ).toPromise();
    console.log(query)
    return query;

  }
  async createWork (data : any) {
    const query = this.httpClient.post( this.url + '/create_work' ,data).toPromise() ;
    console.log(query)
    return query;

  }


  async editarWork (data : any,   id :any) {
    const query  = this.httpClient.put( this.url + '/update_work/'  + id, data ).toPromise( );
    console.log(query)
    return query ;
  }



  async eliminarWork    (id: any) {
    const query = this.httpClient.delete(this.url  +  '/delete_work/'   +id).toPromise ( ) ;
    console.log  (query )
    return   query ;

  }
}

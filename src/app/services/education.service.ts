import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  public url: string

  constructor(public httpClient: HttpClient) {
     this.url  =   environment.apiUrl
  }


  //  Moducxlo de  Educacion


  async   createEdu (data  : any) {
    const query =  this.httpClient.post(this.url + '/create_edu', data).toPromise ();
    console.log(query);
    return query
  }

  async  findEduAll  () {
    const query = this.httpClient.get( this.url + '/find_edu').toPromise();
    console.log(query) ;
    return query
  }

  async updateEdu  (data: any , id : any) {
    const query = this.httpClient.put (this.url  + "/update_edu/"  + id , data ). toPromise ()
    console.log(query)
    return query;
  }

  async   findOneEdu (id : any) {
    const query = this.httpClient.get(this.url +     "/findone_edu/" + id). toPromise();
    console.log( query)
    return query
  }

  async   eliminarEdu (id:   any) {
    const query  = this.httpClient.delete(this.url + "/delete_edu/" + id) .toPromise();
    console.log(query)
    return query;
  }

}

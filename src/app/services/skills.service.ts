import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
} )
 export class SkillsService {

    public url: string

  constructor ( public  httpClient : HttpClient)   {
       this.url =  environment.apiUrl
    }

    async    createSkill  ( data: any) {
      const query = this.httpClient.post   ( this.url + '/create_skill' , data ).toPromise();
      console.log(query )
       return query;
    }

      async    findSkillAll () {
      const query = this.httpClient.get(this.url + '/find_skill'  ). toPromise()
        console. log (query  )
       return  query ;
     }


    async updateSkill   (data: any , id :  any) {
     const query = this. httpClient.put (this.url  + "/update_skill/"  + id , data ). toPromise ()
    console.log(query)
      return query;
  }

  async    findOneSkill  (id : any) {
    const query = this.httpClient.get(this.url +   "/findone_skill/" + id) . toPromise();
    console.log( query)
    return query
  }

  async   eliminarSkill  (id:  any) {
    const query  =    this.httpClient.delete(this.url  + "/delete_skill/" + id) .toPromise();
    console.log(query)
    return query;
  }

}

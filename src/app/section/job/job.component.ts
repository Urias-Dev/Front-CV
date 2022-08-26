import { Component, OnInit } from '@angular/core';
 import {WorkService} from "../../services/work.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit  {

  public  datas : any

   constructor(private workService: WorkService) {
  }

  ngOnInit():  void {
    this.findWork()
  }

     async  findWork () {
       const data : any =  await  this.workService.findWorkAll( )
       console.log  (data )
       this.datas = data.data ;
     }

}

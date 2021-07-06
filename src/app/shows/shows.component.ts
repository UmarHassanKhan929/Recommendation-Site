import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { data } from '../data';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: data[] = [];
  type:string="show";
  name:string="";
  limit:number=5;
  constructor(private dataservice:ApiService) { }

  ngOnInit(): void {

  }

  getStuff(){
    this.dataservice.getStuff(this.limit,this.type,this.name).subscribe((result:any)=>{
      this.shows = result['Similar']['Results']
      console.log(this.shows);
    })
  }
}

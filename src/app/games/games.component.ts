import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { data } from '../data';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: data[] = [];
  type:string="game";
  name:string="";
  limit:number=5;
  constructor(private dataservice:ApiService) { }

  ngOnInit(): void {

  }

  getStuff(){
    this.dataservice.getStuff(this.limit,this.type,this.name).subscribe((result:any)=>{
      this.games = result['Similar']['Results']
      console.log(this.games);
    })
  }

}

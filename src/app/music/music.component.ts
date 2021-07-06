import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { data } from '../data';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musics: data[] = [];
  type:string="music";
  name:string="";
  limit:number=5;
  constructor(private dataservice:ApiService) { }

  ngOnInit(): void {

  }

  getStuff(){
    this.dataservice.getStuff(this.limit,this.type,this.name).subscribe((result:any)=>{
      this.musics = result['Similar']['Results']
      console.log(this.musics);
    })
  }

}

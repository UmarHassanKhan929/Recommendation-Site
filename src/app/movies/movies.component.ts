import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { data } from '../data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: data[] = [];
  type:string="movie";
  name:string="";
  limit:number=5;
  constructor(private dataservice:ApiService) { }

  ngOnInit(): void {

  }

  getStuff(){
    this.dataservice.getStuff(this.limit,this.type,this.name).subscribe((result:any)=>{
      console.log(result)
      this.movies = result['Similar']['Results']
      console.log(this.movies);
    })
  }



}

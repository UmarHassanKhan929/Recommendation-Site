import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { data } from '../data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: data[] = [];
  type:string="book";
  name:string="";
  limit:number=5;
  constructor(private dataservice:ApiService) { }

  ngOnInit(): void {

  }

  getStuff(){
    this.dataservice.getStuff(this.limit,this.type,this.name).subscribe((result:any)=>{
      this.books = result['Similar']['Results']
      console.log(this.books);
    })
  }

}

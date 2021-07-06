import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  getStuff(limit:number,media:string,name:string):Observable<data[]>{
    return this.http.get<data[]>(`https://tastedive.com/api/similar?info=1&limit=${limit}&q=${media}:${name}&k=418322-tomakeaw-WVSNQ1HK`);
  }
}

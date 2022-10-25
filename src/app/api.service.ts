import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewbooks=()=>{
    return this.http.get("http://localhost:8080/viewbooks")
  }
  addbooks=(data:any)=>{
    return this.http.post("http://localhost:8080/bookadd",data)
  }
  deletebooks=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteBook",data)
  }
  searchbooks=(data:any)=>{
    return this.http.post("http://localhost:8080/searchbook",data)
  }
}

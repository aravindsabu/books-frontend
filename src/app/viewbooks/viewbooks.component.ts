import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewbooks().subscribe(
      (data)=>{
        this.root=data
      }
    )
  }
  deletebooks=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deletebooks(data).subscribe(
      (resp)=>{
        alert("delete")
      }
    )
    this.fetchData()
  }
  root:any=[]

  ngOnInit(): void {
  }

}

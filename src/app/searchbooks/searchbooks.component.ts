import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  bookname=""

  readvalue=()=>{
    let data={
      "bookname":this.bookname
    }
    console.log(data)
    this.myapi.searchbooks(data).subscribe(
      (data)=>{
        this.data=data
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}

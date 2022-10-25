import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private api:ApiService) { }
  bookname=""
  bookdiscription=""
  pages=""
  language=""
  readvalues=()=>{
    let data ={
      "bookname":this.bookname,
      "bookdiscription":this.bookdiscription,
      "pages":this.pages,
      "language":this.language
    }
    console.log(data)
    this.api.addbooks(data).subscribe(
      (data)=>{
        alert("data insert successfully")
      }
    )
  
 
  
    
  }
  ngOnInit(): void {
  }

}

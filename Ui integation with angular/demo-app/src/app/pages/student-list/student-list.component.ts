
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  public studentlist:any;     
  public http;


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  ngOnInit(): void {
    this.loadstudent();
  }

  //getmapping use to get data to browser
  loadstudent(){

        this.http.get('http://localhost:8080/studentlist')
        .subscribe((data)=>{
            console.log(data);

            this.studentlist = data;
        })
  }
    




}

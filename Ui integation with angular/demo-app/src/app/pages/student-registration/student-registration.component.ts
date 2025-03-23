import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  standalone: false,
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {

public http;
 constructor(private httpClient:HttpClient){
  this.http = httpClient;
 }

 //json object creation to send the postmapping
 public student = {
   
    firstname:null,
    lastname:null,
    contactnumber:null
 }

  

 createnewstudent(){
     this.http.post("http://localhost:8080/student",this.student)
   .subscribe(data =>{
       console.log(data);
   }

  )
 }


}

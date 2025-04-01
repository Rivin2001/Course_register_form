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
public alertMessage: string = '';
public showAlert: boolean = false;
  public alertType: string = 'success';
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
     .subscribe(
      (data) => {
        this.showAlertMessage('success', 'Successfully Registered!!');
      },
      (error) => {
        this.showAlertMessage('danger', 'Registration failed. Please try again.');
      }
    );
}




private showAlertMessage(type: string, message: string) {
  this.alertType = type;
  this.alertMessage = message;
  this.showAlert = true;
  
  setTimeout(() => {
    this.hideAlert();
  }, 3000);
}

private hideAlert() {
  this.showAlert = false;
}
}

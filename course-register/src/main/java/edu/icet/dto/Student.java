package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Student {

     public Student() {
     }

     private String firstname;
     private String lastname;
     private String contactnumber;

}

package edu.icet.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Student")
public class studententity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    private String firstname;

    private String lastname;

    private String contactnumber;





}

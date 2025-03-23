package edu.icet.controller;

import edu.icet.Entity.studententity;
import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin

public class StudentController {


    @Autowired
    StudentService services;

    @PostMapping("/student")
    public studententity createstudentob(@RequestBody Student student){
        return services.createstudent(student);

    }

    @GetMapping("/studentlist")
    public List<Student> getstudentlist(){
        return services.retriveStudent();
    }


}



package edu.icet.controller;

import edu.icet.Entity.studententity;
import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin

public class StudentController {


    @Autowired
    StudentService services;

    @PostMapping("/student")
    public studententity createstudentob(@RequestBody Student student){
        return services.createstudent(student);

    }
}



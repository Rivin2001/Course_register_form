package edu.icet.controller;

import edu.icet.dto.Course;
import edu.icet.service.StudentService;
import edu.icet.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController

public class CourseController {

    @Autowired
    CourseService courseservice;

    @GetMapping("/Courses")

    public List<Course> createNewCourse(){
        return courseservice.createNewCourse();


    }

}

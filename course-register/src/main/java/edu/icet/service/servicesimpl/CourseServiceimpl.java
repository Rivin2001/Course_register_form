package edu.icet.service.servicesimpl;

import edu.icet.dto.Course;
import edu.icet.service.CourseService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CourseServiceimpl implements CourseService {

    @Value("${application.institute}")
    String institute;


    public List<Course> createNewCourse(){

        ArrayList<Course> courses = new ArrayList<Course>();
        courses.add(new Course("ICET JAVA MASTER","0001","5000","8",institute));
        courses.add(new Course("ICD Course","0002","15000","12",institute));
        return courses;
        
    }
}

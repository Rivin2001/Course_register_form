package edu.icet.service.servicesimpl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.Entity.studententity;
import edu.icet.dto.Course;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceimpl implements StudentService {


    @Autowired
    StudentRepository studentRepository;

    @Autowired
    ObjectMapper mapper;

    public studententity createstudent(Student student){

        studententity entity  = mapper.convertValue(student,studententity.class);
        return studentRepository.save(entity);

    }

    public List<Student> retriveStudent() {
        List<studententity> entities = (List<studententity>) studentRepository.findAll();
        List<Student> students = new ArrayList<>();

        for (studententity entity : entities) {
            Student student = new Student();
           // student.setId(entity.getId());
            student.setFirstname(entity.getFirstname());
            student.setLastname(entity.getLastname());
            student.setContactnumber(entity.getContactnumber());
            students.add(student);
        }
        return students;
    }

}







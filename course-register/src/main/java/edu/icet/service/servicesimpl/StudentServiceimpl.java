package edu.icet.service.servicesimpl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.Entity.studententity;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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




    }





package edu.icet.repository;

import edu.icet.Entity.studententity;
import edu.icet.dto.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<studententity,Long> {



}

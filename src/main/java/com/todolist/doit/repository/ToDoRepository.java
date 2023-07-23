package com.todolist.doit.repository;

import com.todolist.doit.domain.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo,Long> {
    List<ToDo> findBydueDateAndEmail(String dueDate, String email);

    @Query(value = "SELECT DISTINCT dueDate FROM ToDo will_do WHERE email = :email")
    List<String> findAllTodoDate(@Param("email") String email);
}

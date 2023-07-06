package com.todolist.doit.repository;

import com.todolist.doit.domain.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ToDoRepository extends JpaRepository<ToDo,Long> {

}

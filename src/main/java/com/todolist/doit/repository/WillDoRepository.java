package com.todolist.doit.repository;

import com.todolist.doit.domain.WillDo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface WillDoRepository extends JpaRepository<WillDo,Long> {

}

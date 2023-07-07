package com.todolist.doit.service;

import com.todolist.doit.domain.ToDo;
import com.todolist.doit.repository.ToDoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ToDoService {

    private final ToDoRepository toDoRepository;

    public void createToDo(ToDo willDo){
        toDoRepository.save(willDo);
    }


    public List<ToDo> findAllToDo(){
        return toDoRepository.findAll();
    }

    public void deleteToDo(long tid){
        toDoRepository.deleteById(tid);
    }



}

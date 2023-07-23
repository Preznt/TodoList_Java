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


//    public List<ToDo> findAllToDo(){
//        return toDoRepository.findAll();
//    }
    public List<ToDo> findByDateToDo(String due_date, String email) { return toDoRepository.findBydueDateAndEmail(due_date, email);}

    public void deleteToDo(long tid){
        toDoRepository.deleteById(tid);
    }

    public List<String> findDate(String email){ return toDoRepository.findAllTodoDate(email);}


}

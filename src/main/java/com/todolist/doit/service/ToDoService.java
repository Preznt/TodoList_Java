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
    public List<ToDo> findByDateToDo(String due_date, Long u_id) { return toDoRepository.findBydueDateAndUserId(due_date, u_id);}

    public void deleteToDo(long tid){
        toDoRepository.deleteById(tid);
    }

    public List<String> findDate(Long u_id){ return toDoRepository.findAllTodoDate(u_id);}


}

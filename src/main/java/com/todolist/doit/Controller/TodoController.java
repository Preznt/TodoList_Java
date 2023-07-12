package com.todolist.doit.Controller;

import com.todolist.doit.domain.ToDo;
import com.todolist.doit.service.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final ToDoService toDoService;

    @GetMapping("/todo")
    public List<ToDo> findAllTodo(){
        return toDoService.findAllToDo();
//        System.out.println(toDoList);
    }

    @PostMapping("/todo")
    public List<ToDo> createTodo(@RequestBody ToDo toDo ){
        ToDo memoryWillDo;
//        System.out.println(tid);

        memoryWillDo = new ToDo(toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());

        toDoService.createToDo(memoryWillDo);
        return findAllTodo();
    }

    @PutMapping("/todo/{tid}")
    public void updateTodo(@RequestBody ToDo toDo ,@PathVariable long tid){
        ToDo memoryWillDo  = new ToDo(tid, toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
        toDoService.createToDo(memoryWillDo);
    }


    @DeleteMapping("/todo/{tid}")
    public void deleteTodo(@PathVariable long tid){
        toDoService.deleteToDo(tid);
//        System.out.println(tid);
//        return findAllTodo();
    }





}

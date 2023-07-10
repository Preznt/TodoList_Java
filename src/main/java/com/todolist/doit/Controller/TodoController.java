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
    public List<ToDo> createTodo(@RequestBody ToDo toDo , @RequestParam(value = "tid", required = false) Long tid){
        ToDo memoryWillDo;
        System.out.println(tid);

        if(tid != null) {
            memoryWillDo = new ToDo(tid, toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
        }else {
            memoryWillDo = new ToDo(toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
        }
        toDoService.createToDo(memoryWillDo);
        return findAllTodo();
    }


    @DeleteMapping("/todo/{tid}")
    public List<ToDo> deleteTodo(@PathVariable long tid){
        toDoService.deleteToDo(tid);
//        System.out.println(tid);
        return findAllTodo();
    }



}

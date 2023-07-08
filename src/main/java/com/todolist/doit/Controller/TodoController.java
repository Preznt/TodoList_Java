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

    @PostMapping("/todo")
    public void createTodo(@RequestBody ToDo toDo ,@RequestParam(value = "tid", required = false) Long tid){
        ToDo memoryWillDo;

        if(tid != null) {
            memoryWillDo = new ToDo(tid, toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
        }else {
            memoryWillDo = new ToDo(toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
        }
        toDoService.createToDo(memoryWillDo);
    }

    @GetMapping("/todo")
    public List<ToDo> findAllTodo(){
        return toDoService.findAllToDo();
//        System.out.println(toDoList);
    }
    @DeleteMapping("/todo/{tid}")
    public void deleteTodo(@PathVariable long tid){
        toDoService.deleteToDo(tid);
//        System.out.println(tid);
    }



}

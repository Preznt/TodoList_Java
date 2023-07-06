package com.todolist.doit.Controller;

import com.todolist.doit.domain.ToDo;
import com.todolist.doit.service.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final ToDoService toDoService;

    @PostMapping("/todo")
    public void createTodo(@RequestBody ToDo toDo){
        ToDo memoryWillDo = new ToDo(toDo.getEmail(),toDo.getContent(), toDo.getDueDate(), toDo.getState());

        toDoService.createWillDo(memoryWillDo);
    }
    @GetMapping("/todo")
    public List<ToDo> findAllTodo(){
        return toDoService.findAllToDo();
//        System.out.println(toDoList);
    }
    @DeleteMapping("/todo/{tid}")
    public void deleteTodo(@PathVariable long tid){
        toDoService.deleteWillDo(tid);
        System.out.println(tid);
    }
}

package com.todolist.doit.Controller;

import com.todolist.doit.Controller.response.DefaultRes;
import com.todolist.doit.Controller.response.ResponseMessage;
import com.todolist.doit.Controller.response.StatusCode;
import com.todolist.doit.domain.ToDo;
import com.todolist.doit.service.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final ToDoService toDoService;
//    StatusCode statusCode = new StatusCode();

    @GetMapping("/todo")
    public ResponseEntity<List<ToDo>> findAllTodo(){
            List<ToDo> todoArray = toDoService.findAllToDo();
            return ResponseEntity.ok(todoArray);
//        System.out.println(toDoList);
    }

    @PostMapping("/todo")
    public ResponseEntity createTodo(@RequestBody ToDo toDo ){
        try {
            ToDo memoryWillDo;
            memoryWillDo = new ToDo(toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
            toDoService.createToDo(memoryWillDo);
            return findAllTodo();
        }catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }

    }

    @PutMapping("/todo/{tid}")
    public ResponseEntity updateTodo(@RequestBody ToDo toDo ,@PathVariable long tid){
        try {
            ToDo memoryWillDo  = new ToDo(tid, toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
            toDoService.createToDo(memoryWillDo);
            return ResponseEntity.ok(true);
        }catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }

    }


    @DeleteMapping("/todo/{tid}")
    public ResponseEntity deleteTodo(@PathVariable long tid){
        try {
            toDoService.deleteToDo(tid);
            return ResponseEntity.ok(true);
        }catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }

//        System.out.println(tid);
//        return findAllTodo();
    }





}

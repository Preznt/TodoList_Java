package com.todolist.doit.controller;

import com.todolist.doit.domain.ToDo;
import com.todolist.doit.service.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final ToDoService toDoService;


//    @GetMapping("/todo")
//    public ResponseEntity<List<ToDo>> findAllTodo(){
//            List<ToDo> todoArray = toDoService.findAllToDo();
//            return ResponseEntity.ok(todoArray);
////        System.out.println(toDoList);
//    }

    @GetMapping("/todo/day/{date}")
    public  ResponseEntity theDayTodo(@PathVariable String date){
        List<ToDo> theDayArray = toDoService.findByDateToDo(date, "bjw1403@gmail.com");
        return ResponseEntity.ok(theDayArray);
    }

    @PostMapping("/todo")
    public ResponseEntity createTodo(@RequestBody ToDo toDo ){
        try {
            ToDo memoryWillDo;
            memoryWillDo = new ToDo(toDo.getEmail(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
            toDoService.createToDo(memoryWillDo);
            return theDayTodo(toDo.getDueDate());
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

    }

    @GetMapping("/todo/date")
    public ResponseEntity<List<String>> allTodoDates(){

        return ResponseEntity.ok(toDoService.findDate("bjw1403@gmail.com"));
    }




}

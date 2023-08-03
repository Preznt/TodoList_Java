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

    @GetMapping("/todo/day/{date}/{u_id}")
    public  ResponseEntity theDayTodo(@PathVariable String date, @PathVariable Long u_id){
        List<ToDo> theDayArray = toDoService.findByDateToDo(date, u_id);
        return ResponseEntity.ok(theDayArray);
    }

    @PostMapping("/todo")
    public ResponseEntity createTodo(@RequestBody ToDo toDo ){
        try {ToDo memoryWillDo = ToDo.builder()
                    .userId(toDo.getUserId())
                    .content(toDo.getContent())
                    .dueDate(toDo.getDueDate())
                    .state(toDo.getState()).build();
            toDoService.createToDo(memoryWillDo);
            return theDayTodo(toDo.getDueDate(),toDo.getUserId());
        }catch (Exception e){
            return ResponseEntity.internalServerError().build();
        }

    }

    @PutMapping("/todo/{tid}")
    public ResponseEntity updateTodo(@RequestBody ToDo toDo ,@PathVariable long tid){
        try {
            ToDo memoryWillDo  = new ToDo(tid, toDo.getUserId(), toDo.getContent(), toDo.getDueDate(), toDo.getState());
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

    @GetMapping("/todo/date/{u_id}")
    public ResponseEntity<List<String>> allTodoDates(@PathVariable Long u_id){

        return ResponseEntity.ok(toDoService.findDate(u_id));
    }




}

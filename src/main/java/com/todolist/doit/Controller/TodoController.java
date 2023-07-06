package com.todolist.doit.Controller;

import com.todolist.doit.domain.ToDo;
import com.todolist.doit.service.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final ToDoService toDoService;

    @PostMapping("/todo")
    public void createTodo(@RequestBody ToDo toDo){
        String test = toDo.getContent();
        System.out.println(test);

        ToDo memoryWillDo = new ToDo(toDo.getEmail(),toDo.getContent(), toDo.getDueDate(), toDo.getState());

        toDoService.createWillDo(memoryWillDo);
    }


    @GetMapping("test")
    public List<String> test(){
        return Arrays.asList("안녕하세요", "test");
    }
}

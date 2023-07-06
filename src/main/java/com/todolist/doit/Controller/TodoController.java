package com.todolist.doit.Controller;

import com.todolist.doit.domain.WillDo;
import com.todolist.doit.service.WillDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api", produces = "application/json")
public class TodoController {
    private final WillDoService willDoService;

    @PostMapping("/todo")
    public void createTodo(@RequestBody WillDo willdo){
        String test = willdo.getContent();
        System.out.println(test);

        WillDo tjkj = new WillDo(willdo.getEmail(),willdo.getContent(), willdo.getDueDate(), willdo.getState());


//        willDoService.createWillDo(tjkj);
    }


    @GetMapping("test")
    public List<String> test(){
        return Arrays.asList("안녕하세요", "test");
    }
}

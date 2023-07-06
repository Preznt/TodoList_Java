package com.todolist.doit.service;

import com.todolist.doit.domain.WillDo;
import com.todolist.doit.repository.WillDoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WillDoService {

    private final WillDoRepository willDoRepository;

    public void createWillDo(WillDo willDo){
        willDoRepository.save(willDo);
    }

}

package com.todolist.doit.util.dto;

import lombok.Data;

@Data
public class KakaoUser {
    private Long id;
    private String connected_at;
    private KakaoAccount kakao_account;

}

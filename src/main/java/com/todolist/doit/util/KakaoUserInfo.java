package com.todolist.doit.util;

import com.todolist.doit.util.dto.KakaoUserInfoResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class KakaoUserInfo {
    private WebClient webClient = WebClient.create();
    private final String USER_INFO_URI = "https://kapi.kakao.com/v2/user/me";

    public KakaoUserInfoResponse getUserInfo(String access_token){
        ResponseEntity<KakaoUserInfoResponse> response = webClient.get()
                .uri(USER_INFO_URI)
                .header("Authorization", "Bearer " + access_token)
                .retrieve()
                .toEntity(KakaoUserInfoResponse.class)
                .block();
        System.out.println("사용자 정보 가져"+response);
        return response.getBody();
    }

}
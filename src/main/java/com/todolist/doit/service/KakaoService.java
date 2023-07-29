package com.todolist.doit.service;

import com.todolist.doit.util.config.KakaoSecret;
import com.todolist.doit.util.dto.KakaoToken;
import com.todolist.doit.util.dto.KakaoUser;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class KakaoService {
    private KakaoSecret kakaoSecret = new KakaoSecret();
    private static final String REDIRECT_URI = "http://localhost:8080/kakao/oauth";
    private static final String GRANT_TYPE = "authorization_code";
    private final String CLIENT_ID = kakaoSecret.getCLIENT_ID();
    public KakaoToken getToken(String authorize_code){
        String TOKEN_URI = "https://kauth.kakao.com/oauth/token";
        WebClient webClient = WebClient.create();

        MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();
        bodyValues.add("grant_type", GRANT_TYPE);
        bodyValues.add("client_id", CLIENT_ID);
        bodyValues.add("redirect_uri", REDIRECT_URI);
        bodyValues.add("code", authorize_code);
//        System.out.println(bodyValues);
        ResponseEntity<KakaoToken> response = webClient.post()
                .uri(TOKEN_URI)
                .bodyValue(bodyValues)
                .retrieve()
                .toEntity(KakaoToken.class)
                .block();
        System.out.println("발급받은 응답: " + response);
        return response.getBody();
    }

    public KakaoUser findUser(String access_token){
        WebClient webClient = WebClient.create();
        String USER_INFO_URI = "https://kapi.kakao.com/v2/user/me";

        ResponseEntity<KakaoUser> response = webClient.get()
                .uri(USER_INFO_URI)
                .header("Authorization", "Bearer " + access_token)
                .retrieve()
                .toEntity(KakaoUser.class)
                .block();
        System.out.println("사용자 정보 가져"+response);
        return response.getBody();
    }

    public void saveUser(){
        // 사용자 정보 가져온 email을 이용해서 DB에 있는지 확인

        // 없으면 회원가입

        // 있으면 로그인 처리
    }
}

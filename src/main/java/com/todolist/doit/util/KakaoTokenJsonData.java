package com.todolist.doit.util;

import com.todolist.doit.util.config.KakaoSecret;
import com.todolist.doit.util.dto.KakaoTokenResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;


@Component
public class KakaoTokenJsonData {

    private KakaoSecret kakaoSecret = new KakaoSecret();
    private static final String TOKEN_URI = "https://kauth.kakao.com/oauth/token";
    private static final String REDIRECT_URI = "http://localhost:8080/kakao/oauth";
    private static final String GRANT_TYPE = "authorization_code";
    private final String CLIENT_ID = kakaoSecret.getCLIENT_ID();
    WebClient webClient = WebClient.create();
    public KakaoTokenResponse getToken(String authorize_code){
        MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();
        bodyValues.add("grant_type", GRANT_TYPE);
        bodyValues.add("client_id", CLIENT_ID);
        bodyValues.add("redirect_uri", REDIRECT_URI);
        bodyValues.add("code", authorize_code);
//        System.out.println(bodyValues);
        ResponseEntity<KakaoTokenResponse> response = webClient.post()
                .uri(TOKEN_URI)
                .bodyValue(bodyValues)
                .retrieve()
                .toEntity(KakaoTokenResponse.class)
                .block();
        System.out.println("발급받은 응답: " + response);
        return response.getBody();
    }
}

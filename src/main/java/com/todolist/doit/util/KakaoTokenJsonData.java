package com.todolist.doit.util;

import com.todolist.doit.util.config.KakaoSecret;
import com.todolist.doit.util.dto.KakaoTokenResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Component
public class KakaoTokenJsonData {
    WebClient webClient = WebClient.create();
    private KakaoSecret kakaoSecret = new KakaoSecret();
    private static final String TOKEN_URI = "https://kauth.kakao.com/oauth/token";
    private static final String REDIRECT_URI = "https://localhost:8080/kakao/oauth";
    private static final String GRANT_TYPE = "authorization_code";
    private final String CLIENT_ID = kakaoSecret.getCLIENT_ID();

    public void getToken(String authorize_code){
        String uri = TOKEN_URI + "?grant_type=" + GRANT_TYPE + "&client_id=" + CLIENT_ID +  "&redirect_uri=" + REDIRECT_URI + "&code=" + authorize_code;

        Flux<KakaoTokenResponse> response = webClient.post()
                .uri(uri)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .retrieve()
                .bodyToFlux(KakaoTokenResponse.class);
        System.out.println(response.blockFirst());
//        return response.blockFirst();
    }
}

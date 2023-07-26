package com.todolist.doit.util;

import com.todolist.doit.util.config.KakaoSecret;
import com.todolist.doit.util.dto.KakaoTokenResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Component
public class KakaoTokenJsonData {
    WebClient webClient = WebClient.create();
    private KakaoSecret kakaoSecret = new KakaoSecret();
    private static final String TOKEN_URI = "https://kauth.kakao.com/oauth/token";
    private static final String REDIRECT_URI = "http://localhost:8080/kakao/oauth";
    private static final String GRANT_TYPE = "authorization_code";
    private final String CLIENT_ID = kakaoSecret.getCLIENT_ID();

    public KakaoTokenResponse getToken(String authorize_code){
        MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();
        bodyValues.add("grant_type", GRANT_TYPE);
        bodyValues.add("client_id", CLIENT_ID);
        bodyValues.add("redirect_uri", REDIRECT_URI);
        bodyValues.add("code", authorize_code);

        Flux<KakaoTokenResponse> response = webClient.post()
                .uri(TOKEN_URI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(bodyValues))
                .retrieve()
                .bodyToFlux(KakaoTokenResponse.class);
//        System.out.println(response.blockFirst());
        return response.blockFirst();
    }
}

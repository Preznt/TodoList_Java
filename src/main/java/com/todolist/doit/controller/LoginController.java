package com.todolist.doit.controller;

import com.todolist.doit.domain.User;
import com.todolist.doit.service.KakaoService;
import com.todolist.doit.util.dto.KakaoToken;
import com.todolist.doit.util.dto.KakaoUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.fasterxml.jackson.databind.jsonFormatVisitors.JsonValueFormat.UUID;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "/kakao", produces = "application/json")
public class LoginController {
    private final KakaoService kakaoService;
    @GetMapping("/oauth")
    @ResponseBody
    public ResponseEntity kakaoAuthorize(@RequestParam("code") String code){
        log.info("인가 받은 코드를 이용해서 토큰을 발급 받습니다");


        // 토큰 발급
         KakaoToken token = kakaoService.getToken(code);
         String access_token = token.getAccess_token();
         log.info("Kakao Token 정보 : " + access_token);

        // 토큰으로 사용자 정보 조회
         KakaoUser user = kakaoService.findUser(access_token);

        // 가입 처리
        log.info("사용자 정보를 통해 데이터를 저장합니다");
        User joinUser = kakaoService.saveUser(user);

        Map<String, Object> resBody = new HashMap<>();
         resBody.put("id", joinUser.getId());
         resBody.put("token", access_token);
        resBody.put("token_expire", token.getExpires_in());

//        if(joinUser.getId() != null){
//            session.setAttribute("nickname", joinUser.getNickname());
//            session.setAttribute("access_token", access_token);
//        }

//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Authorization", "Bearer " + access_token);
//        log.info("쿠키생성");
//        Cookie cookie = new Cookie("access_token", access_token);
//        Cookie cookie2 = new Cookie("email", String.valueOf(joinUser.getEmail()));
//        cookie.setMaxAge(token.getExpires_in());
//        cookie.setPath("/");
//        response.addCookie(cookie);
//        response.addCookie(cookie2);
        return ResponseEntity.ok(resBody);
    }

}

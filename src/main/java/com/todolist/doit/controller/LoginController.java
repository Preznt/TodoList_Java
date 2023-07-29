package com.todolist.doit.controller;

import com.todolist.doit.service.KakaoService;
import com.todolist.doit.util.dto.KakaoToken;
import com.todolist.doit.util.dto.KakaoUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "/kakao", produces = "application/json")
public class LoginController {
    private final KakaoService kakaoService;
    @GetMapping("/oauth")
    @ResponseBody
    public String kakaoAuthorize(@RequestParam("code") String code){
        System.out.println(code);
        log.info("인가 받은 코드를 이용해서 토큰을 발급 받습니다");
        // 토큰 발급
         KakaoToken token = kakaoService.getToken(code);
         log.info("Kakao Token 정보 : " + token.getAccess_token());
//        // 토큰으로 사용자 정보 조회
        KakaoUser kakaoProfile = kakaoService.findUser(token.getAccess_token());
//        // 가입 처리
      return "okay";
    }

}

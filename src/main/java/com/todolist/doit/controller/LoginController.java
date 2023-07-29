package com.todolist.doit.controller;

//import com.todolist.doit.service.LoginService;
import com.todolist.doit.util.KakaoTokenJsonData;
import com.todolist.doit.util.KakaoUserInfo;
import com.todolist.doit.util.dto.KakaoTokenResponse;
import com.todolist.doit.util.dto.KakaoUserInfoResponse;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "/kakao", produces = "application/json")
public class LoginController {
    private final KakaoTokenJsonData kakaoTokenJsonData;
    private final KakaoUserInfo kakaoUserInfo;
    @GetMapping("/oauth")
    @ResponseBody
    public String kakaoAuthorize(@RequestParam("code") String code){
        System.out.println(code);
        log.info("인가 받은 코드를 이용해서 토큰을 발급 받습니다");
        // 토큰 발급
         KakaoTokenResponse kakaoToken = kakaoTokenJsonData.getToken(code);
         log.info("Kakao Token 정보 : " + kakaoToken.getAccess_token());
//        // 토큰으로 사용자 정보 조회
        KakaoUserInfoResponse kakaoProfile = kakaoUserInfo.getUserInfo(kakaoToken.getAccess_token());
//        // 가입 처리
      return "okay";
    }

//    LoginService loginService;
//
//    public LoginController(LoginService loginService) {
//        this.loginService = loginService;
//    }
//
//    @GetMapping("/code/{registrationId}")
//    public void googleLogin(@RequestParam String code, @PathVariable String registrationId){
//        loginService.socialLogin(code, registrationId);
//    }
}

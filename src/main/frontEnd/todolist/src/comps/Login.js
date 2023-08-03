import { useEffect } from "react";
import { KAKAO } from "../config/oauthSecret.js";
import { useLoginContext } from "../context/LoginContext.js";

const Login = () => {
  const { kakaoLogin } = useLoginContext();
  const query = window.location.search;
  const auth_code = query.substring(6);
  const URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO.CLIENT_ID}&redirect_uri=${KAKAO.REDIRECT_URI}&response_type=${KAKAO.RESPONSE_TYPE}`;

  useEffect(() => {
    if (auth_code) {
      console.log(auth_code);
      kakaoLogin(auth_code);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-double border-neutral-500 w-1/3 px-6 py-7 rounded-3xl min-w-min">
        <h1 className="text-2xl font-bold mb-2">TodoList</h1>
        <h2 className="m-4">오늘의 할 일을 기록해 보세요</h2>
        <a href={URI}>
          <img src="/kakao_login_medium_narrow.png" className="inline-block" />
        </a>
      </div>
    </div>
  );
};

export default Login;

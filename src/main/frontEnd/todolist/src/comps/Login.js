import { KAKAO } from "../config/oauthSecret.js";

const Login = () => {
  const linkURI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO.CLIENT_ID}&redirect_uri=${KAKAO.REDIRECT_URI}&response_type=${KAKAO.RESPONSE_TYPE}`;

  return (
    <div>
      {/* <a href="https://accounts.google.com/o/oauth2/auth?client_id=1062413411531-k2qcsrrgv88noclpipdrveq4l1nli2la.apps.googleusercontent.com&redirect_uri=http://localhost:8080/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile">
        구글 로그인
      </a> */}
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=4cd856dd4213168cef3d65ca1440a406&redirect_uri=http://localhost:8080/kakao/oauth&response_type=code">
        카카오 로그인
      </a>
    </div>
  );
};

export default Login;

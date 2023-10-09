import { createContext, useContext } from "react";

const LoginContext = createContext();

const useLoginContext = () => {
  return useContext(LoginContext);
};

const LoginContextProvider = ({ children }) => {
  const kakaoLogin = async (authCode) => {
    const res = await fetch(`/api/kakao?code=${authCode}`);
    const result = await res.json();
    console.log(result);
    localStorage.setItem("id", result.id);
    localStorage.setItem("token", result.token);
    window.location.href = "/";
  };
  const props = { kakaoLogin };
  return (
    <LoginContext.Provider value={props}>{children}</LoginContext.Provider>
  );
};

export { useLoginContext, LoginContextProvider };

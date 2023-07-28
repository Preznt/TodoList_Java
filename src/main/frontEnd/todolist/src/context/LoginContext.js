import { createContext, useContext } from "react";
import { KAKAO } from "../config/oauthSecret";

const LoginContext = createContext();

const useLoginContext = () => {
  return useContext(LoginContext);
};

const LoginContextProvider = ({ children }) => {
  const props = {};
  return (
    <LoginContext.Provider value={props}>{children}</LoginContext.Provider>
  );
};

export { useLoginContext, LoginContextProvider };

import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [open, setOpen] = useState({
    add: false,
  });



  const addOpen = () => {
    setOpen({ ...open, add: !open.add });
  };

  const props = { open, addOpen };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { TodoContextProvider, useTodoContext };

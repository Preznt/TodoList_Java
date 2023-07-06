import { createContext, useContext, useState } from "react";
import moment from "moment";

const TodoContext = createContext();

const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [open, setOpen] = useState({
    add: false,
  });
  const [allTodo, setAllTodo] = useState([]);

  const [todo, setTodo] = useState({
    email: "bjw1403@gmail.com",
    state: "no",
    content: "",
    dueDate: moment().format("YYYY-MM-DD"),
  });

  const addOpen = () => {
    setOpen({ ...open, add: !open.add });
  };

  const props = { open, addOpen, todo, setTodo, allTodo, setAllTodo };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { TodoContextProvider, useTodoContext };

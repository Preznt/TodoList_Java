import { createContext, useContext, useState } from "react";
import moment from "moment";

const TodoContext = createContext();

const useTodoContext = () => {
  return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
  const [open, setOpen] = useState({
    add: false,
    test: false,
  });

  const [allTodo, setAllTodo] = useState([]);

  const [todo, setTodo] = useState({
    email: "bjw1403@gmail.com",
    state: false,
    content: "",
    dueDate: moment().format("YYYY-MM-DD"),
  });

  const addOpen = () => {
    setOpen({ ...open, add: !open.add });
  };

  const findAllTodo = async () => {
    const res = await fetch("/api/todo");
    const result = await res.json();
    setAllTodo([...result]);
    console.log(allTodo);
  };

  const props = {
    open,
    setOpen,
    addOpen,
    todo,
    setTodo,
    allTodo,
    setAllTodo,
    findAllTodo,
  };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { TodoContextProvider, useTodoContext };

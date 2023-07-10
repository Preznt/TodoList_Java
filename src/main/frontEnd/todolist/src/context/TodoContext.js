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

  const deleteHandler = (id) => {
    try {
      fetch(`/api/todo/${id}`, { method: "DELETE" });

      // const removeList = allTodo.filter((t) => {
      //   return t.tid !== oneTodo.tid;
      // });

      setAllTodo((allTodo) => [
        ...allTodo.filter((t) => {
          return t.tid !== id;
        }),
      ]);

      console.log("삭제 핸들러");
      // console.log(removeList);
    } catch (e) {
      console.log(e);
    }
  };

  const onKeyDownHandler = async (e) => {
    const id = e.target.closest("LI").dataset.id;
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    };
    if (e.key === "Enter") {
      try {
        // console.log(e.nativeEvent.isComposing);
        if (e.nativeEvent.isComposing === false) {
          let res;
          if (id) {
            res = await fetch(`/api/todo?tid=${id}`, fetchOption);
          } else {
            res = await fetch("/api/todo", fetchOption);
          }

          const result = await res.json();
          setAllTodo(result);

          setOpen({ ...open, add: false });
          console.log(allTodo);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onKeyUpHandler = (e) => {
    // console.log(e.nativeEvent.isComposing);
    setTodo({ ...todo, content: e.target.value });
    // console.log(todo);
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
    deleteHandler,
    onKeyDownHandler,
    onKeyUpHandler,
  };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { TodoContextProvider, useTodoContext };

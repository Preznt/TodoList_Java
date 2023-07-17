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
    state: false,
    content: "",
    dueDate: moment().format("YYYY-MM-DD"),
  });

  const addOpen = () => {
    setOpen({ ...open, add: !open.add });
  };

  const findAllTodo = async () => {
    try {
      const res = await fetch("/api/todo");
      const result = await res.json();
      // console.log(res.status);
      setAllTodo(result);
    } catch (error) {
      console.log("할일 조회 : " + error);
      alert("할 일을 조회하는데 문제가 발생했습니다.");
    }
  };

  const updateHandler = async (fetchOption, id) => {
    fetchOption.method = "PUT";
    try {
      await fetch(`/api/todo/${id}`, fetchOption);
    } catch (err) {
      console.log("할 일 업데이트 : " + err);
    }

    const updateList = allTodo.map((t) => {
      if (t.tid === id) {
        t.content = todo.content;
      }
      return t;
    });

    setAllTodo(updateList);
  };

  const onKeyDownHandler = async (e, id) => {
    const value = e.target.value;
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    };
    // 엔터키를 눌렀을 때
    if (e.key === "Enter") {
      // 값이 없을 때
      if (!value) {
        alert("할 일을 입력해주세요");
      } else {
        try {
          // 글자 조합이 다 끝났을 때
          if (e.nativeEvent.isComposing === false) {
            if (id) {
              updateHandler(fetchOption, id);
            } else {
              try {
                const res = await fetch("/api/todo", fetchOption);
                const result = await res.json();
                setAllTodo(result);
              } catch (err) {
                console.log("할 일 생성: " + err);
              }
            }
            setOpen({ ...open, add: false });
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const deleteHandler = async (id) => {
    try {
      await fetch(`/api/todo/${id}`, { method: "DELETE" });

      setAllTodo((allTodo) => [
        ...allTodo.filter((t) => {
          return t.tid !== id;
        }),
      ]);
    } catch (err) {
      console.log("할 일 삭제 : " + err);
    }
  };

  const stateUpdateHandler = (oneTodo) => {
    oneTodo.state = !oneTodo.state;
    const fetchOption = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oneTodo),
    };

    try {
      fetch(`/api/todo/${oneTodo.tid}`, fetchOption);

      // setAllTodo((allTodo) => [
      //   ...allTodo.map((t) => {
      //     if (t.tid === oneTodo.tid) {
      //       t.state = !oneTodo.state;
      //     }
      //     return t;
      //   }),
      // ]);
      const updateList = allTodo.map((t) => {
        if (t.tid === oneTodo.tid) {
          t.state = oneTodo.state;
        }
        return t;
      });

      setAllTodo(updateList);
    } catch (e) {
      console.log(e);
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
    stateUpdateHandler,
  };
  return <TodoContext.Provider value={props}>{children}</TodoContext.Provider>;
};

export { TodoContextProvider, useTodoContext };

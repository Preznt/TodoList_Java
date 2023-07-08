import { BsTrash3 } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { useTodoContext } from "../context/TodoContext";
import { useState } from "react";
const List = (props) => {
  const { todo, setTodo, setAllTodo, allTodo, setOpen, open } =
    useTodoContext();
  const [oneTodo, setOneTodo] = useState(props.oneTodo);

  const onKeyDownHandler = (e) => {
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
          fetch(
            oneTodo ? `/api/todo?tid=${oneTodo.tid}` : "/api/todo",
            fetchOption
          );
          const updateList = allTodo.map((t) => {
            if (t.tid === oneTodo.tid) {
              t.content = todo.content;
            }
            return t;
          });
          oneTodo && oneTodo.tid
            ? setAllTodo([...updateList])
            : setAllTodo([...allTodo, todo]);
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

  const deleteHandler = () => {
    try {
      fetch(`/api/todo/${oneTodo.tid}`, { method: "DELETE" });
      const removeList = allTodo.filter((t) => {
        return t.tid != oneTodo.tid;
      });
      setAllTodo([...removeList]);
      console.log(removeList);
    } catch (e) {
      console.log(e);
    }
  };

  const stateUpdateHandler = () => {
    oneTodo.state = !oneTodo.state;
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oneTodo),
    };
    try {
      fetch(`/api/todo?tid=${oneTodo.tid}`, fetchOption);
      const updateList = allTodo.map((t) => {
        if (t.tid === oneTodo.tid) {
          t.state = oneTodo.state;
        }
        return t;
      });
      setAllTodo([...updateList]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <li className="flex justify-between border-b">
      <span onClick={stateUpdateHandler}>
        <BsCircle />
      </span>
      <input
        onKeyUp={onKeyUpHandler}
        onKeyDown={onKeyDownHandler}
        placeholder="할 일을 입력 해 주세요"
        className={
          oneTodo && oneTodo.state == true
            ? "outline-none w-4/5 line-through"
            : "outline-none w-4/5"
        }
        defaultValue={oneTodo ? oneTodo.content : ""}
      />
      <button onClick={deleteHandler} className="outline-none">
        <BsTrash3 />
      </button>
    </li>
  );
};

export default List;

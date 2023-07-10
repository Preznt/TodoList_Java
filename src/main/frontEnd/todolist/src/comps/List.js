import { BsTrash3 } from "react-icons/bs";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { useTodoContext } from "../context/TodoContext";
import { useCallback, useState } from "react";
const List = (props) => {
  const {
    setAllTodo,
    allTodo,
    deleteHandler,
    onKeyDownHandler,
    onKeyUpHandler,
  } = useTodoContext();
  const { oneTodo } = props;

  const stateUpdateHandler = (e) => {
    oneTodo.state = !oneTodo.state;
    const target = e.target;
    const id = target.closest("LI").dataset.id;
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(oneTodo),
    };
    try {
      console.log(id);
      fetch(`/api/todo?tid=${id}`, fetchOption);
      const updateList = allTodo.map((t) => {
        if (t.tid === id) {
          t.state = !oneTodo.state;
        }
        return t;
      });
      setAllTodo(updateList);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("List 컴포넌트");

  return (
    <li
      className="flex justify-between border-b mb-2 py-2"
      data-id={oneTodo ? oneTodo.tid : ""}
    >
      <span className="flex items-center" onClick={stateUpdateHandler}>
        {oneTodo && oneTodo.state === true ? <BsCheckCircle /> : <BsCircle />}
      </span>
      <input
        onKeyUp={onKeyUpHandler}
        onKeyDown={onKeyDownHandler}
        placeholder="할 일을 입력 해 주세요"
        className={
          oneTodo && oneTodo.state === true
            ? "outline-none w-4/5 line-through"
            : "outline-none w-4/5"
        }
        defaultValue={oneTodo ? oneTodo.content : ""}
      />
      <button
        onClick={() => {
          deleteHandler(oneTodo.tid);
        }}
        className="outline-none"
      >
        <BsTrash3 />
      </button>
    </li>
  );
};

export default List;

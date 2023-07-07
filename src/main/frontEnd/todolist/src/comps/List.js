import { BsTrash3 } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { useTodoContext } from "../context/TodoContext";
const List = (props) => {
  const { todo, setTodo } = useTodoContext();
  const { oneTodo } = props;

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      const fetchOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      };
      try {
        // console.log(e.nativeEvent.isComposing);
        if (e.nativeEvent.isComposing === false) {
          fetch(
            oneTodo ? `/api/todo?tid=${oneTodo.tid}` : "/api/todo",
            fetchOption
          );
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
      console.log(oneTodo.tid);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <li className="flex justify-between border-b">
      <span>
        <BsCircle />
      </span>
      <input
        onKeyUp={onKeyUpHandler}
        onKeyDown={onKeyDownHandler}
        placeholder="할 일을 입력 해 주세요"
        className="outline-none w-4/5"
        defaultValue={oneTodo ? oneTodo.content : ""}
      />
      <button onClick={deleteHandler} className="outline-none">
        <BsTrash3 />
      </button>
    </li>
  );
};

export default List;

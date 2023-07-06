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
          fetch("/api/todo", fetchOption);
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
        defaultValue={oneTodo.content}
      />
      <button>
        <BsTrash3 />
      </button>
    </li>
  );
};

export default List;

import { BsTrash3 } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodoContext } from "../context/TodoContext";
import { useEffect } from "react";
const List = () => {
  const { open, addOpen, todo, setTodo } = useTodoContext();

  // useEffect(() => {
  //   const res = fetch("/test");
  //   console.log(res);
  // }, []);

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
      {open.add ? (
        <>
          <span>
            <BsCircle />
          </span>
          <input
            onKeyUp={onKeyUpHandler}
            onKeyDown={onKeyDownHandler}
            placeholder="할 일을 입력 해 주세요"
            className="outline-none w-4/5"
          />
          <button>
            <BsTrash3 />
          </button>
        </>
      ) : (
        <>
          <button onClick={addOpen}>
            <AiOutlinePlus />
          </button>
          <h1>할 일 추가</h1>
        </>
      )}
    </li>
  );
};

export default List;

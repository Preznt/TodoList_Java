import { BsTrash3 } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodoContext } from "../context/TodoContext";
import { useEffect } from "react";
const List = () => {
  const { open, addOpen } = useTodoContext();
  useEffect(() => {
    const res = fetch("/test");
    console.log(res);
  }, []);

  return (
    <li className="flex justify-between border-b">
      {open.add ? (
        <>
          <span>
            <BsCircle />
          </span>
          <input
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

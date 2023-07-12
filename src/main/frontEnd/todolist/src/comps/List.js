import { BsTrash3 } from "react-icons/bs";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { useTodoContext } from "../context/TodoContext";
const List = (props) => {
  const {
    allTodo,
    deleteHandler,
    onKeyDownHandler,
    onKeyUpHandler,
    stateUpdateHandler,
  } = useTodoContext();
  const { oneTodo } = props;

  return (
    <li
      className={
        oneTodo
          ? "flex justify-between border-b mb-2 py-2"
          : "flex justify-center border-b mb-2 py-2"
      }
      // data-id={oneTodo ? oneTodo.tid : ""}
    >
      {oneTodo ? (
        <span
          className="flex items-center"
          onClick={() => {
            stateUpdateHandler(oneTodo);
          }}
        >
          {oneTodo && oneTodo.state === true ? <BsCheckCircle /> : <BsCircle />}
        </span>
      ) : (
        ""
      )}

      <input
        onKeyUp={onKeyUpHandler}
        onKeyDown={(e) => {
          onKeyDownHandler(e, oneTodo ? oneTodo.tid : "");
        }}
        placeholder="할 일을 입력 해 주세요"
        className={
          oneTodo && oneTodo.state === true
            ? "outline-none w-4/5 line-through"
            : "outline-none w-4/5"
        }
        defaultValue={oneTodo ? oneTodo.content : ""}
      />
      {oneTodo ? (
        <button
          onClick={(e) => {
            deleteHandler(oneTodo.tid);
          }}
          className="outline-none"
        >
          <BsTrash3 />
        </button>
      ) : (
        ""
      )}
    </li>
  );
};

export default List;

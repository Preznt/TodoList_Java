import { AiOutlinePlus } from "react-icons/ai";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";

const AddList = () => {
  const { open, addOpen } = useTodoContext();
  return (
    <>
      {open.add ? <List /> : ""}
      <button onClick={addOpen}>
        <AiOutlinePlus />
      </button>
      <h1>할 일 추가</h1>
    </>
  );
};

export default AddList;

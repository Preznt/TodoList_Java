import { AiOutlinePlus } from "react-icons/ai";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";

const AddList = () => {
  const { open, addOpen } = useTodoContext();

  return (
    <>
      {open.add ? <List /> : ""}
      <div className="flex border-b py-2 ">
        <button className="outline-none" onClick={addOpen}>
          <AiOutlinePlus />
        </button>
        <h1 className="ml-16">할 일 추가</h1>
      </div>
    </>
  );
};

export default AddList;

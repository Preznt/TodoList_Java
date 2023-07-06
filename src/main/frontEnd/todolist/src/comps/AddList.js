import { AiOutlinePlus } from "react-icons/ai";

const AddList = () => {
  return (
    <>
      <button onClick={addOpen}>
        <AiOutlinePlus />
      </button>
      <h1>할 일 추가</h1>
    </>
  );
};

export default AddList;

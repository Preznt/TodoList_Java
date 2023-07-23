import { useTodoContext } from "../../context/TodoContext";
import Section from "../Section";
import Title from "../Title";

const SideBar = () => {
  const { open } = useTodoContext();
  console.log("sidebar" + open.sideBar);
  return (
    <div
      className={
        open.sideBar
          ? "w-2/5 flex flex-col place-items-center py-9 border-r-2 bg-gray-100"
          : "w-0"
      }
    >
      <Title />
      <Section />
    </div>
  );
};

export default SideBar;

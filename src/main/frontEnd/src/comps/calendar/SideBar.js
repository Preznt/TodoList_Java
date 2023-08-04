import { useTodoContext } from "../../context/TodoContext";
import Section from "../Section";
import Title from "../Title";
import { PiCaretDoubleLeftLight } from "react-icons/pi";

const SideBar = () => {
  const { open, sideBarFalse } = useTodoContext();
  return (
    <div
      className={
        open.sideBar
          ? "w-2/5 flex flex-col place-items-center py-9 border-r-2 bg-gray-100"
          : "w-0"
      }
    >
      <div className="w-5/6 text-right overflow-hidden">
        <PiCaretDoubleLeftLight
          size="29px"
          className="cursor-pointer inline-block"
          onClick={sideBarFalse}
        />
      </div>
      <Title />
      <Section />
    </div>
  );
};

export default SideBar;

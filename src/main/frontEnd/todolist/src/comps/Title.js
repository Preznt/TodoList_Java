import { useTodoContext } from "../context/TodoContext";

const Title = () => {
  const { theDay, today } = useTodoContext();
  return (
    <header className="w-3/4 text-left">
      <h1 className="font-bold text-xl overflow-hidden">
        {theDay != today ? theDay : "Today"}
      </h1>
    </header>
  );
};

export default Title;

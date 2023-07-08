import { useEffect } from "react";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";
import AddList from "./AddList";

const Section = () => {
  const { allTodo, findAllTodo } = useTodoContext();

  useEffect(() => {
    findAllTodo();
  }, []);

  const allTodoList = allTodo.map((todo, index) => {
    return <List oneTodo={todo} key={index} />;
  });

  // console.log(allTodo);

  return (
    <section className="w-3/4 mt-5">
      {allTodo ? <ul>{allTodoList}</ul> : ""}
      <AddList />
    </section>
  );
};

export default Section;

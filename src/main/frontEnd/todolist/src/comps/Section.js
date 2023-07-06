import { useEffect } from "react";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";

const Section = () => {
  const { allTodo, setAllTodo } = useTodoContext();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/todo");
      const result = await res.json();
      await setAllTodo([...result]);
      console.log(allTodo);
    })();
  }, []);

  const allTodoList = allTodo.map((todo, index) => {
    return <List oneTodo={todo} key={index} />;
  });

  return (
    <section className="w-3/4 mt-5">
      <ul>{allTodoList}</ul>
    </section>
  );
};

export default Section;

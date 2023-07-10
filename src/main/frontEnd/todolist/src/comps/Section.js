import { useEffect } from "react";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";
import AddList from "./AddList";

const Section = () => {
  const { allTodo, findAllTodo } = useTodoContext();

  useEffect(() => {
    console.log("전체 데이터 가져오기");
    findAllTodo();
  }, []);

  const allTodoList = allTodo.map((todo) => {
    console.log("List 만드는 중");
    return <List oneTodo={todo} key={todo.tid} />;
  });

  console.log(allTodo);

  return (
    <section className="w-3/4 mt-5">
      {allTodo ? <ul>{allTodoList}</ul> : ""}
      <AddList />
    </section>
  );
};

export default Section;

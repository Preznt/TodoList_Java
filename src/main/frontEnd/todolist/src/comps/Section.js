import { useEffect } from "react";
import List from "./List";
import { useTodoContext } from "../context/TodoContext";
import AddList from "./AddList";

const Section = () => {
  const { allTodo, findAllTodo } = useTodoContext();

  // 전체 데이터 가져오기
  useEffect(() => {
    findAllTodo();
  }, []);

  // 가져온 데이터로 리스트 만들기
  const allTodoList = allTodo.map((todo) => {
    return <List oneTodo={todo} key={todo.tid} />;
  });

  return (
    <section className="w-3/4 mt-5">
      {allTodo ? <ul>{allTodoList}</ul> : ""}
      <AddList />
    </section>
  );
};

export default Section;

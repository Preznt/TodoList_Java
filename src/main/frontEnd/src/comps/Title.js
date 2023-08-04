import { useTodoContext } from "../context/TodoContext";

const Title = () => {
  const { theDay, today } = useTodoContext();
  const u_id = localStorage.getItem("id");

  const logoutHandler = () => {
    localStorage.removeItem("id");
    const token = localStorage.getItem("token");
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch("https://kapi.kakao.com/v1/user/logout", fetchOption);
    window.location.href = "/";
  };

  return (
    <header className="flex w-3/4 text-left justify-between overflow-hidden">
      <h1 className="font-bold text-xl">
        {theDay !== today ? theDay : "Today"}
      </h1>
      {u_id ? <button onClick={logoutHandler}>로그아웃</button> : ""}
    </header>
  );
};

export default Title;

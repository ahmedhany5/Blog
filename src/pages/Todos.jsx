import { useLoaderData, useNavigation, Link } from "react-router-dom";
import Todo from "../components/Todos/Todo";
import { getTodos } from "../api/todos";
import Spinner from "../components/Spinner";

export default function Todos() {
  const todos = useLoaderData();
  const { state } = useNavigation();
  const isLoading = state === "loading";

  if (isLoading) return <Spinner />;
  return (
    <div className="p-4">
      <h1 className="text-white text-[2rem] mb-5 flex justify-between items-center">
        <p>Todos</p>
        <div className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px]">
          <Link to={"/todos/new"}>New</Link>
        </div>
      </h1>

      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

async function loader() {
  const todos = await getTodos();

  return todos;
}

export const todosRoute = {
  loader,
  element: <Todos />,
};

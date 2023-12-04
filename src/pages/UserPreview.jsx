import { getPostsFromUser } from "../api/posts";
import { useLoaderData } from "react-router-dom";
import Post from "../components/Post/Post";
import UserInfo from "../components/User/UserInformations/UserInfo";
import { getUser } from "../api/users";
import { getTodoFromUser } from "../api/todos";
import Todo from "../components/Todos/Todo";

export default function UserPreview() {
  const { user, post, todos } = useLoaderData();

  return (
    <div>
      <div className="p-3">
        <UserInfo {...user} />
      </div>
      <h1 className="text-white text-[2rem] mb-5 px-2">Posts</h1>
      <div className="p-3 border border-solid border-transparent border-t-[#30363D] grid grid-cols-3">
        {post.map((posts) => (
          <Post key={posts.id} {...posts} />
        ))}
      </div>
      <div className="p-3">
        <h1 className="text-white text-[2rem] mb-5 px-2">Todos</h1>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

async function loader({ params: { userId } }) {
  const users = getUser(userId);
  const posts = getPostsFromUser(userId);
  const todos = await getTodoFromUser(userId);

  return { user: await users, post: await posts, todos: todos };
}

export const userPreview = {
  loader,
  element: <UserPreview />,
};

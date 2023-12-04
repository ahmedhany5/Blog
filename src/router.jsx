import { createBrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar";
import { usersRoute } from "./pages/Users";
import { todosRoute } from "./pages/Todos";
import { preview } from "./components/Post/PostPrview/Preview";
import { postsRoute } from "./pages/Posts";
import { userPreview } from "./pages/UserPreview";
import Error from "./components/Error/Error";
import { newTodoRoute } from "./components/Todos/NewTodo";
import { newPostRoute } from "./components/Post/components/NewPost";
import {editPostRoute} from "./components/Post/components/EditPost"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postsRoute,
              },

              {
                path: ":postId",
                children: [{ index: true, ...preview} , {path: "edit", ...editPostRoute}],
              },

              {
                path: "new",
                ...newPostRoute,
              },
            ],
          },
          {
            path: "users",
            children: [
              {
                index: true,
                ...usersRoute,
              },

              {
                path: ":userId",
                ...userPreview,
              },
            ],
          },
          {
            path: "todos",
            children: [
              {
                index: true,
                ...todosRoute,
              },

              {
                path: "new",
                ...newTodoRoute,
              },
            ],
          },
        ],
      },
    ],
  },
]);

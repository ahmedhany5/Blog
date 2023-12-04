import {
  useLoaderData,
  useNavigation,
  Link,
  useSearchParams,
} from "react-router-dom";
import Post from "../components/Post/Post";
import { getPosts } from "../api/posts";
import Spinner from "../components/Spinner";
import { useEffect, useRef, useState } from "react";
import { baseApi } from "../api/base";

export default function Posts() {
  const posts = useLoaderData();
  const { state } = useNavigation();
  const [users, setUsers] = useState([]);
  const [q, setQ] = useSearchParams({ q: "", id: "" });
  const [id, setId] = useState("");
  const myRef = useRef();

  const isloading = state === "loading";
  useEffect(() => {
    baseApi.get("/users").then((res) => setUsers(res.data));
  }, []);

  if (isloading) return <Spinner />;
  return (
    <>
      <div className="flex items-center">
        <input
          className="w-[500px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 my-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
          type="text"
          defaultValue={q.get("q")}
          ref={myRef}
          placeholder="Search"
        />
        <button
          disabled={isloading}
          onClick={() =>
            setQ(
              (e) => {
                e.set("q", myRef.current.value);
                e.set("id", id);
                return e;
              },
              { replace: true }
            )
          }
          className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] text-white text-center"
        >
          {isloading ? "Loading..." : "Search"}
        </button>

        <div className="auther flex">
          <label htmlFor="auther" className="text-white mx-4 mb-2">
            Auther
          </label>
          <select
            onChange={(v) => {
              setId(v.target.value);
            }}
            name="users"
            id="auther"
            className="w-[300px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
          >
            <option value="">All</option>
            {users?.map((user, key) => (
              <option key={key} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full bg-[#0D1117] p-4  ">
        <div className=" flex justify-between items-center">
          <h1 className="text-white text-[2rem] mb-5">Posts</h1>
          <div className="text-white bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px]">
            <Link to={"/posts/new"}>New</Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 ">
          {posts
            ?.filter(
              (post) =>
                post.title.toLowerCase().includes(q.get("q")) &&
                String(post.userId).includes(q.get("id"))
            )
            .map((post) => (
              <Post key={post.id} {...post} />
            ))}
        </div>
      </div>
    </>
  );
}

async function loader() {
  const posts = await getPosts();
  return posts;
}

export const postsRoute = {
  loader,
  element: <Posts />,
};

import { useLoaderData, useNavigate } from "react-router-dom";
import { getComments } from "../../../api/comments";
import { getPost } from "../../../api/posts";
import { getUser } from "../../../api/users";
import Commnet from "../components/Comments/Commnet";

export function Preview() {
  const { comments, post, user } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="p-3 ">
      <h1 className="flex items-center justify-between text-white mb-2 p-2  border border-solid border-transparent border-b-[#30363D] font-bold text-[1.5rem]">
        {post.title}
        <button
          onClick={() => navigate("edit")}
          className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] text-white text-center"
        >
          Edit
        </button>
      </h1>

      <div className=" text-white border border-solid border-transparent border-b-[#30363D]]">
        By:
        <a
          onClick={() => navigate(`/users/${user.id}`)}
          className=" underline text-blue-500 cursor-pointer "
        >
          {user.name}
        </a>
      </div>
      <div className="text-white p-2  border border-solid border-transparent border-b-[#30363D]">
        {post.body}
      </div>

      <h1 className="text-white mb-2 p-2  border border-solid border-transparent border-b-[#30363D] font-bold text-[1.5rem]">
        Comments
      </h1>
      <div>
        {comments?.map((comment) => (
          <Commnet key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
}

async function loader({ params: { postId } }) {
  const comments = await getComments(postId);
  const post = await getPost(postId);
  const user = await getUser(post.userId);

  return {  comments, post, user };
}

export const preview = {
  loader,
  element: <Preview />,
};

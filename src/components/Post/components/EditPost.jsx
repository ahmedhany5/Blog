import { Form, redirect, useLoaderData } from "react-router-dom";
import { editPost, getPost } from "../../../api/posts";
import { UserSelect } from "../../UserSelect";

function EditPost() {
  const post = useLoaderData();
  return (
    <Form
      method="patch"
      className="flex flex-col items-center justify-center mt-10"
    >
      <div className="flex items-center mb-7">
        <label htmlFor="title" className="text-white mx-4 mb-2">
          Title
        </label>
        <input
          className="w-[300px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
          type="text"
          defaultValue={post.title}
          name="title"
          id="title"
          placeholder="New title"
        />

        <UserSelect defaultValue={post.userId} />
      </div>
      <label htmlFor="body" className="text-white mx-4 mb-2">
        Body
      </label>
      <textarea
        className="w-[700px] h-[200px] rounded-[4px] resize-none bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
        defaultValue={post.body}
        name="disc"
        id="body"
        placeholder="New discription"
      ></textarea>
      <button className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] mt-5 text-white text-center">
        Submit
      </button>
    </Form>
  );
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("disc");
  const userId = Number(formData.get("users"));

  const newData = {
    userId,
    title,
    body,
  };

  await editPost(postId, newData);

  return redirect("/posts");
}

async function loader({ params: { postId } }) {
  const post = await getPost(postId);
  return post;
}
export const editPostRoute = {
  action,
  loader,
  element: <EditPost />,
};

import { Form, Link, redirect, useActionData } from "react-router-dom";

import { newPost } from "../../../api/posts";
import { UserSelect } from "../../UserSelect";

function NewPost() {
  const errorMessage = useActionData();

  return (
    <Form method="post" className="flex items-center justify-center">
      <div className="w-fit my-10">
        <div className="info flex items-center justify-start my-5">
          <div className="title flex flex-col mx-3">
            <label htmlFor="title" className="text-white mx-4 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-[300px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
              placeholder="Write a post title"
            />
          </div>

          <UserSelect />
        </div>
        <div className="body flex flex-col   my-5">
          <label htmlFor="body" className="text-white mx-4 mb-2">
            Body
          </label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            className="resize-none w-full rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
            placeholder="Write a post body"
          ></textarea>
        </div>

        <div className="w-full flex items-center justify-end">
          <div className="mx-3 bg-[#010409] rounded-[6px] outline-none text-white py-[4px] px-2 my-4 border border-solid border-[#30363D] transition duration-75">
            <Link to="..">Back</Link>
          </div>
          <button className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] text-white text-center">
            Save
          </button>
        </div>

        {errorMessage}
      </div>
    </Form>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = Number(formData.get("users"));

  if (title === "")
    return <h1 className="text-white">Please write a post title.</h1>;

  const post = await newPost({ userId, title, body });
  return redirect(`/posts/${post.id}`);
}

export const newPostRoute = {
  action,
  element: <NewPost />,
};

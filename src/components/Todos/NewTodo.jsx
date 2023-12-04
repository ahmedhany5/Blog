import {
  Form,
  useNavigation,
  useActionData,
  redirect,
  Link,
} from "react-router-dom";
import { newTodo } from "../../api/todos";
import { UserSelect } from "../UserSelect";

export default function NewTodo() {
  const errMessage = useActionData();
  const { state } = useNavigation();

  const isSubmitting = state === "submitting";

  return (
    <div className="p-3 text-center mt-8">
      <Form method="post">
        {errMessage}
        <div className="flex items-center justify-center">
          <input
            className="w-[20px] h-[20px]"
            type="checkbox"
            defaultChecked={false}
            name="check"
          />
          <input
            type="text"
            name="title"
            className="w-[500px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 my-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
            placeholder="Write a To-Do Title"
          />

          <UserSelect  />

          <div className="flex items-center justify-center">
            <div className="mx-3 bg-[#010409] rounded-[6px] outline-none text-white py-[4px] px-2 my-4 border border-solid border-[#30363D] transition duration-75">
              <Link to="..">Back</Link>
            </div>
            <button
              disabled={isSubmitting}
              className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] text-white text-center"
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const checked = formData.get("check") == "on";
  const userId = Number(formData.get("users"));

  if (title === "")
    return <h1 className="text-white">Please write a todo title.</h1>;

  await newTodo({ userId, title, completed: checked });

  return redirect(`/todos`);
}

export const newTodoRoute = {
  action,
  element: <NewTodo />,
};

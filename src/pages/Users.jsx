import { useLoaderData, useNavigation } from "react-router-dom";
import User from "../components/User/User";
import { getUsers } from "../api/users";
import Spinner from "../components/Spinner";
export default function Users() {
  const data = useLoaderData();
  const { state } = useNavigation();
  const isLoading = state === "loading";
  if (isLoading) return <Spinner />;
  return (
    <div className="p-4">
      <h1 className="text-white text-[2rem] mb-5">Users</h1>

      <div className="w-full grid grid-cols-3 ">
        {data?.map((users) => (
          <User key={users.id} {...users} />
        ))}
      </div>
    </div>
  );
}

async function loader() {
  const users = await getUsers();

  return users;
}

export const usersRoute = {
  loader,
  element: <Users />,
};

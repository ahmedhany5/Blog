import { useEffect, useState } from "react";
import { baseApi } from "../api/base";

export function UserSelect({ defaultValue }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    baseApi.get("/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <div className="auther flex">
      <label htmlFor="auther" className="text-white mx-4 mb-2">
        Auther
      </label>
      <select
        onChange={(e) => console.log(e.target.value)}
        name="users"
        id="auther"
        className="w-[300px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
      >
        {users?.map((user, key) => (
          <option selected={defaultValue === user.id} key={key} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

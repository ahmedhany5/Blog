import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between  p-5 bg-[#010409]">
        <div className="logo text-white text-lg">A-BLog</div>
        <ul className="flex items-center text-white">
          <li className="cursor-pointer">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="ml-[20px] cursor-pointer">
            <Link to="/users">Users</Link>
          </li>
          <li className="ml-[20px] cursor-pointer">
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

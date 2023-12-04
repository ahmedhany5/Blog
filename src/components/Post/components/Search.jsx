// import { useEffect, useState, useRef } from "react";

// import { useSearchParams, useNavigation } from "react-router-dom";
// import { baseApi } from "../../../api/base";

// export default function Search({ defaultValue }) {
//   const [users, setUsers] = useState([]);
//   const [q, setQ] = useSearchParams({ q: "" });
//   const myRef = useRef();
//   const { state } = useNavigation();

//   const isloading = state === "loading";
//   useEffect(() => {
//     baseApi.get("/users").then((res) => setUsers(res.data));
//   }, []);
//   return (
//     <div className="flex items-center">
//       <input
//         className="w-[500px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 my-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
//         type="text"
//         defaultValue={q.get("q")}
//         ref={myRef}
//         placeholder="Search"
//       />
//       <button
//         disabled={isloading}
//         onClick={() =>
//           setQ(
//             (e) => {
//               e.set("q", myRef.current.value);
//               return e;
//             },
//             { replace: true }
//           )
//         }
//         className="bg-[#2EA043] rounded-[6px] text-[16px] py-[4px] px-2 mr-[40px] text-white text-center"
//       >
//         {isloading ? "Loading..." : "Search"}
//       </button>

//       <div className="auther flex">
//         <label htmlFor="auther" className="text-white mx-4 mb-2">
//           Auther
//         </label>
//         <select
//           onChange={(e) => console.log(e.target.value)}
//           name="users"
//           id="auther"
//           className="w-[300px] rounded-[4px] bg-[#010409] outline-none text-white caret-white  mx-4 border border-solid border-[#30363D] indent-2 py-1 focus:bg-[#0D1117] focus:border-[#2F81F7] transition duration-75"
//         >
//           {users?.map((user, key) => (
//             <option
//               selected={defaultValue == user.id}
//               key={key}
//               value={user.id}
//             >
//               {user.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

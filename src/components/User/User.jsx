import { useNavigate } from "react-router-dom";

export default function User({ id, name, email, website }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0D1117] w-[300px] rounded-[6px] overflow-hidden border border-solid border-[#30363D] mb-10">
      <div className="title p-[10px] border border-solid border-transparent bg-[#161B22] border-b-[#30363D] text-white ">
        {name}
      </div>
      <div className="body  py-[20px] px-3 border border-solid border-transparent border-b-[#30363D] text-white">
        {email}
      </div>
      <div className="body  py-[20px] px-3 border border-solid border-transparent border-b-[#30363D] text-white">
        {website}
      </div>
      <div className="btn-parent w-full text-right p-[10px]">
        <button
          onClick={() => navigate(`/users/${id}`)}
          className="title py-[5px] px-7 bg-[#30363D] text-white  border border-solid border-transparent border-[#5f666e] rounded"
        >
          View
        </button>
      </div>
    </div>
  );
}

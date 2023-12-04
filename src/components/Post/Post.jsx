import { useNavigate } from "react-router-dom";
export default function Post({ id, title, body }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0D1117] w-[300px] rounded-[6px] flex flex-col justify-between overflow-hidden border border-solid border-[#30363D] mb-10">
      <div className="h-fit">
        <div className="title h-[70px] flex items-center p-[10px] border border-solid border-transparent bg-[#161B22] border-b-[#30363D] text-white">
          {title}
        </div>
        <div className="w-full h-[200px] py-[20px] px-3 border border-solid border-transparent border-b-[#30363D] text-white">
          {body}
        </div>
      </div>
      <div className="btn-parent w-full h-fit text-right p-[10px] text-white border border-solid border-transparent border-[#30363D]">
        <button
          onClick={() => navigate(`/posts/${id}`)}
          className="title py-[5px] px-7 bg-[#30363D]  rounded"
        >
          View
        </button>
      </div>
    </div>
  );
}




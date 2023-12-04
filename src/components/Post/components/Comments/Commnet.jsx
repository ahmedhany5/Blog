export default function Commnet({ email, body }) {
  return (
    <div className=" border border-solid border-[#30363D] rounded-[6px] my-5">
      <h1 className="text-white  p-2  bg-[#161B22]">{email}</h1>
      <div className="text-white mb-2 p-2">{body}</div>
    </div>
  );
}

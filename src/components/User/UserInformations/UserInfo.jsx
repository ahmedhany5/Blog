export default function UserInfo({
  name,
  email,
  company: { name: comp },
  website,
  address: { street: str, suite: sui, city, zipcode: ziNumber },
}) {

  const v1 = "flex items-center p-[10px] border border-solid border-[#30363D] bg-[#161B22] rounded text-white mb-2"

  return (
    <div className="text-white pb-2 mb-2 ">
      <h1 className="text-white pb-2 mb-2  font-bold text-[2rem]">
        {name}
      </h1>
      <div className={`${v1}`}>
        E-mail: {email}
      </div>
      <div className={`${v1}`}>
        Company: {comp}
      </div>
      <div className={`${v1}`}>
        Website: {website}
      </div>
      <div className={`${v1}`}>
        Address: {str}, {sui}, {city}, {ziNumber}
      </div>
    </div>
  );
}

import Image from "next/image";
import fetchUser from "./fetchUsers";

export default function User({ userName }) {
  const users = fetchUser(userName);
  return (
    <div className="flex gap-3 ml-[4.3rem] mt-10 ">
      {users && users.avatar_url ? (
        <div className="max-[4.5rem] flex justify-center">
          <Image
            style={{
              borderRadius: "9999px",
              width: "auto",
              height: "auto",
              display: "flex",
            }}
            src={users.avatar_url}
            alt="avatar"
            width="75"
            height="75"
          />
        </div>
      ) : (
        <div className="animate-ping h-10 w-10">LOADING</div>
      )}

      <div className="flex flex-col justify-start align-middle pt-2">
        <div className="md:text-2xl h-5 mt-3 text-[20px] font-bold">
          {users.login}
        </div>

        <div className="md:text-base h-7 mt-3 leading-none text-sm font-bold text-gray-84">
          {users.location}
        </div>
      </div>
    </div>
  );
}

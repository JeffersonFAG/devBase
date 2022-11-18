import Image from "next/image";

export default function User({ users }) {
  return (
    <div className="flex relative flex-row gap-3 ml-[4.3rem] mt-10 ">
      {users.avatar_url ? (
        <div className="max-[4.5rem] flex align-middle justify-center">
          <Image
            style={{
              borderRadius: "9999px",
              width: "auto",
              height: "auto",
              display: "flex",
            }}
            src={users.avatar_url}
            alt="75"
            width="75"
            height="75"
          />
        </div>
      ) : (
        "..."
      )}

      <div className="pt-5 relative flex flex-col justify-start text-center ">
        <div className="md:text-2xl flex h-5 mt-3 text-[20px] font-bold ">
          {users.login}
        </div>
        <div className="md:text-base text-start h-7 mt-3 leading-none  text-smfont-bold text-gray-84">
          {users.location}
        </div>
      </div>
    </div>
  );
}

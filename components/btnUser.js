import React from "react";
import Link from "next/link";

export default function BtnUser({ userName }) {
  return (
    <div className="flex justify-center items-center xms:w-40 w-[13.7rem] h-14 my-4 mr-[0.5rem] rounded-m bg-blue-84 hover:bg-blue-85 cursor-pointer poi text-white font-medium text-lg overflow-hidden ">
      <Link
        href={`/person/[userName]`}
        as={`/person/${userName}`}
        legacyBehavior
      >
        <a className="w-full">{userName}</a>
      </Link>
    </div>
  );
}

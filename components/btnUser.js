import React from "react";
import Link from "next/link";

export default function BtnUser({ userName }) {
  return (
    <div className="btn-user">
      <Link
        href={`/person/[userName]`}
        as={`/person/${userName}`}
        legacyBehavior
      >
        {userName}
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function BtnBack() {
  return (
    <div>
      <Link href={"/"} legacyBehavior>
        <a className="text-white font-robo font-bold justify-start ">Back</a>
      </Link>
    </div>
  );
}

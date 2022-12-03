import Link from "next/link";

export default function BtnBack() {
  return (
    <div className="flex align-middle">
      <div className="pt-[0.1rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <Link href={"/"} legacyBehavior>
        <a className="text-white font-robo font-bold justify-start align-middle ">
          Back
        </a>
      </Link>
    </div>
  );
}

import Head from "next/head";
import BtnBack from "./btnBack";

export default function Layout({ children, btnBack }) {
  return (
    <div className=" w-[1440px] xsm:w-full mx-auto ">
      <Head>
        <title>DevBase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/devbase.ico" />
      </Head>

      {btnBack ? (
        <div className="header-home-back ">
          <div className="flex absolute pr-[5.5rem] ml-24">
            <BtnBack />
          </div>
          <div className="flex justify-center">Home</div>
        </div>
      ) : (
        <div className="header-home">Home</div>
      )}

      <div className="font-robo">{children}</div>
    </div>
  );
}

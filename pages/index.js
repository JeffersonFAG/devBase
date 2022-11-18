import Layout from "../components/layout";
import Menu from "../components/menu";

export default function Home() {
  return (
    <Layout>
      <div className="w-auto h-11 mt-10 ml-16 sm:text-[36px] text-[26px] leading-7 flex align-middle font-bold font-robo">
        Top 5 GitHub Users
      </div>
      <div className="mt-[1rem] ml-16 font-robo font-normal w-auto h-7 sm:text-[1.2rem] text[0.8rem] leading-5">
        Tap the username to see more information
      </div>
      <Menu />
    </Layout>
  );
}

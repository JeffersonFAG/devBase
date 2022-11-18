import BtnUser from "./btnUser";

export default function Menu() {
  return (
    <div className="mr-3  ml-[4rem] smx:w-full flex justify-start items-center text-center">
      <BtnUser key={1} userName="GrahamCampbell" />
      <BtnUser key={2} userName="fabpot" />
      <BtnUser key={3} userName="weierophinney" />
      <BtnUser key={4} userName="rkh" />
      <BtnUser key={5} userName="josh" />
    </div>
  );
}

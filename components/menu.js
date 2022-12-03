import BtnUser from "./btnUser";

export default function Menu() {
  const names = ["fabpot", "weierophinney", "rkh", "josh", "stop"];

  return (
    <div className="flex h-40 pt-3 flex-wrap ml-16">
      {/*<BtnUser key={1} userName="GrahamCampbell" />
    
      <BtnUser key={2} userName="fabpot" />
      <BtnUser key={3} userName="weierophinney" />
      <BtnUser key={4} userName="rkh" />
      <BtnUser key={5} userName="josh" /> */}
      {names && names.length > 0
        ? names.map((name, item) => {
            return <BtnUser key={item} userName={name} />;
          })
        : "Loading"}
    </div>
  );
}

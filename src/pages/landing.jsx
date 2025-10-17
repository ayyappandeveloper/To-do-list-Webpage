import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";

import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation();
  return (
    <>
      {/* Header */}
      <div className="bg-black p-16">
        <div className="bg-white p-10 border rounded-2xl">
          <Header name={data.state.user}></Header>
          {/* Card */}
          <div className="gap-5 justify-between flex flex-wrap">
            <Card bgcolour={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
            <Card
              bgcolour={"#FC6662"}
              title={"Sebtember 14"}
              subtitle={"14.10.2025"}
            ></Card>
            <Card
              bgcolour={"#F9A402"}
              title={"Built Using"}
              subtitle={"React"}
            ></Card>
          </div>
          {/* Todo Container */}
          <Todocontainer></Todocontainer>
        </div>
      </div>
    </>
  );
}
export default Landing;

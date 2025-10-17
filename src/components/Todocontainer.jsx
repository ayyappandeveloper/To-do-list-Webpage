import Todolist from "./Todolist";
import Addtodoform from "./Addtodoform";
import { useState } from "react";
function Todocontainer() {
  const [activityarr, setactivityarr] = useState([
    {
      id: 1,
      activity: "go for a walk",
    },
    {
      id: 2,
      activity: "finish the breakfast",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Addtodoform
          activityarr={activityarr}
          setactivityarr={setactivityarr}
        ></Addtodoform>
        <Todolist
          activityarr={activityarr}
          setactivityarr={setactivityarr}
        ></Todolist>
      </div>
    </>
  );
}
export default Todocontainer;

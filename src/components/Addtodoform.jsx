import { useState } from "react";
function Addtodoform(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;
  const [newvalue, setvalue] = useState("");
  function handlechange(evt) {
    setvalue(evt.target.value);
  }
  function added() {
    setactivityarr([
      ...activityarr,
      { id: activityarr.length + 1, activity: newvalue },
    ]);
    setvalue("");
  }
  return (
    <div>
      <h1 className="py-2 font-bold text-2xl">Manage Activities</h1>
      <input
        value={newvalue}
        onChange={handlechange}
        placeholder="Next Activity?"
        className="border-2 py-1 px-2"
      ></input>
      <button
        onClick={added}
        className="border-2 bg-black text-white px-2 py-1 "
      >
        Add
      </button>
    </div>
  );
}
export default Addtodoform;

import Todoitem from "./Todoitem";

function Todolist(props) {
  const activityarr = props.activityarr;
  const setactivityarr = props.setactivityarr;

  return (
    <div className="bg-[#B9AFE5] flex-grow px-2 borde-none rounded  ">
      <h1 className="text-2xl font-bold ">Today's Activity</h1>
      {activityarr.length === 0 ? (
        <p>You haven't added any activity yet</p>
      ) : (
        ""
      )}

      {activityarr.map(function (item, index) {
        return (
          <Todoitem
            id={item.id}
            item={item}
            index={index}
            activityarr={activityarr}
            setactivityarr={setactivityarr}
          ></Todoitem>
        );
      })}
    </div>
  );
}
export default Todolist;

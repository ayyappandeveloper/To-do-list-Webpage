function Card(props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.bgcolour }}
        className=" py-5 px-10 my-5 text-center border-0 rounded-md flex-grow"
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
}
export default Card;

function Header(props) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Hello {props.name}!</h1>
        <p className="text-">I help you manage your activities :)</p>
      </div>
    </>
  );
}
export default Header;

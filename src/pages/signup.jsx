import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props) {
  const Navigate = useNavigate();

  const users = props.users;
  const setusers = props.setusers;

  const [Euser, setuser] = useState();
  const [Epass, setpass] = useState();
  function handleEuser(evt) {
    setuser(evt.target.value);
  }
  function handleEpass(evt) {
    setpass(evt.target.value);
  }
  function adduser() {
    setusers([...users, { username: Euser, password: Epass }]);
    Navigate("/");
  }

  return (
    <>
      <div className="bg-black p-10 ">
        <div className="bg-white p-10 rounded">
          <h1 className="text-2xl font-medium">Hey Hi</h1>

          <p className="font-medium">You can Signup here :)</p>
          <div className="flex flex-col gap-2 my-2 ">
            <input
              className="border rounded-md p-1 w-52"
              type="text"
              placeholder="username"
              onChange={handleEuser}
            ></input>

            <input
              className="border rounded-md p-1 w-52"
              type="password"
              placeholder="password"
              onChange={handleEpass}
            ></input>
            <input
              className="border rounded-md p-1 w-52"
              type="password"
              placeholder="confirm-password"
            ></input>
            <button
              className="rounded w-25 py-1 bg-[#F89F03]"
              onClick={adduser}
            >
              SignUp
            </button>
            <p>
              Already have an account?{" "}
              <Link className="underline" to="/">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;

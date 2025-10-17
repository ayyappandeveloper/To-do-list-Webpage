import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const [Euser, setuser] = useState();
  const [Epass, setpass] = useState();
  const [ruser, setruser] = useState(true);

  const users = props.users;

  function handleEuser(evt) {
    setuser(evt.target.value);
  }
  function handleEpass(evt) {
    setpass(evt.target.value);
  }
  function checkuser() {
    var userfound = false;

    users.forEach(function (item) {
      if (item.username === Euser && item.password === Epass) {
        console.log("successfull");
        userfound = true;
        setruser(true);
        navigate("/Landing", { state: { user: Euser } });
      }
    });
    if (userfound === false) {
      console.log("failed");
      setruser(false);
    }
  }

  return (
    <>
      <div className="bg-black p-10 ">
        <div className="bg-white p-10 rounded">
          <h1 className="text-2xl font-medium">Hey Hi</h1>

          {ruser ? (
            <p className="font-medium">
              I help you manage your activities after your login :)
            </p>
          ) : (
            <p className="text-red-400">Please Signup before you login</p>
          )}
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

            <button
              className=" cursor-pointer rounded w-25 py-1 bg-[#F89F03]"
              onClick={checkuser}
            >
              Login
            </button>
            <p>
              Dont't have an account?{" "}
              <Link className="underline" to="Signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [users, setusers] = useState([
    {
      username: "ayyappan",
      password: "231",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setusers={setusers} />}
          />
          <Route
            path="/Signup"
            element={<Signup users={users} setusers={setusers} />}
          />
          <Route path="/Landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

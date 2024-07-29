import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/user-login", formValues)
      .then((res) => {
        if (res.data.loginStatus) navigate("/dashboard");
        else {
          if (res.data.Error) {
            setLoginError(res.data.Error);
            // setTimeout(() => {
            //   setLoginError("");
            // }, 2000);
          }
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-4 bg-teal-600  px-4 py-8 min-w-96 rounded text-white">
        {loginError && (
          <div className="border py-2 px-4 border-rose-500 flex justify-center rounded-sm bg-rose-500 text-white">
            {loginError}
          </div>
        )}
        <h2 className="text-4xl  text-center mb-4">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start text-xl"
        >
          <div className="flex gap-4 items-center w-full ">
            <label htmlFor="email" className="min-w-24">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="user@hrm.com"
              className="rounded-sm py-1 px-2 border grow text-black"
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            ></input>
          </div>
          <div className="flex gap-4 items-center w-full">
            <label htmlFor="password" className="min-w-24">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*******"
              className="rounded-sm py-1 px-2 border grow text-black"
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            ></input>
          </div>
          <button
            type="submit"
            className="self-center rounded border px-6 py-1 text-xl"
          >
            Login
          </button>
          <div className="flex justify-between gap-3">
            <input type="checkbox" name="remember-me"></input>
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </form>
      </div>
      <div>
        <p>username:admin@hrm.com</p>
        <p>password:123456789</p>
      </div>
    </div>
  );
};
export default Login;

import React, { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import axios from "axios";

import Google from "../assets/google icon.jpg";

const initialSign = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  address: "",
};

const initialLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const [show, setShow] = useState(true);
  const [sign, setSign] = useState(initialSign);
  const [login, setLogin] = useState(initialLogin);

  const handleGoogleLogin = (e) => {
    window.open("http://localhost:8080/auth/google/", "_self");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(sign);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="w-full mt-10 items-center h-full">
      <div className="flex justify-evenly">
        <div
          className="flex align-bottom justify-center space-x-9 items-center shadow-lg p-4 border border-red-600 rounded-md w-fit h-fit cursor-pointer bg-red-600 hover:scale-110 transition-all"
          onClick={handleGoogleLogin}
        >
          <img className="w-9 h-9" src={Google} alt="Google Icon" />
          <p className="text-2xl font-semibold text-slate-300">Google</p>
        </div>
        {/* sign up form */}
        <form
          onSubmit={handleSignUp}
          className="items-center hover:scale-110 focus:scale-110 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-semibold mt-2 ml-2">Create Account</h2>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Name</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type="text"
              name="name"
              value={sign.name}
              onChange={(e) => setSign({ ...sign, name: e.target.value })}
            />
          </div>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Email</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type="email"
              name="email"
              value={sign.email}
              onChange={(e) => setSign({ ...sign, email: e.target.value })}
            />
          </div>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Password</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type={show ? "text" : "password"}
              name="password"
              value={sign.password}
              onChange={(e) => setSign({ ...sign, password: e.target.value })}
            />
            <i
              className="w-fit h-fit p-1 cursor-pointer transition-all hover:scale-110 rounded-full bg-slate-300"
              onClick={() => setShow(!show)}
            >
              {show ? <HiEyeOff /> : <HiEye />}
            </i>
          </div>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Mobile</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type="text"
              name="mobile"
              value={sign.mobile}
              onChange={(e) => setSign({ ...sign, mobile: e.target.value })}
            />
          </div>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Address</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type="text"
              name="address"
              value={sign.address}
              onChange={(e) => setSign({ ...sign, address: e.target.value })}
            />
          </div>
          <div className="flex justify-center m-5">
            <button
              className="w-fit h-fit border-2 transition-all p-2 rounded-md hover:scale-110 bg-red-600 text-center text-slate-300"
              type="submit"
              onSubmit={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </form>

        {/* login form  */}
        <form
          onSubmit={handleLogin}
          className="items-center hover:scale-110 focus:scale-110 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-semibold mt-2 ml-2">Login</h2>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Email</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type="text"
              name="name"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </div>
          <div className="flex space-x-6 justify-evenly m-5 p-4 shadow-lg rounded-md border-2 border-sky-200 focus:scale-110">
            <label>Password</label>
            <input
              className="border-b-slate-500 border-b-2 flex-grow"
              type={show ? "text" : "password"}
              name="password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <i
              className="w-fit h-fit p-1 cursor-pointer transition-all hover:scale-110 rounded-full bg-slate-300"
              onClick={() => setShow(!show)}
            >
              {show ? <HiEyeOff /> : <HiEye />}
            </i>
          </div>
          <div className="flex justify-center m-5">
            <button
              className="w-fit h-fit border-2 transition-all p-2 rounded-md hover:scale-110 bg-red-600 text-center text-slate-300"
              type="submit"
              onSubmit={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

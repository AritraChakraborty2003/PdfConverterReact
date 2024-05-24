/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./login.css";
const FirstLogin = () => {
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const myStyle = {
    background: "orange",
    font: "poppins",
    display: "flex",
  };
  const SubmitChange = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(uid);
    console.log(password);
    if (uid === "PT1") {
      if (email === "aritra.chakraborty203@gmail.com") {
        if (password === "Technical2024") {
          localStorage.setItem("user", "adminU");
          navigate("/Index");
        } else {
          document.getElementById("uid").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          alert("Invalid Credentials");
        }
      } else {
        document.getElementById("uid").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        alert("Invalid Credentials");
      }
    } else {
      document.getElementById("uid").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <Header />
      <div
        className="h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)] justify-center items-center"
        style={myStyle}
      >
        <div className="formBody bg-white pb-3 lg:w-[60vmin]">
          <div className="headerText w-full bg-black text-white p-1 lg:h-[10vmin] flex flex-col justify-content pl-2 pt-1">
            <p className="text-xl mt-2 overflow-y-hidden font-bold">
              Login Form
            </p>
            <p className="text-sm mt-1">( Login into utility dashboard )</p>
          </div>

          <form className="flex flex-col p-6 gap-y-4">
            <input
              type="text"
              className="w-[65vmin] lg:w-[50vmin] ml-2 bg-slate-200 p-2"
              placeholder="Enter your userId"
              id="uid"
              onChange={(e) => setUid(e.target.value)}
            ></input>
            <input
              type="text"
              className="w-[65vmin] lg:w-[50vmin] ml-2 bg-slate-200 p-2"
              placeholder="Enter your email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="text"
              className="w-[65vmin] lg:w-[50vmin] ml-2 bg-slate-200 p-2"
              placeholder="Enter password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p>
              <a href="/ForgotPassword" className="ml-2">
                Forgot Password?
              </a>
            </p>

            <button
              className="bg-black text-white p-2 w-24"
              onClick={SubmitChange}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default FirstLogin;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../libs/style/signin.css";
import axios from "axios";
import { toast } from "react-toastify";

function Sign_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  // async function sign_in(e) {
  //   // const data = { username: email, password };

  //   let item = { username: email, password };
  //   let result = await fetch("localhost:8080/authenticate", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   // navigate("/home");
  // }
  const sign_in = async (e) => {
    const data = { email, password };
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/authenticate",
        data
      );
      console.log(result);
      if (result.status === 200) {
        toast(`Welcome, ${result.data.userDto.name}`);
        localStorage.setItem("token", result.data.jwtToken);
        localStorage.setItem("user-info", JSON.stringify(result.data.userDto));
      } else {
        toast("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="sign-in-wrapper">
        <form>
          <div className="signin">
            <div className="signin-details row">
              <p className="signin-title">Sign In</p>
              <input
                type="text"
                className="signin-input"
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "15px" }}
                placeholder="Enter your email"
              />
              <input
                type="password"
                className="signin-input"
                style={{ marginBottom: "15px" }}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
              <div className="sign-in-btn">
                <input
                  type="submit"
                  onClick={sign_in}
                  className="sign-in-submit"
                  value="Sign In"
                />
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <span style={{ color: "#707070" }}>Don't have a account?</span>
            &nbsp;{" "}
            <a
              href="/sign_up"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Sign up
            </a>
          </p>
        </form>
        {/* <div className="signin">
        <form>
          <p className="signin-title">Sign In</p>
          <div className="signin-details">
            <div className="signin-formm">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <br />
            <div className="signin-form">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>
            <br />
            <div className="signin-wrapper">
              <input type="submit" onClick={sign_in} value="Sign In" />
            </div>
          </div>
        </form>
      </div> */}
      </div>
    </>
  );
}

export default Sign_in;

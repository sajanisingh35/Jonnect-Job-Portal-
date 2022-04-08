import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../libs/style/signemployer.css";
import axios from "axios";

function Sign_employer() {
  const [companyname, setCompanyName] = useState("");
  const [companytype, setCompanyType] = useState("");
  const [companynumber, setCompanyNumber] = useState("");
  const [officeemail, setOfficeEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [employer, setEmployer] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  const sign_employer = async (e) => {
    const data = {
      companyname,
      companytype,
      companynumber,
      officeemail,
      password,
    };
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/signup", data);
      console.log(result);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <form className="containerr">
        <div className="signup">
          <div className="flex-11"></div>
          <div className="flex-22 signup-details">
            <p className="signup-title">Sign Up</p>
            <input
              type="text"
              className="signup-input"
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your Company Name"
            />
            <input
              type="text"
              className="signup-input"
              onChange={(e) => setCompanyType(e.target.value)}
              placeholder="Enter your Company Type"
            />
            <input
              type="text"
              className="signup-input"
              onChange={(e) => setCompanyNumber(e.target.value)}
              placeholder="Enter your Company Number"
            />
            <input
              type="text"
              className="signup-input"
              onChange={(e) => setOfficeEmail(e.target.value)}
              placeholder="Enter your Office email"
            />
            <input
              type="password"
              className="signup-input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <input type="submit" onClick={sign_employer} value="Sign Up" />
          </div>
          <div className="flex-11"></div>
        </div>
      </form>
    </>
  );
}

export default Sign_employer;

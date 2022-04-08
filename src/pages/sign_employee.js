import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../libs/style/sign_employee.css";
import axios from "axios";
import { toast } from "react-toastify";
// import Sign_employer from "./signemployer";

function Sign_up() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyRegistrationNumber, setCompanyRegistrationNumber] =
    useState("");

  const navigate = useNavigate();
  const [employee, setEmployee] = useState(true);

  const [role, setRole] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  const handleEmployerTypeChange = (event) => {
    setRole(event.target.value);
  };

  const sign_up = async (e) => {
    const data = {
      name,
      email,
      password,
      address,
      contactNum,
      companyName,
      companyAddress,
      companyRegistrationNumber,
      role,
    };
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/signup", data);
      navigate("/Sign_in");
      toast(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {/* <img
        src="assets/image1.jpg"
        alt="No image loaded"
        height="100%"
        width="100%"
      /> */}
      <div className="imagee">
        <form className="row g">
          <h3 className="form-title">Sign Up to Register</h3>
          <div className="common-field row g">
            <div className="sign-up-input sign-up-input__text col-md-6">
              <label for="inputEmail4" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6 sign-up-input sign-up-input__text">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 sign-up-input sign-up-input__text">
              <label for="inputEmail4" class="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6 sign-up-input sign-up-input__text">
              <label for="inputEmail4" class="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6 sign-up-input sign-up-input__text">
              <label for="inputEmail4" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                name="contactNumber"
                onChange={(e) => setContactNum(e.target.value)}
              />
            </div>

            <div className="col-md-6 sign-up-input sign-up-input__text">
              <label className="form-label" for="autoSizingSelect">
                Who are you?
              </label>
              <select
                className="form-select"
                id="autoSizingSelect"
                value={role}
                name="role"
                onChange={handleEmployerTypeChange}
              >
                <option selected value={null}>
                  Select..
                </option>
                <option value="applicant">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            {/* <div className="col-12 sign-up-input sign-up-input__text">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div> */}
          </div>
          {role && role === "employer" && (
            <div className="employer-form row g">
              <div className="sign-up-input sign-up-input__text col-md-6">
                <label for="inputEmail4" class="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="col-md-6 sign-up-input sign-up-input__text">
                <label for="inputEmail4" class="form-label">
                  Company Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="companyAddress"
                  onChange={(e) => setCompanyAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6 sign-up-input sign-up-input__text">
                <label for="inputEmail4" class="form-label">
                  Company Registration Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="companyRegistrationNumber"
                  onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
                />
              </div>
            </div>
          )}

          {role && role === "applicant" && (
            <div class="mb-3">
              <label for="formFileSm" className="form-label">
                Small file input example
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
              />
            </div>
          )}

          <div className="col-12 sign-up-input sign-up-input__text">
            <button type="submit" onClick={sign_up} className="btn btn-primary">
              Sign Up
            </button>
          </div>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <span style={{ color: "#707070" }}>Already have a account?</span>
            &nbsp;{" "}
            <a
              href="/Sign_in"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Sign_up;

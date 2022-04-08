import React from "react";
import "../libs/style/about.css";
import Navbar from "../components/Navbar";
import Easiest from "./easiest";
const about = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="grid">
          <div className="about-details">
            <p className="about-title">How We Started</p>
            <p className="about-paragraph">
              Jonnect is a web application that gives information related to the
              vacancies in various domains without any difficulty.It aims at
              developing an online search Portal for the Placement Details for
              job seekers. We help in making logging and uploading CVs easier.{" "}
              <br />
              <br />
              Company representatives can access any information put up by the
              applicants. You can register and post vacancies online and reach
              out to hundreds of people.Job seekers can register and apply for
              the displayed available vacancies. Our job search site can help
              employers pace up their hiring process.
              <br />
              <br />
              We respect our users privacy.
            </p>
          </div>
          <div className="about-image">
            <div className="img">
              <img src="assets/aboutt.png" alt="not loaded" />
            </div>
          </div>
        </div>
      </div>
      <div className="easiest">
        <Easiest />
      </div>
    </>
  );
};

export default about;
// style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '90vh'}}>

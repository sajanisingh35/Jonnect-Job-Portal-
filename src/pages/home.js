import React from "react";
import Navbar from "../components/Navbar";
import "../libs/style/home.css";
import JobCard from "../pages/JobCard.js";
const home = () => {
  return (
    <>
      <Navbar />
      <div
        className="image-section"
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-2",
        }}
      >
        <img
          src="assets/hero_image.png"
          alt="No image loaded"
          height="100%"
          width="100%"
        />
      </div>
      <div className="banner-section">
        <p className="title">Drop Resume & Connect To Your Desired Job!</p>
        {/* <br /> */}
      </div>
      <p className="form">
        <form action="#">
          <div className="custom-form-control">
            <label for="Keyword">Keyword:</label>
            <input
              type="text"
              id="key"
              name="Keyword"
              placeholder="Job title"
            />
          </div>

          <div className="custom-form-control">
            <label for="Location">Location:</label>
            <input
              type="text"
              id="loc"
              name="Location"
              placeholder="City or State"
            />
          </div>
          <div className="custom-form-control">
            <label></label>
            <input type="submit" Value="Find a Job" />
          </div>
        </form>
      </p>
      <JobCard />
    </>
  );
};

export default home;

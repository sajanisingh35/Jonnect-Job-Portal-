import React from "react";
import { Icon } from "@iconify/react";
import "../libs/style/jobcard.css";
const jobcard = (props) => {
  let data = [
    {
      title: "Post Room Operate",
      time: "Full Time",
      company: "Google",
      country: "United States",
      post: "Accountancy",
      jobtype: "freelance",
    },
    {
      title: "Backend Developer",
      time: "Part Time",
      company: "Youtube",
      country: "United States of America",
      post: "Backend",
      jobtype: "freelance",
    },
    {
      title: "FrontEnd Developer",
      time: "Full Time",
      company: "Instagram",
      country: "Canada",
      post: "Engineer",
      jobtype: "freelance",
    },
    {
      title: "Quality Assurance Engineer",
      time: "Full Time",
      company: "Youtube",
      country: "Australia",
      post: "Engineer",
      jobtype: "freelance",
    },
  ];
  // data = data.filter((job) => job.time === "Full Time");
  // console.log(data);
  return (
    <>
      <div className="Job_Card_Title">
        <center> Jobs You May Be Interested In</center>
      </div>
      <div className="main">
        {data.map((job) => (
          <>
            <div className="JobCard">
              <div className="JobCard__image">
                <Icon
                  icon="bx:phone-call"
                  color="#256ce1"
                  width="100"
                  height="80"
                />
              </div>
              <div className="JobCard__title">
                {job.title}
                <div className="JobCard__body">
                  <div style={{ marginBottom: "10px" }}>
                    <a href="https://www.google.com/" target="_blank">
                      Via {job.company}
                    </a>
                  </div>
                  <br />
                  <Icon icon="akar-icons:location" width="30" height="25" />
                  {job.country}
                  <br />
                  <Icon icon="bi:funnel" width="30" height="25" />
                  {job.post}
                  <br />
                  <Icon icon="akar-icons:briefcase" width="30" height="25" />
                  {job.jobtype}
                </div>
              </div>
              <div className="duration">{job.time}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default jobcard;

import React, { Component } from "react";
import "../libs/style/postjob.css";
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

class post_job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "",
      salary: "",
      numOfVacancy: "",
      description: "",
      timeDuration: format(new Date(), "yyyy-MM-dd"),
    };
  }

  handleJobTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleJobCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };
  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleNumOfVacancy = (event) => {
    this.setState({
      numOfVacancy: event.target.value,
    });
  };
  handleJobDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    console.log(this.state);
    const header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const data = this.state;
    event.preventDefault();
    const result = await axios.post("http://localhost:8080/jobs", data, header);
    console.log(result);
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="postjob">
          <form onSubmit={this.handleSubmit}>
            <p className="postjob__title">Fill Up Your Job Information</p>
            <div className="postjob__details">
              <div className="postjob__form">
                <input
                  type="text"
                  value={this.state.jobtitle}
                  onChange={this.handleJobTitle}
                  placeholder="Job Title"
                />
              </div>
              <div className="postjob__form">
                <input
                  type="text"
                  value={this.state.jobcategory}
                  onChange={this.handleJobCategory}
                  placeholder="Category"
                />
              </div>
              <div className="postjob__form">
                <input
                  type="text"
                  value={this.state.salary}
                  onChange={this.handleSalary}
                  placeholder="Salary"
                />
              </div>
              <div className="postjob__form">
                <input
                  type="text"
                  value={this.state.numOfVacancy}
                  onChange={this.handleNumOfVacancy}
                  placeholder="Number Of Vacancy"
                />
              </div>
            </div>

            <div className="post-textarea-wrapper">
              <textarea
                className="post-textarea"
                value={this.state.description}
                onChange={this.handleJobDescription}
                placeholder="Job Description"
                rows="10"
                cols="57"
              />
            </div>
            <div className="postjob__form postjob__form--datepicker form-group">
              <label className="datePickerLabel">Expiry Date</label>

              <DatePicker
                className="postjob__form--datepicker-ele"
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                selected={new Date(this.state.timeDuration)}
                onChange={(date) =>
                  this.setState({
                    timeDuration: format(date, "yyyy-MM-dd"),
                  })
                }
              />
            </div>

            <div className="post-submit-wrapper">
              <input type="submit" value="Post a Job" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default post_job;

import React, { Component } from "react";
import "../libs/style/contact.css";
import Navbar from "../components/Navbar";
import Contact_card from "./contact_card.js";
class contact_us extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      number: "",
      subject: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };
  handleSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };
  handleMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.email} ${this.state.number} ${this.state.subject} ${this.state.message} `
    );
    event.preventDefault();
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="contactcard">
          <Contact_card />
        </div>
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <p className="contact-form-title">Lets' Talk With Us</p>
            <div className="contact-details">
              <div className="form-control">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  placeholder="Your Email"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={this.state.number}
                  onChange={this.handleNumber}
                  placeholder="Your Number"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={this.state.subject}
                  onChange={this.handleSubject}
                  placeholder="Your subject"
                />
              </div>
            </div>
            <div className="message-textarea-wrapper">
              <textarea
                className="message-textarea"
                value={this.state.message}
                onChange={this.handleMessage}
                placeholder="Your Message"
                rows="10"
                cols="67"
              />
            </div>
            <div className="submit-wrapper">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default contact_us;

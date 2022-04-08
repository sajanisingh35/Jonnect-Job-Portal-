import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Jobs from "./pages/jobs";
import Candidates from "./pages/candidates";
import Post_Job from "./pages/post_job";
import Contact_us from "./pages/contact_us";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./pages/sign_up";
import Sign_in from "./pages/Sign_in";

function App() {
  return (
    <>
      <ToastContainer />

      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/post_job" element={<Post_Job />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/Sign_in" element={<Sign_in />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import "../libs/style/jobs.css";
// import JobCard from "../pages/JobCard.js";

// function Jobs() {
//   const [allUsers, setAllUsers] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       let userData;
//       try {
//         const response = await fetch("https://randomuser.me/api/?results=6");
//         userData = await response.json();
//       } catch (error) {
//         console.log(error);
//         userData = [];
//       }
//       setAllUsers(userData.results);
//       setUsers(userData.results);
//     })();
//   }, []);

//   const filterCards = (event) => {
//     const value = event.target.value.toLowerCase();
//     const filteredUsers = allUsers.filter((user) =>
//       `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
//     );
//     setUsers(filteredUsers);
//   };

//   return (
//     <div className="jobs">
//       <h1>Social Cards</h1>
//       <input
//         className="search-box"
//         onInput={filterCards}
//         placeholder="Search..."
//       />
//       <div className="cards-container">
//         {users.map((user, index) => (
//           <JobCard key={index} userData={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Jobs;

import React from "react";
import JobCard from "./JobCard.js";
import Navbar from "../components/Navbar";
const jobs = () => {
  return (
    <>
      <Navbar />
      <div className="jobs">
        <JobCard />
      </div>
    </>
  );
};

export default jobs;

import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserLogin } from "../Axios/Api.js";

export const Login = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault(); // Fix typo here
    try {
      console.log("clicked");
      const userResponse = await UserLogin({
        email: userEmail,
        password: userPassword,
      });
      console.log(userResponse);
    } catch (error) {
      console.log(error.response?.data?.message || error.message); // Ensure you handle different error structures
    }
  };

  return (
    <div className="login-page">
      <div className="toggle-container">
        <button
          className={isJobSeeker ? "toggle-button active" : "toggle-button"}
          onClick={() => setIsJobSeeker(true)}
        >
          Job Seeker
        </button>
        <button
          className={!isJobSeeker ? "toggle-button active" : "toggle-button"}
          onClick={() => setIsJobSeeker(false)}
        >
          Employer
        </button>
      </div>

      <div className="login-container">
        <h2>{isJobSeeker ? "Job Seeker Login" : "Employer Login"}</h2>
        {isJobSeeker ? (
          <form onSubmit={userLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
        <p>
          Don't have an account?{" "}
          <Link
            to={isJobSeeker ? "/register" : "/employer-register"}
            style={{ textDecoration: "none" }}
          >
            Register
          </Link>
        </p>
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

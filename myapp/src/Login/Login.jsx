import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [isJobSeeker, setIsJobSeeker] = useState(true);

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
                <p>Don't have an account? <Link to={isJobSeeker ? "/register" : "/employer-register"} style={{ textDecoration: 'none' }}>Register</Link></p>
            </div>
        </div>
    );
};

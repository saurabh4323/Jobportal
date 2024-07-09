import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [isJobSeeker, setIsJobSeeker] = useState(true);

    return (
        <div className="register-page">
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

            <div className="register-container">
                <h2>{isJobSeeker ? "Job Seeker Register" : "Employer Register"}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Confirmpassword">Confirm Password:</label>
                        <input type="password" id="Confirmpassword" name="Confirmpassword" required />
                    </div>
                    {!isJobSeeker && (
                        <div className="form-group">
                            <label htmlFor="company">Company Name:</label>
                            <input type="text" id="company" name="company" required />
                        </div>
                    )}
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>LogIn</Link></p>
                <p><Link to="/" style={{ textDecoration: 'none',color:'black'}}>Back to Home</Link></p>
            </div>
        </div>
    );
};

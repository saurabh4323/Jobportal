import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [isJobSeeker, setIsJobSeeker] = useState(true);
    const [showOTP, setShowOTP] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Trigger OTP send logic here
        setShowOTP(true);
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        // Verify OTP logic here
    };

    return (
        <div className="register-page">
            <div className="toggle-container">
                <button
                    className={isJobSeeker ? "toggle-button active" : "toggle-button"}
                    onClick={() => {
                        setIsJobSeeker(true);
                        setShowOTP(false);
                    }}
                >
                    Job Seeker
                </button>
                <button
                    className={!isJobSeeker ? "toggle-button active" : "toggle-button"}
                    onClick={() => {
                        setIsJobSeeker(false);
                        setShowOTP(false);
                    }}
                >
                    Employer
                </button>
            </div>

            <div className="register-container">
                <h2>{isJobSeeker ? "Job Seeker Register" : "Employer Register"}</h2>
                <form onSubmit={showOTP ? handleVerifyOTP : handleRegister}>
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
                    {showOTP && (
                        <div className="form-group">
                            <label htmlFor="otp">OTP:</label>
                            <input type="text" id="otp" name="otp" required />
                        </div>
                    )}
                    <button type="submit">{showOTP ? "Verify OTP" : "Register"}</button>
                </form>
                <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></p>
                <p><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Back to Home</Link></p>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import './JobListing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTasks, faMapMarkerAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu/Menu';
import Footer from '../Footer/Footer';

const JobListing = () => {
    const [jobs, setJobs] = useState([]);
    const [formState, setFormState] = useState({
        id: null,
        title: '',
        description: '',
        qualifications: '',
        responsibilities: '',
        location: '',
        salary: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddJob = () => {
        if (formState.title && formState.description && formState.qualifications && formState.responsibilities && formState.location && formState.salary) {
            setJobs([...jobs, { ...formState, id: jobs.length + 1 }]);
            setFormState({
                id: null,
                title: '',
                description: '',
                qualifications: '',
                responsibilities: '',
                location: '',
                salary: ''
            });
        } else {
            alert("All fields are required!");
        }
    };

    const handleEditJob = (job) => {
        setIsEditing(true);
        setFormState(job);
    };

    const handleUpdateJob = () => {
        setJobs(jobs.map(job => (job.id === formState.id ? formState : job)));
        setIsEditing(false);
        setFormState({
            id: null,
            title: '',
            description: '',
            qualifications: '',
            responsibilities: '',
            location: '',
            salary: ''
        });
    };

    const handleDeleteJob = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    return (
        <>
        <Menu/>
            <div className="job-listing-container">
                <h1>Job<span style={{ color: "#0274ff" }}>Listings</span></h1>
                <div className="job-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={formState.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Job Description"
                        value={formState.description}
                        onChange={handleChange}
                    />
                    <textarea
                        name="qualifications"
                        placeholder="Qualifications"
                        value={formState.qualifications}
                        onChange={handleChange}
                    />
                    <textarea
                        name="responsibilities"
                        placeholder="Responsibilities"
                        value={formState.responsibilities}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formState.location}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="salary"
                        placeholder="Salary Range"
                        value={formState.salary}
                        onChange={handleChange}
                    />
                    {isEditing ? (
                        <button onClick={handleUpdateJob}>Update Job</button>
                    ) : (
                        <button onClick={handleAddJob}>Add Job</button>
                    )}
                </div>
                <div className="job-list">
                    {jobs.length === 0 ? (
                        <p>No jobs added yet.</p>
                    ) : (
                        jobs.map((job) => (
                            <div className="job-item" key={job.id}>
                                <h2>{job.title}</h2>
                                <p>{job.description}</p>
                                <p><strong><FontAwesomeIcon icon={faGraduationCap} /> Qualifications:</strong> {job.qualifications}</p>
                                <p><strong><FontAwesomeIcon icon={faTasks} /> Responsibilities:</strong> {job.responsibilities}</p>
                                <p><strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</strong> {job.location}</p>
                                <p><strong><FontAwesomeIcon icon={faMoneyBillWave} /> Salary:</strong>₹{job.salary}</p>
                                <div className="job-buttons">
                                    <button className="edit-button" onClick={() => handleEditJob(job)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDeleteJob(job.id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default JobListing;

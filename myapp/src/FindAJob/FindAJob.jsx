import React, { useState, useContext } from 'react';
import './FindAJob.css';
import { JobContext } from '../JobContext';
import {Menu} from '../Menu/Menu';
import Footer from '../Footer/Footer';

const FindAJob = () => {
  const { jobs } = useContext(JobContext);

  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: '',
    jobType: '',
    minSalary: '',
    maxSalary: ''
  });

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilter = () => {
    const { search, category, location, jobType, minSalary, maxSalary } = filters;
    const filtered = jobs.filter(job => {
      return (
        (search === '' || job.title.toLowerCase().includes(search.toLowerCase())) &&
        (category === '' || job.category === category) &&
        (location === '' || job.location.toLowerCase().includes(location.toLowerCase())) &&
        (jobType === '' || job.jobType === jobType) &&
        (minSalary === '' || job.salary >= parseInt(minSalary)) &&
        (maxSalary === '' || job.salary <= parseInt(maxSalary))
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <>
    <Menu/>
    <div className="job-finding-container">
      <div className="filter-section">
        <input 
          type="text" 
          placeholder="Search jobs" 
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          className="search-input" 
        />
        <select 
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Select category</option>
          <option value="Tech">Tech</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
        </select>
        <input 
          type="text" 
          placeholder="Location" 
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="filter-input" 
        />
        <select 
          name="jobType"
          value={filters.jobType}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
        <input 
          type="number" 
          placeholder="Min Salary" 
          name="minSalary"
          value={filters.minSalary}
          onChange={handleFilterChange}
          className="filter-input" 
        />
        <input 
          type="number" 
          placeholder="Max Salary" 
          name="maxSalary"
          value={filters.maxSalary}
          onChange={handleFilterChange}
          className="filter-input" 
        />
        <button onClick={handleApplyFilter} className="apply-filter-button">Apply Filter</button>
      </div>
      <div className="job-listings">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map(job => (
            <div key={job.id} className="job-item">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Qualifications:</strong> {job.qualifications}</p>
              <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong>₹{job.salary}</p>
              <button className="apply-now-button">Apply Now</button>
            </div>
          ))
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FindAJob;

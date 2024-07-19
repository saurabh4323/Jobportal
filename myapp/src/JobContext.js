import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    return (
        <JobContext.Provider value={{ jobs, setJobs }}>
            {children}
        </JobContext.Provider>
    );
};

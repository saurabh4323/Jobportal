import "./App.css";
import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import Job from "./Job/Job";
import { Login } from "./Login/Login";
import MyJob from "./Job/Myjob";
import Contact from "./contact/Contact";
import JobListing from "./JobListing/JobListing";
import FindAJob from "./FindAJob/FindAJob";
import { JobProvider } from "./JobContext";

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/job" element={<MyJob />} /> */}
            <Route path="/job" element={<FindAJob />} />
            <Route path="/job-listing" element={<JobListing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;

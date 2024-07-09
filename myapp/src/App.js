import "./App.css";

import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import Job from "./Job/Job";
import { Login } from "./Login/Login";
import MyJob from "./Job/Myjob";
import Contact from "./contact/Contact";
import JobListing from "./JobListing/JobListing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/job" element={<MyJob></MyJob>} /> */}
          <Route path="/job" element={<JobListing />} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

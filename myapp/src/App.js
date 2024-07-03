import "./App.css";

import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import Job from "./Job/Job";
import { Login } from "./Login/Login";
import Myjob from "./Job/Myjob";
import Contact from "./contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login />} />
          <Route path="/job" element={<Job></Job>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

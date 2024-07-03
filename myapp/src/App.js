import "./App.css";

import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register/Register";
import Job from "./Job/Job";
import { Login } from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/job" element={<Job></Job>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

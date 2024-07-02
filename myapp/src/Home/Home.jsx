import React from "react";
import "./home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <div className="ri">
          <h1 className="heading-banner wow animate__animated animate__fadeInUp">
            The <span className="color-brand-2">Easiest Way</span>
            <br className="d-none d-lg-block" />
            to Get Your New Job
          </h1>
          <p>
            Our new job portal is designed to help job seekers find work
            efficiently. As we grow, we aim to assist millions of job seekers
            and facilitate thousands of job applications daily.
          </p>
        </div>
        <div className="left">
          <img
            src="https://jobbox-html.netlify.app/frontend/assets/imgs/page/homepage1/banner1.png"
            alt="home"
          ></img>
        </div>
      </div>
      <div className="dside">
        <div className="dleft">
          <img
            class="img-job-1"
            alt="jobBox"
            src="https://jobbox-html.netlify.app/frontend/assets/imgs/page/homepage1/img-chart.png"
          ></img>
          <img
            class="img-job-2"
            alt="jobBox"
            src="https://jobbox-html.netlify.app/frontend/assets/imgs/page/homepage1/img1.png"
          ></img>
          <img
            class="img-job-3"
            alt="jobBox"
            src="https://jobbox-html.netlify.app/frontend/assets/imgs/page/homepage1/controlcard.png"
          ></img>
        </div>
        <div className="dright">
          <h1>
            Millions Of Jobs. <span>Find The One </span> <br></br>That’s Right
            For You
          </h1>
          <Button variant="contained">SEARCH JOB</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

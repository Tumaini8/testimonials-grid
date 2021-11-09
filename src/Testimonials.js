import React from "react";
import Logo1 from "./Logo1.jpg";

export default function Testimonials() {
  return (
    <div className="Testimonials">
      <section>
        <div className="row">
          <div className="col-3">
            <span>
              {" "}
              <img src={Logo1} alt="daniel-logo" className="img-fluid" />{" "}
              <h6>Daniel Clifford</h6>
            </span>
            <p className="main-paragraph">
              I received a job offer mid-course, and the subjects I learned
              <br />
              were current, if not more so, in the company i joined. I <br />
              honestly feel i got every penny's worth.
            </p>
            <small>
              "I was an EMT for many years before i joined the Bootcamp, I've
              looking to make a<br /> transition and I have heard some people
              who had an amazing experience here. I signed up
              <br />
              for free intro course and found it incredibily fun! I enrolled
              shotly thereafter. The next 12 <br />
              weeks was the best and most challenging time of my life. Since
              completing the course I've <br />
              successfully switched careers, working as a Software Engineer at
              VR Startup.
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}

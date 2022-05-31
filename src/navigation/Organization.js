import React, { useState } from "react";
// import LoadingBar from "react-top-loading-bar";
import teamImage from '../assests/teamImage2.png'
import aboutImage from '../assests/aboutImage2.png'
import "../css/organization.css"

const Organization = () => {
  return (
 
      <div className="App">
        <div className="aboutSection">
          <img src={aboutImage} width='100%' height='100%'  />

          <div className="aboutText">
            <h5>We are a team of Passionate people</h5>
            <p>
              We create this website to help students to improve their skills
            </p>
          </div>
        </div>

        <span className="Divider"></span>

        <div className="engageSection">
          <p>
            We engage customers through our feedback system. <br />
            <br />
            Customer give feedback on cources and after reviewing the feedback
            we make improvement on problems that customer mention.{" "}
          </p>
        </div>
        <span className="Divider"></span>
        <div className="teamSection">
          <h2>Our Team</h2>

          <div className="AllCards">
            <div className="card">
             
              <img src={teamImage} style={{width:"55%",height:"200px"}} />
              <div className="container">
                <h4>
                  <b>Azam</b>
                </h4>
                <p>Project Leader</p>
              </div>
            </div>

            <div className="card">
              <img src={teamImage} style={{width:"55%",height:"200px"}} />
              <div className="container">
                <h4>
                  <b>Haris</b>
                </h4>
                <p>Team Member</p>
              </div>
            </div>

            <div className="card">
              <img src={teamImage} style={{width:"55%",height:"200px"}} />
              <div className="container">
                <h4>
                  <b>Umar</b>
                </h4>
                <p>Team Member</p>
              </div>
            </div>

            <div className="card">
              <img src={teamImage} style={{width:"55%",height:"200px"}} />
              <div className="container">
                <h4>
                  <b>Abubakar</b>
                </h4>
                <p>Team Member</p>
              </div>
            </div>

            <div className="card">
              <img src={teamImage} style={{width:"55%",height:"200px"}} />
              <div className="container">
                <h4>
                  <b>Abubakar Rasheed</b>
                </h4>
                <p>Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Organization;

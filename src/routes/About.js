import React, { Component } from "react";
import NavBar from "../components/navbar";
import Avatar from "../images/Profile_pic.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <title>About</title>
        <NavBar />
        <div>
          <div
            className="content"
            style={{
              top: 0,
              left: 0,
              right: 0,
              width: "1070px",
              margin: "0 auto",
              backgroundColor: "#F5F5F5",
              zIndex: -1
            }}
          >
            <div style={{ padding: 40, paddingTop: 80, display: "flex" }}>
              <img src={Avatar} style={{ width: "50%" }} />
              <div style={{ width: "50%", padding: 20, fontSize: 20 }}>
                My name is Lorenzo Lim and I am a full-stack software engineer
                specializing in the MERN (Mongoose, Express, React, Node) stack.
                I started my studies at the Queensland Institute of Business and
                Technology doing a Diploma of Information Technology. I then
                continued my studies doing a Bachelor of Information
                Communication Technology at Griffith University.
                <br />
                <br />
                During my third year at Griffith I was presented the opportunity
                to be part of the first cohort in a six month fast track
                bootcamp in Brisbane called Coder Academy. The opportunity was
                exciting as it lead to an internship with one their partners
                which I thought would be very valuable experience. I completed
                the course and did an internship with Rex Labs. I was not
                offered a position there after the internship but with the
                experience I gained I landed a role as a Software Engineer at
                Codafication.
                <br />
                <br />
                First couple of months I worked with our client QBE to create a
                group accident and sickness claim form. I was in charge of
                creating all the form components and testing. The project was a
                success and has been deployed for use. I was put on support
                afterwards answering support tickets and fixing bugs. After a
                year of working I have left my role looking to finish my studies
                at Griffith but also looking for a new opportunity to continue
                working in the industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

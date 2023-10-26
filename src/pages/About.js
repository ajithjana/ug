import React from "react";
import aboutimg from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutimg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We have created a front-end Gamification website related to Freight survey using front end technologies like Html,Css,BootStrap,Javascript and React framework. The Game is related to Freight Transport data collection through surveys.During their travel the riders were asked different set of questions like their difficulties faced during their travel and how they have faced the challenges regarding their travel, based on their answers the riders will earn rewards , Coupons and gifts.The main aim of this website to improve the travel behaviour by improving the quality of drivers especially freight drivers and this website is responsive website and was designed to be user friendly and responsive with an intuitive layout and appealing design .Overall the website successfully utilises these technologies to create a seamless user experience and achieve its intended purpose.
        </p>
      </div>
    </div>
  );
}

export default About;

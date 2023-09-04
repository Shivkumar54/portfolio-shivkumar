import React from "react"
import AboutImage from "../Assets/Images/1.jpg"
import Education from "../Layouts/AboutSections/education"
import Internship from "../Layouts/AboutSections/internships"
import Employer from "../Layouts/AboutSections/cEmployer"
import { Link } from "react-router-dom"
const About = () => {
  const linkedin = "https://www.linkedin.com/in/shivkumar-m-a7a49b205/"
  return (
    <div className="Abouter container ">
      <div className="aboutHeader ">
        <div className="aImg">
          <img src={AboutImage} alt="" className="aImager" />
        </div>
        <div className="aText">
          <span className="aSpanner">Short introduction</span>
          <h1 className="aHeading">About Me</h1>
          <p className="aparagraph">
            Passionate Front End Developer with 1.8 years of experience in
            building high-performing client code using React JS and other modern
            frameworks. Adept at collaborating with cross-functional teams to
            understand user pain points and deliver impactful solutions.
            Committed to writing code that lasts for years, not months, while
            thriving in a distributed-first work culture.
          </p>
          <Link to={linkedin}>
            {" "}
            <button className="homeBtn"> Linkedin</button>
          </Link>
        </div>
      </div>
      <Education />
      <Internship />
      <Employer />
    </div>
  )
}

export default About

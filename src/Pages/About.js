import React from "react"
import AboutImage from "../Assets/Images/1.jpg"
import Education from "../Layouts/AboutSections/education"
import Internship from "../Layouts/AboutSections/internships"
import Employer from "../Layouts/AboutSections/cEmployer"
const About = () => {
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
            A passionate React JS developer with an overall 1 year of experience
            and 2 years of experience in HTML5, CSS, and Bootstrap. A team
            player and hard-working professional with overall 1-year experience
            in an IT firm
          </p>
          <button className="homeBtn"> Linkedin</button>
        </div>
      </div>
      <Education />
      <Internship />
      <Employer />
    </div>
  )
}

export default About

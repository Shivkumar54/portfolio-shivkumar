import React from "react"
import "../style.css"
import BgImage from "../Assets/Images/94.jpg"
import Resume from "../Assets/Resume/resume.pdf"
const Home = () => {
  return (
    <div>
      <div className="imager">
        <img src={BgImage} className="image" alt="BG" width="100%" />
        <div className="texter">
          <div className="innerText">
            <h1 className="homeHeading">
              {" "}
              Hello I'm <br /> Shivkumar M
            </h1>
            <p className="homeSubtext">
              A frontend web developer and web designer
            </p>
            <a href={Resume} download="Shivkumar M">
              <button className="homeBtn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

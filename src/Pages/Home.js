import React from "react"
import "../style.css"
import BgImage from "../Assets/Images/94.jpg"
const Home = () => {
  return (
    <div>
      <div className="imager" >
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
            <button className="homeBtn">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

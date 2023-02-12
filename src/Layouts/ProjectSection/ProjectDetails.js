import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { AiFillInfoCircle } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import userData from "../Data/ProjectData"
const ProjectDetails = () => {
  const [isClicked, setIsClicked] = useState(false)

  const { id } = useParams()
  const gPDetails = userData.find((d) => d.id == id)
  return (
    <div>
      <div className=" details container">
        <div className="hide1">
          <span className="aSpanner ">{gPDetails.pType}</span>
          <div className="flxr">
            <h1 className="pdTitle">{gPDetails.title}</h1>
            {isClicked ? (
              <span
                className="iconerr"
                onClick={() => setIsClicked(!isClicked)}
              >
                <MdCancel size={28} />
                Less Info
              </span>
            ) : (
              <span
                className="iconerr"
                onClick={() => setIsClicked(!isClicked)}
              >
                {" "}
                <AiFillInfoCircle size={28} />
                More Info
              </span>
            )}
          </div>
        </div>
        <div className="mImage">
          <img
            src={gPDetails.bgImg}
            className="mimg"
            alt="Banner Loading..... "
          />
        </div>
        <div className="mFlexer">
          <div className="mContent">
            <div className="hide2">
              <span className="aSpanner ">{gPDetails.pType}</span>
              <div className="flxr">
                <h1 className="pdTitle">{gPDetails.title}</h1>
                {isClicked ? (
                  <span
                    className="iconerr"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    <MdCancel size={28} />
                    Less Info
                  </span>
                ) : (
                  <span
                    className="iconerr"
                    onClick={() => setIsClicked(!isClicked)}
                  >
                    {" "}
                    <AiFillInfoCircle size={28} />
                    More Info
                  </span>
                )}
              </div>
            </div>
            <div className="btns">
              <Link className="bt" to={gPDetails.siteLink}>
                <button className="bt pbtn">View site</button>
              </Link>
              <Link className="bt" to={gPDetails.codeLink}>
                <button className="bt sbtn">View Code</button>
              </Link>
            </div>
            <h5>Project Overview</h5>
            <p>{gPDetails.overView}</p>
            <h5>Project Description</h5>
            <p>{gPDetails.desc}</p>
          </div>
          {isClicked && (
            <div className="sidebar container">
              {/* Array displayer */}
              <span className="aSpanner  ">technologies</span>
              <ul className="gapr lis">
                {gPDetails.technologies.map((t) => {
                  return <li className="listerr">{t}</li>
                })}
              </ul>
              {/* Array displayer */}

              <span className="aSpanner  ">IDE</span>
              <h6 className="gapr">{gPDetails.ide}</h6>
              <span className="aSpanner  ">API</span>
              <h6 className="gapr">{gPDetails.Api}</h6>
              <span className="aSpanner ">Projcet hoisted site</span>
              <h6 className="gapr">{gPDetails.hoisting}</h6>
              <span className="aSpanner ">Project Deployment site</span>
              <h6 className="gapr">{gPDetails.deployed}</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

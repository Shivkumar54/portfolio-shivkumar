import React, { useState } from "react"
import PData from "../Data/ProjectData"
import { Link } from "react-router-dom"
const Projects = () => {
  const [data, setData] = useState(PData)
  return (
    <div>
      <h2 className="tech">Projects & Accompishments</h2>
      <span className="subtech">
        Filter the project list based by clicking buttons below{" "}
      </span>
      <div className="pSection row">
        <div className="pCols col-12 mx-auto">
          <div className="row">
            {data.map(({ id, title, img }) => {
              return (
                <div className=" pContanier col-6 col-md-4 col-lg-3" key={id}>
                  <div className="pContent">
                    <div className="pImager">
                      <div className="ptitler">
                        <span className="ptitle">{title}</span>
                      </div>
                      <img src={img} alt="" className="pimgs" />
                    </div>
                    <Link className=" bttn" to={`/projects/${id}`}>
                      <button className=" bttn">View Project</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

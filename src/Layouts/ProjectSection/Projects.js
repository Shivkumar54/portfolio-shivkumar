import React, { useState } from "react"
import { Link } from "react-router-dom"
import Pdata from "../Data/ProjectData"
const Projects = () => {
  const [data, setData] = useState(Pdata)
  const filterItems = (clickedItem) => {
    const getFilteredItems = Pdata.filter((i) => {
      return i.pType === clickedItem
    })
    setData(getFilteredItems)
  }

  return (
    <div>
      <h2 className="tech">Projects & Accompishments</h2>
      <span className="subtech">
        Filter the project list based by clicking buttons below{" "}
      </span>
      <div className="pSection row">
        <div className="pCols col-12 mx-auto">
          <div className="row">
            <div className="btn-container">
              <button className="btnss " onClick={() => setData(Pdata)}>
                ALL
              </button>
              <button
                className="btnss"
                onClick={() => filterItems("Internship")}
              >
                INTERNSHIP
              </button>
              <button className="btnss" onClick={() => filterItems("Tutorial")}>
                TUTORIAL
              </button>
              <button className="btnss" onClick={() => filterItems("Self")}>
                SELF
              </button>
            </div>

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

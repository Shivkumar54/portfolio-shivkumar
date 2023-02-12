import React, { useState } from "react"
import Pdata from "../Layouts/Data/ProjectData"
import Projects from "../Layouts/ProjectSection/Projects"
import Technology from "../Layouts/ProjectSection/technology"

const ProjectAndSkills = () => {

  return (
    <div className="container">
      <Technology />
      <Projects data = {Pdata} />
    </div>
  )
}

export default ProjectAndSkills

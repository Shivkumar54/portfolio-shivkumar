import React, { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Pdata from "../Data/ProjectData"
import axios from "axios"
const ProjectDetails = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState([])
  const [datas, setData] = useState(Pdata)

  useEffect(() => {
    const getDataFromLS = async () => {
      const getData = await axios.get(`/${Pdata}${id}`)
      setDetail(getData)
      console.log(getData)
    }
    getDataFromLS()
  }, [datas])
  return (
    <div>
      <div className="d">
        <img src={detail.img} alt="" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default ProjectDetails

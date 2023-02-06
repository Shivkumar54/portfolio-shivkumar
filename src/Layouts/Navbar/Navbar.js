import React, { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { HiHome } from "react-icons/hi"
import { FaUserGraduate } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { MdFeedback } from "react-icons/md"
import "../../style.css"
const Navbar = () => {
  const [color, setColor] = useState(false)
  const addBgColor = () => {
    if (window.scrollY > 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")
  window.addEventListener("scroll", addBgColor)
  return (
    <div className="entirefile">
      <div className={color ? "navbarRoot header-bg" : "navbarRoot"}>
        <div className="logo">
          <h1 className="logoName">Portfolio</h1>
        </div>
        <div className="list">
          <ul className="listUl">
            <li className={splitLocation[1] === "" ? "active" : "linker"}>
              <Link className="linker" to="/">
                <HiHome className="iconer" size={20} />
                Home
              </Link>
            </li>
            <li className={splitLocation[1] === "about" ? "active" : "linker"}>
              {" "}
              <Link className="linker" to="/about">
                <FaUserGraduate className="iconer" size={20} />
                About
              </Link>
            </li>
            <li
              className={
                splitLocation[1] === "projectandskills" ? "active" : "linker"
              }
            >
              {" "}
              <Link className="linker" to="/projectandskills">
                <MdWork className="iconer" size={20} />
                Projects{" "}
              </Link>
            </li>
            <li
              className={splitLocation[1] === "feedback" ? "active" : "linker"}
            >
              {" "}
              <Link className="linker" to="/feedback">
                <MdFeedback className="iconer" size={20} />
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar

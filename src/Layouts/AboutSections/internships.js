import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import Img1 from "../../Assets/Images/88.jpg"
import Img2 from "../../Assets/Images/97.jpg"
const internships = () => {
  const list = [
    {
      id: 1,
      img: Img1,
      title: "Software Engineer",
      company: "Techciti Technologies",
      desc: `Learned web development technologies like HTML, HTML5, CSS, Bootstrap & Python. Developed a web application called "Tourism & Analysis". I was responsible for creating responsive web pages & Certified as a software engineer intern`,
      passed: "Jun 20 - Jul 20",
    },
    {
      id: 2,
      img: Img2,
      title: "Full stack web developer",
      company: "Shape AI",
      desc: `Learned full stack technologies in MERN stack. My responsibilities are to learn and develop web projects. Book my show clone using React JS, Task Manager using HTML, CSS, & JavaScript, Zomato landing page using HTML, CSS
`,
      passed: "Jun 21-Aug 21",
    },
  ]
  return (
    <div className="Internships ">
      <h3>Internships</h3>
      <div className="row">
        <div className="eduRoot col-12 mx-auto">
          <div className="edu row">
            {list.map(({ id, title, passed, company, desc, img }) => {
              return (
                <div
                  className="educationSection col-sm-12 col-md-6 col-lg-6"
                  key={id}
                >
                  <div className="iContent">
                    <div className="iImager">
                      <img src={img} alt="" className="iImg" />
                    </div>
                    <div className="itext">
                      <div className="iflexer">
                        <h5>{title}</h5>
                        <span className="time">
                          {" "}
                          <AiTwotoneCalendar size={20} /> {passed}
                        </span>
                      </div>
                      <h6>
                        <HiOutlineBuildingOffice2 size={20} /> {company}
                      </h6>
                      <p>{desc}</p>
                    </div>
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

export default internships

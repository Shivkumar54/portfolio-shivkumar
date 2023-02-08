import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import Img1 from "../../Assets/Images/80.jpg"
const cEmployer = () => {
  const list = [
    {
      id: 1,
      img: Img1,
      title: "Assiatant Sysytem Engineer ",
      company: "Tata Consultancy Services [TCS]",
      desc: `I got my first job in TCS. 
I have got allocated to a Sony Liv OTT platform where the technology used is React. 
I was in a maintenance team where my role was to fix the platform's minor bugs and look after the alignment of the items in given dimensions. 
Now I'm working on another project called HDFC enhancement where I used to develop newly required line items given by the customer end and the technology used is JavaScript.
Completed 1 year in this organisation`,
      passed: "Dec 2021 - Present",
    },
  ]
  return (
    <div className="cEmplyer ">
      <h3>Current Employer</h3>
      <div className="row">
        <div className="eduRoot col-12 mx-auto">
          <div className="edu row">
            {list.map(({ id, title, passed, company, desc, img }) => {
              return (
                <div
                  className="educationSection col-sm-12 col-md-12 col-lg-12"
                  key={id}
                >
                  <div className="iContent">
                    <div className="iImager cimg">
                      <img src={img} alt="" className="iImg " />
                    </div>
                    <div className="itext">
                      <div className="iflexer">
                        <h4>{title}</h4>
                        <span>
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

export default cEmployer

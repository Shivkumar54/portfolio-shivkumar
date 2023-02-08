import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
import img1 from "../../Assets/Images/30.jpg"
import img2 from "../../Assets/Images/45.jpg"
import img11 from "../../Assets/Images/11.jpg"
const Education = () => {
  const list = [
    {
      id: 1,
      img: img11,
      degree: "Bachelors in Engineering",
      stream: "CSE",
      passed: "2017-2021",
      spanText: "DEGREE",
    },
    {
      id: 2,
      img: img2,
      degree: "PUC",
      stream: "PCMB",
      passed: "2015-2017",
      spanText: "+2",
    },
    {
      id: 3,
      img: img1,
      degree: "SSLC",
      stream: "10th",
      passed: "2015",
      spanText: "School",
    },
  ]
  return (
    <div className="education ">
      <h3>Education Details</h3>
      <div className="row">
        <div className="eduRoot col-12 mx-auto">
          <div className="edu row">
            {list.map(({ id, degree, passed, spanText, stream, img }) => {
              return (
                <div
                  className="educationSection col-sm-12 col-md-4 col-lg-4"
                  key={id}
                >
                  <div className="eduContent">
                    <div className="eimger">
                      <img src={img} alt="" className="eimg" />
                    </div>
                    <div className="etext">
                      <span className="aSpanner">{spanText}</span>
                      <h5 className="degree">{degree}</h5>
                      <div className="eflexer">
                        <h6 className="flex">{stream}</h6>
                        <h6 className="flex">
                          <AiTwotoneCalendar size={15} /> {passed}
                        </h6>
                      </div>
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

export default Education

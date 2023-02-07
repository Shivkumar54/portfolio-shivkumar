import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
const Education = () => {
  const list = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/vector-cartoon-illustration-flat-style-man-suit-hold-degree-certificate-college-business-school-diploma-111369876.jpg",
      degree: "Bachelors Of Engineering",
      stream: "CSE",
      passed: "2017-2021",
      spanText: "DEGREE",
    },
    {
      id: 2,
      img: "https://c1.alamy.com/thumbs/t3pm9j/education-university-college-students-in-front-university-building-cartoon-vector-illustration-graphic-design-t3pm9j.jpg",
      degree: "PUC",
      stream: "PCMB",
      passed: "2015-2017",
      spanText: "+2",
    },
    {
      id: 3,
      img: "https://static.vecteezy.com/system/resources/thumbnails/006/132/947/small_2x/many-kids-having-fun-in-front-the-school-free-vector.jpg",
      degree: "SSLC",
      stream: "10th",
      passed: "2015",
      spanText: "School",
    },
  ]
  return (
    <div className="education container">
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
                        <h6 className="flex" >{stream}</h6>
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

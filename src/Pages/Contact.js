import React from "react"
import ContactImage from "../Assets/Images/06.jpg"
const Contact = () => {


  return (
    <div>
      <div>
        <div className="imager">
          <img
            src={ContactImage}
            className="image imager"
            alt="BG"
            width="100%"
          />
          {/* <div className="clicker">
            <span className="clickBtn"></span>
          </div> */}
          <div className="contacter">
            <h1 className="contactHeader">
              Please leave your valuable feedback{" "}
            </h1>
            <div className="form">
              <form action="">
                <input
                  className="inputer"
                  type="text"
                  placeholder="Name - John"
                />
                <br />
                <input
                  className="inputer"
                  type="text"
                  placeholder="Email - abc@gmail.com"
                />
                <br />
                <textarea
                  className="inputer"
                  name=""
                  id=""
                  cols="50"
                  rows="5"
                  placeholder="Leave your Comment or Feedback...."
                ></textarea>
                <br />
                <button className="homeBtn">Post Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

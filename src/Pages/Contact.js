import React, { useState } from "react"
import { Link } from "react-router-dom"
import {FaTelegramPlane} from "react-icons/fa"
import ContactImage from "../Assets/Images/88.jpg"
const Contact = () => {
  const [form, setForm] = useState(false)
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
          <div className="hanlder">
            <h1>Please leave your valuable feedback </h1>
            <span className="clickBtn" onClick={() => setForm(!form)}>
              Send a post <FaTelegramPlane size={20} />
            </span>
          </div>
          {form && (
            <div className="contacter">
              <h1>Feedbackform</h1>
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
                  <Link to="/" className="linkerr">
                    <p className="goback">Go to Home</p>
                  </Link>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact

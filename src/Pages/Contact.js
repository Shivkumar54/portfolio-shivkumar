import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaTelegramPlane } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import ContactImage from "../Assets/Images/88.jpg"
const Contact = () => {
  const [form, setForm] = useState(false)
  const api = "https://getform.io/f/78b52496-29bc-494c-9f23-40e39220b968"
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
              <IoClose size={30} onClick={() => setForm(!form)} />
              <h1>Feedback form</h1>
              <div className="form">
                <form action={api} method="POST">
                  <input
                    className="inputer"
                    type="text"
                    placeholder="Name - John"
                    name="name"
                  />
                  <br />
                  <input
                    className="inputer"
                    type="email"
                    placeholder="Email - abc@gmail.com"
                    name="email"
                  />
                  <br />
                  <textarea
                    className="inputer"
                    name="message"
                    id=""
                    cols="50"
                    rows="5"
                    placeholder="Leave your Comment or Feedback...."
                  ></textarea>
                  <br />
                  <button type="submit" className="homeBtn">
                    Post Now
                  </button>
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

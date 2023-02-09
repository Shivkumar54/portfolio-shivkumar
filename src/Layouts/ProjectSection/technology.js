import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoLogoReact } from "react-icons/io5"
import { SiJavascript } from "react-icons/si"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
import { FaBootstrap } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiAdobexd } from "react-icons/si"
import { IoLogoFigma } from "react-icons/io5"
import { IoLogoGithub } from "react-icons/io"

const technology = () => {
  const ExpList = [
    {
      id: 5,
      img: <IoLogoReact size={30} />,
      title: "ReactJS",
    },
    {
      id: 4,
      img: <SiJavascript size={30} />,
      title: "JavaScript",
    },
    {
      id: 1,
      img: <IoLogoHtml5 size={30} />,
      title: "HTML",
    },
    {
      id: 2,
      img: <IoLogoCss3 size={30} />,
      title: "CSS",
    },
    {
      id: 3,
      img: <FaBootstrap size={30} />,
      title: "Bootstrap",
    },
    {
      id: 6,
      img: <SiTailwindcss size={30} />,
      title: "Tailwind CSS",
    },
    {
      id: 7,
      img: <SiAdobexd size={30} />,
      title: "Adobe XD",
    },
    {
      id: 8,
      img: <IoLogoFigma size={30} />,
      title: "Figma",
    },
    {
      id: 9,
      img: <IoLogoGithub size={30} />,
      title: "GitHub",
    },
  ]

  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    infinite: true,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  }
  return (
          <div className="exp">
            <div className="tHeading">
              <h1 className="tech">Technologies</h1>
              <span className="subtech">Web development & web designing</span>
            </div>
            <Slider className="sliderr" {...settings}>
              {ExpList.map(({ id, img, title }) => (
                <div key={id} className="container rootLister">
                  <div className="tContent">
                    <h5 className="expText">
                      {img} {title}
                    </h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
  )
}

export default technology

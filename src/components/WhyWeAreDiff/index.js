import React from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"

// import classroom from "assets/images/icons/classroom-line.svg"
// import classroomFill from "assets/images/icons/classroom-fill.svg"
// import easy from "assets/images/icons/easy-line.svg"
// import easyFill from "assets/images/icons/easy-fill.svg"
// import free from "assets/images/icons/free-line.svg"
// import freeFill from "assets/images/icons/free-fill.svg"
// import student from "assets/images/icons/student-line.svg"
// import studentFill from "assets/images/icons/student-fill.svg"
// import classroomIcon from "assets/images/icons/classroom-icon.svg"
// import easyIcon from "assets/images/icons/easy-icon.svg"
// import freeIcon from "assets/images/icons/free-icon.svg"
// import studentIcon from "assets/images/icons/student-icon.svg"
// import freeWave from "assets/images/icons/free-Wave-line.svg"
// import freeWaveFill from "assets/images/icons/free-Wave-fill.svg"
// import easyWave from "assets/images/icons/easy-Wave-line.svg"
// import easyWaveFill from "assets/images/icons/easy-Wave-fill.svg"
// import studentWave from "assets/images/icons/student-Wave-line.svg"
// import studentWaveFill from "assets/images/icons/student-Wave-fill.svg"
// import classroomWave from "assets/images/icons/classroom-Wave-line.svg"
// import classroomWaveFill from "assets/images/icons/classroom-Wave-fill.svg"
// import slide1 from "assets/images/Slide-1.png"
// import slide2 from "assets/images/Slide-2.png"
// import slide3 from "assets/images/Slide-3.png"
// import slide4 from "assets/images/Slide-4.png"
// import slide5 from "assets/images/Slide-5.png"
// import slide6 from "assets/images/Slide-6.png"
// import slide7 from "assets/images/Slide-7.png"
// import slide8 from "assets/images/Slide-8.png"
// import slide9 from "assets/images/Slide-9.png"
// import slide10 from "assets/images/Slide-10.png"
// import slide11 from "assets/images/Slide-11.png"
// import slide12 from "assets/images/Slide-12.png"
const WhyWeAreDiff = ({ children }) => {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className="mfl-wearediff-section section">
        <div className="circle-blue size-75"></div>
        <div className="circle-green size-205"></div>
        <div className="container">
          <div className="row mfl-wearediff-row">
            <div className="mfl-wearediff-cols">
              <div className="title">A Different Kind of Math Fact Fluency Website</div>
              <div className="general-content">
                <p className="general-content-item">
                  MathFactLab is teacher-created, and we've taken the advice of the world's best researchers of
                  mathematics education to build a free website for online math fact fluency practice that is based on
                  reasoning strategies and sense-making.
                </p>
                <p className="general-content-item">
                  There are dozens of math facts programs on the market, some glossier than others, but they all
                  generally rely on the same ineffective method: rote memorization through drill.
                </p>
                <p className="general-content-item">
                  MathFactLab students are not asked to blindly memorize facts. Instead, by engaging with multiple
                  models - such as number lines, area models, bar diagrams, ten frames, dice, beads, coins, and clock
                  faces - our students enhance their number sense as they construct a deep understanding of the basic
                  math facts.
                </p>
              </div>
            </div>
            <div className="mfl-wearediff-cols">
              <Slider {...settings} className="feature-slider">
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide1} alt="fetureMain1" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-1.png" alt="fetureMain1" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide2} alt="fetureMain2" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-2.png" alt="fetureMain2" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide3} alt="fetureMain3" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-3.png" alt="fetureMain3" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide4} alt="fetureMain4" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-4.png" alt="fetureMain4" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide5} alt="fetureMain5" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-5.png" alt="fetureMain5" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide6} alt="fetureMain6" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-6.png" alt="fetureMain6" className="features-mainimage" />
                </div>

                <div className="mfl-Features-mainimage">
                  {/* <img src={slide7} alt="fetureMain7" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-7.png" alt="fetureMain7" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide8} alt="fetureMain8" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-8.png" alt="fetureMain8" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide9} alt="fetureMain9" className="features-mainimage" /> */}
                  <StaticImage src="../../assets/images/Slide-9.png" alt="fetureMain9" className="features-mainimage" />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide10} alt="fetureMain10" className="features-mainimage" /> */}
                  <StaticImage
                    src="../../assets/images/Slide-10.png"
                    alt="fetureMain10"
                    className="features-mainimage"
                  />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide11} alt="fetureMain11" className="features-mainimage" /> */}
                  <StaticImage
                    src="../../assets/images/Slide-11.png"
                    alt="fetureMain11"
                    className="features-mainimage"
                  />
                </div>
                <div className="mfl-Features-mainimage">
                  {/* <img src={slide12} alt="fetureMain12" className="features-mainimage" /> */}
                  <StaticImage
                    src="../../assets/images/Slide-12.png"
                    alt="12 examples of Online Math Facts Practice Strategies"
                    className="features-mainimage"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default WhyWeAreDiff

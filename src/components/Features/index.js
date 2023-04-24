import React, { useState } from "react"
// import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"

import feture1 from "assets/images/icons/feature-1.svg"
import feture2 from "assets/images/icons/feature-2.svg"
import feture3 from "assets/images/icons/feature-3.svg"
import feture4 from "assets/images/icons/feature-4.svg"
import fetureMain1 from "assets/images/fetureMain1.png"
// import fetureMain2 from "assets/images/fetureMain1.png"
// import fetureMain3 from "assets/images/fetureMain1.png"
// import fetureMain4 from "assets/images/fetureMain1.png"
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
// import classroom from "assets/images/icons/classroom-line.svg"
// import classroomFill from "assets/images/icons/classroom-fill.svg"
// import easy from "assets/images/icons/easy-line.svg"
// import easyFill from "assets/images/icons/easy-fill.svg"
// import free from "assets/images/icons/free-line.svg"
// import freeFill from "assets/images/icons/free-fill.svg"
// import student from "assets/images/icons/student-line.svg"
// import studentFill from "assets/images/icons/student-fill.svg"
import classroomIcon from "assets/images/icons/classroom-icon.svg"
import easyIcon from "assets/images/icons/easy-icon.svg"
import freeIcon from "assets/images/icons/free-icon.svg"
import studentIcon from "assets/images/icons/student-icon.svg"
import freeWave from "assets/images/icons/free-Wave-line.svg"
import freeWaveFill from "assets/images/icons/free-Wave-fill.svg"
import easyWave from "assets/images/icons/easy-Wave-line.svg"
import easyWaveFill from "assets/images/icons/easy-Wave-fill.svg"
import studentWave from "assets/images/icons/student-Wave-line.svg"
import studentWaveFill from "assets/images/icons/student-Wave-fill.svg"
import classroomWave from "assets/images/icons/classroom-Wave-line.svg"
import classroomWaveFill from "assets/images/icons/classroom-Wave-fill.svg"

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("")

  const featureImageList = {
    feature1: fetureMain1,
    feature2: fetureMain1,
    feature3: fetureMain1,
    feature4: fetureMain1,
  }

  const handleActiveFeature = feature => {
    setActiveFeature(feature)
  }
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
      <section className="mfl-Features-section">
        <div className="circle-blue size-58"></div>
        <div className="circle-green size-108"></div>
        <div className="container">
          <div className="row mfl-Features-row desktop-wrapper">
            <div className="mfl-Features-cols">
              <div className="title text-white">You’ll Love MathFactLab</div>
              <div className="mfl-Features-wrap">
                <div
                  className={activeFeature === "feature1" ? "mfl-Features-item selected" : "mfl-Features-item "}
                  onClick={() => handleActiveFeature("feature1")}
                >
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture1})no-repeat center / contain`,
                            WebkitMask: `url(${feture1})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      MathFactLab reinforces your good classroom teaching with individualized, online math facts
                      practice, developing a wide range of math concepts and skills.
                    </div>
                  </div>
                </div>
                <div
                  className={activeFeature === "feature2" ? "mfl-Features-item selected" : "mfl-Features-item"}
                  onClick={() => handleActiveFeature("feature2")}
                >
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture2})no-repeat center / contain`,
                            WebkitMask: `url(${feture2})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      MathFactLab pre-assesses students and places them appropriately within the math fact fluency
                      program.
                    </div>
                  </div>
                </div>
                <div
                  className={activeFeature === "feature3" ? "mfl-Features-item selected" : "mfl-Features-item"}
                  onClick={() => handleActiveFeature("feature3")}
                >
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture3})no-repeat center / contain`,
                            WebkitMask: `url(${feture3})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      Easily monitor student progress at all grade levels with our intuitive teacher tools. Quickly see
                      who needs extra practice or assistance.
                    </div>
                  </div>
                </div>
                <div
                  className={activeFeature === "feature4" ? "mfl-Features-item selected" : "mfl-Features-item"}
                  onClick={() => handleActiveFeature("feature4")}
                >
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture4})no-repeat center / contain`,
                            WebkitMask: `url(${feture4})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      Your students will take pride in their growth as they progress through the program.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mfl-Features-cols">
              <div className="mfl-wearediff-box-wrapper">
                <div className="mfl-wearediff-box-item">
                  <div className="mfl-wearediff-box-inner">
                    <div className="mfl-wearediff-box-lines">
                      <img src={freeWave} alt="freeWave" className="box-line" />
                      <img src={freeWaveFill} alt="freeWaveFill" className="box-line hover" />
                    </div>
                    <div className="mfl-wearediff-box-image">
                      <img src={freeIcon} alt="freeIcon" className="mfl-wearediff-box-icon" />
                    </div>
                    <div className="mfl-wearediff-box-content">
                      It's free. No trial subscriptions. No credit cards required. No ads. Just good math.
                    </div>
                    <div className="mfl-wearediff-icon-wrap">
                      {/* <img className="mfl-wearediff-icon" src={free} alt="free" /> */}
                      <StaticImage
                        src="../../assets/images/icons/free-line.svg"
                        alt="free"
                        className="mfl-wearediff-icon"
                      />
                      {/* <img className="mfl-wearediff-icon hover" src={freeFill} alt="freeFill" /> */}
                      <StaticImage
                        src="../../assets/images/icons/free-fill.svg"
                        alt="freeFill"
                        className="mfl-wearediff-icon hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mfl-wearediff-box-item">
                  <div className="mfl-wearediff-box-inner">
                    <div className="mfl-wearediff-box-lines">
                      <img src={easyWave} className="box-line" alt="easyWave" />
                      <img src={easyWaveFill} className="box-line hover" alt="easyWaveFill" />
                    </div>
                    <div className="mfl-wearediff-box-image">
                      <img src={easyIcon} className="mfl-wearediff-box-icon" alt="easyIcon" />
                    </div>
                    <div className="mfl-wearediff-box-content">
                      It's easy. Setting up your class is simple and straightforward.
                    </div>
                    <div className="mfl-wearediff-icon-wrap">
                      {/* <img className="mfl-wearediff-icon" src={easy} alt="easy" /> */}
                      <StaticImage
                        src="../../assets/images/icons/easy-line.svg"
                        alt="easy"
                        className="mfl-wearediff-icon"
                      />
                      {/* <img className="mfl-wearediff-icon hover" src={easyFill} alt="easyFill" /> */}
                      <StaticImage
                        src="../../assets/images/icons/easy-fill.svg"
                        alt="easyFill"
                        className="mfl-wearediff-icon hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mfl-wearediff-box-item">
                  <div className="mfl-wearediff-box-inner">
                    <div className="mfl-wearediff-box-lines">
                      <img src={studentWave} className="box-line" alt="studentWave" />
                      <img src={studentWaveFill} className="box-line hover" alt="studentWaveFill" />
                    </div>
                    <div className="mfl-wearediff-box-image">
                      <img src={studentIcon} className="mfl-wearediff-box-icon" alt="studentIcon" />
                    </div>
                    <div className="mfl-wearediff-box-content">
                      Make accommodations to meet individual student needs.
                    </div>
                    <div className="mfl-wearediff-icon-wrap">
                      {/* <img className="mfl-wearediff-icon" src={student} alt="student" /> */}
                      <StaticImage
                        src="../../assets/images/icons/student-line.svg"
                        alt="student"
                        className="mfl-wearediff-icon"
                      />
                      {/* <img className="mfl-wearediff-icon hover" src={studentFill} alt="studentFill" /> */}
                      <StaticImage
                        src="../../assets/images/icons/student-fill.svg"
                        alt="studentFill"
                        className="mfl-wearediff-icon hover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mfl-wearediff-box-item">
                  <div className="mfl-wearediff-box-inner">
                    <div className="mfl-wearediff-box-lines">
                      <img src={classroomWave} className="box-line" alt="classroomWave" />
                      <img src={classroomWaveFill} className="box-line hover" alt="classroomWaveFill" />
                    </div>
                    <div className="mfl-wearediff-box-image">
                      <img src={classroomIcon} className="mfl-wearediff-box-icon" alt="classroomIcon" />
                    </div>
                    <div className="mfl-wearediff-box-content">
                      Easily import your class lists from Google Classroom with a click.
                    </div>
                    <div className="mfl-wearediff-icon-wrap">
                      {/* <img className="mfl-wearediff-icon" src={classroom} alt="classroom" /> */}
                      <StaticImage
                        src="../../assets/images/icons/classroom-line.svg"
                        alt="classroom"
                        className="mfl-wearediff-icon"
                      />
                      {/* <img className="mfl-wearediff-icon hover" src={classroomFill} alt="classroomFill" /> */}
                      <StaticImage
                        src="../../assets/images/icons/classroom-fill.svg"
                        alt="classroomFill"
                        className="mfl-wearediff-icon hover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mfl-Features-row mobile-wrapper">
            <div className="mfl-Features-cols">
              <div className="title text-white">You’ll Love MathFactLab</div>
              <div className="mfl-Features-wrap">
                <div style={{ margin: "36px 0px" }}>
                  <div className="mfl-Features-cols">
                    <div className="mfl-wearediff-box-wrapper">
                      <div className="mfl-wearediff-box-item">
                        <div className="mfl-wearediff-box-inner">
                          <div className="mfl-wearediff-box-lines">
                            <img src={freeWave} alt="freeWave" className="box-line" />
                            <img src={freeWaveFill} alt="freeWaveFill" className="box-line hover" />
                          </div>
                          <div className="mfl-wearediff-box-image">
                            <img src={freeIcon} alt="freeIcon" className="mfl-wearediff-box-icon" />
                          </div>
                          <div className="mfl-wearediff-box-content">
                            It's free. No trial subscriptions. No credit cards required. No ads. Just good math.
                          </div>
                          <div className="mfl-wearediff-icon-wrap">
                            {/* <img className="mfl-wearediff-icon" src={free} alt="free" /> */}
                            <StaticImage
                              src="../../assets/images/icons/free-line.svg"
                              alt="free"
                              className="mfl-wearediff-icon"
                            />
                            {/* <img className="mfl-wearediff-icon hover" src={freeFill} alt="freeFill" /> */}
                            <StaticImage
                              src="../../assets/images/icons/free-fill.svg"
                              alt="freeFill"
                              className="mfl-wearediff-icon hover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mfl-wearediff-box-item">
                        <div className="mfl-wearediff-box-inner">
                          <div className="mfl-wearediff-box-lines">
                            <img src={easyWave} className="box-line" alt="easyWave" />
                            <img src={easyWaveFill} className="box-line hover" alt="easyWaveFill" />
                          </div>
                          <div className="mfl-wearediff-box-image">
                            <img src={easyIcon} className="mfl-wearediff-box-icon" alt="easyIcon" />
                          </div>
                          <div className="mfl-wearediff-box-content">
                            It's easy. Setting up your class is simple and straightforward.
                          </div>
                          <div className="mfl-wearediff-icon-wrap">
                            {/* <img className="mfl-wearediff-icon" src={easy} alt="easy" /> */}
                            <StaticImage
                              src="../../assets/images/icons/easy-line.svg"
                              alt="easy"
                              className="mfl-wearediff-icon"
                            />
                            {/* <img className="mfl-wearediff-icon hover" src={easyFill} alt="easyFill" /> */}
                            <StaticImage
                              src="../../assets/images/icons/easy-fill.svg"
                              alt="easyFill"
                              className="mfl-wearediff-icon hover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mfl-wearediff-box-item">
                        <div className="mfl-wearediff-box-inner">
                          <div className="mfl-wearediff-box-lines">
                            <img src={studentWave} className="box-line" alt="studentWave" />
                            <img src={studentWaveFill} className="box-line hover" alt="studentWaveFill" />
                          </div>
                          <div className="mfl-wearediff-box-image">
                            <img src={studentIcon} className="mfl-wearediff-box-icon" alt="studentIcon" />
                          </div>
                          <div className="mfl-wearediff-box-content">
                            Make accommodations to meet individual student needs.
                          </div>
                          <div className="mfl-wearediff-icon-wrap">
                            {/* <img className="mfl-wearediff-icon" src={student} alt="student" /> */}
                            <StaticImage
                              src="../../assets/images/icons/student-line.svg"
                              alt="student"
                              className="mfl-wearediff-icon"
                            />
                            {/* <img className="mfl-wearediff-icon hover" src={studentFill} alt="studentFill" /> */}
                            <StaticImage
                              src="../../assets/images/icons/student-fill.svg"
                              alt="studentFill"
                              className="mfl-wearediff-icon hover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mfl-wearediff-box-item">
                        <div className="mfl-wearediff-box-inner">
                          <div className="mfl-wearediff-box-lines">
                            <img src={classroomWave} className="box-line" alt="classroomWave" />
                            <img src={classroomWaveFill} className="box-line hover" alt="classroomWaveFill" />
                          </div>
                          <div className="mfl-wearediff-box-image">
                            <img src={classroomIcon} className="mfl-wearediff-box-icon" alt="classroomIcon" />
                          </div>
                          <div className="mfl-wearediff-box-content">
                            Easily import your class lists from Google Classroom with a click.
                          </div>
                          <div className="mfl-wearediff-icon-wrap">
                            {/* <img className="mfl-wearediff-icon" src={classroom} alt="classroom" /> */}
                            <StaticImage
                              src="../../assets/images/icons/classroom-line.svg"
                              alt="classroom"
                              className="mfl-wearediff-icon"
                            />
                            {/* <img className="mfl-wearediff-icon hover" src={classroomFill} alt="classroomFill" /> */}
                            <StaticImage
                              src="../../assets/images/icons/classroom-fill.svg"
                              alt="classroomFill"
                              className="mfl-wearediff-icon hover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mfl-Features-item">
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture1})no-repeat center / contain`,
                            WebkitMask: `url(${feture1})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      MathFactLab reinforces your good classroom teaching with individualized, online math facts
                      practice.
                    </div>
                  </div>
                </div>
                {/* mfl-Features-item selected */}
                <div className="mfl-Features-item ">
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture2})no-repeat center / contain`,
                            WebkitMask: `url(${feture2})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      MathFactLab pre-assesses students and places them appropriately within the math fact fluency
                      program.
                    </div>
                  </div>
                </div>
                <div className="mfl-Features-item">
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture3})no-repeat center / contain`,
                            WebkitMask: `url(${feture3})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      Easily monitor student progress with our intuitive teacher tools.
                    </div>
                  </div>
                </div>
                <div className="mfl-Features-item">
                  <div className="mfl-Features-inner">
                    <div className="mfl-Features-image">
                      <div className="mfl-Features-img">
                        <div
                          className="mask-Features"
                          style={{
                            mask: `url(${feture4})no-repeat center / contain`,
                            WebkitMask: `url(${feture4})no-repeat center / contain`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="mfl-Features-content">
                      Your students will see their progress and take pride in it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features

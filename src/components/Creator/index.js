import React from "react"
import profile from "assets/images/profile.png"
import profileBack from "assets/images/profile-bg.png"

const Creator = () => {
  return (
    <>
      <section className="mfl-creator-section section">
        <div className="container">
          <div className="mfl-creator-row row">
            <div className="mfl-creator-cols">
              <div className="mfl-profile-wrapper">
                <div className="mfl-profile-ring">
                  <div className="circle">
                    <div className="circle-blue size-110"></div>
                    <div className="circle-green size-62"></div>
                  </div>
                </div>
                <div className="mfl-profile-back">
                  <img src={profileBack} alt="profileBack" className="mfl-pfback-img" />
                </div>
                <div className="mfl-profile-image">
                  <img src={profile} alt="profile" className="mfl-profile-img" />
                </div>
              </div>
            </div>
            <div className="mfl-creator-cols">
              <div className="title">Creator</div>
              <div className="mfl-creator-content">
                <p className="mfl-creator-item">
                  Designed by Vermont fifth-grade math teacher Mike Kenny, MathFactLab is based on the idea that pattern
                  recognition makes math easier to learn.
                </p>
                <p className="mfl-creator-item">
                  Each year, Mike found that many of his students came to fifth grade lacking basic math fact fluency.
                  Frustrated that the math fact materials commercially available did not match what research
                  recommended, he gradually came to the conclusion that he ought to try creating his own math fact
                  program. MathFactLab is the result of several years of effort, much research, a great heap of advice,
                  many drafts, and lots of trial and error in Mike’s classroom and beyond.
                </p>
                <p className="mfl-creator-item">
                  Mike has degrees from the University of Notre Dame, the College of William and Mary, and the Vermont
                  Mathematics Initiative (at UVM). He offers <b>free trainings for teachers </b>to help them get the
                  most out of MathFactLab and is also happy to hear your questions, feedback, and/or suggestions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Creator

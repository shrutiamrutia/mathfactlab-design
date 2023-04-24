import React from "react"
import arrowRight from "assets/images/icons/arrow-right.svg"

const Accordion = () => {
  return (
    <>
      <section className="mfl-accordions-section section">
        <div className="container">
          <div className="row mfl-accordions-row">
            <div className="col-xs-12">
              <h3 className="title">Frequently Asked Questions</h3>
              <div className="mfl-accordions-wrapper">
                <div className="mfl-accordions-item active">
                  <a href="#" className="mfl-accordions-link" title="MathFactLab q1">
                    <span className="mfl-accordions-icon"></span>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-answer-item">
                      Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat
                      malesuada. Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel
                      pretium malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula
                      dictum, dapibus lectus non, commodo enim.
                    </p>
                  </div>
                </div>
                <div className="mfl-accordions-item">
                  <a href="#" className="mfl-accordions-link" title="MathFactLab q2">
                    <span className="mfl-accordions-icon"></span>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-answer-item">
                      Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat
                      malesuada. Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel
                      pretium malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula
                      dictum, dapibus lectus non, commodo enim.
                    </p>
                  </div>
                </div>
                <div className="mfl-accordions-item">
                  <a href="#" className="mfl-accordions-link" title="MathFactLab q3">
                    <span className="mfl-accordions-icon"></span>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-answer-item">
                      Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat
                      malesuada. Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel
                      pretium malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula
                      dictum, dapibus lectus non, commodo enim.
                    </p>
                  </div>
                </div>
                <div className="mfl-accordions-item active">
                  <a href="#" className="mfl-accordions-link" title="MathFactLab q4">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-answer-item">
                      Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat
                      malesuada. Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel
                      pretium malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula
                      dictum, dapibus lectus non, commodo enim.
                    </p>
                    <p className="mfl-bullet-item">
                      The many small steps that the program is divided into allows for ample opportunity for students to
                      recognize their growth and to feel proud of it.
                    </p>
                    <p className="mfl-bullet-item">The addition/subtraction consists of ten levels</p>
                    <ul className="mfl-bullet-list">
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                      <li className="mfl-bullet-list-item">Level A: One more than / One less than</li>
                    </ul>
                    <p className="mfl-bullet-item">The multiplication/division program consists of eleven levels:</p>
                    <ul className="mfl-bullet-list">
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                      <li className="mfl-bullet-list-item">Level A: Twos</li>
                    </ul>
                    <div className="mfl-list-note">
                      Note: While students are introduced to a new nine fact at each level (for example, 4 x 9 at Level
                      F), mastery of most nine facts is not expected until Level J.{" "}
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

export default Accordion

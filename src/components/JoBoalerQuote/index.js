import React, { useState, useEffect } from "react"
import JoBoalerImage from "../../assets/images/Jo-boaler.png"
import VectorPng from "../../assets/images/Vector.png"
import JoBoalerPopupImage from "../../assets/images/Jo-boaler-2.png"

import Vector from "../../assets/images/Vector.svg"
import youCube from "../../assets/images/youcubed_logo.svg"

const JOBoalerQuote = ({ children }) => {
  const [isShowJoeBoalerQuote, setIsShowJoeBoalerQuote] = useState(localStorage.getItem("is_show_quote") !== "false")
  const [isLoadJoeBoalerQuote, setIsLoadJoeBoalerQuote] = useState(false)
  const handleCloseJoBoalerPopup = () => {
    setIsShowJoeBoalerQuote(false)
    localStorage.setItem("is_show_quote", false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoadJoeBoalerQuote(true)
    }, 3000)
  }, [])
  return (
    <>
      <section className="mfl-OurEmphasis-section">
        <div className="container">
          <div className="job-boaler-quote-all-content-alignment">
            <div className="grid quote-icon">
              <div className="grid-items">
                <div className="image-style">
                  <img src={JoBoalerImage} alt="JoBoalerImage" />
                </div>
              </div>
              <div className="grid-items">
                <div className="child-text-style">
                  I looked at your new site and I love it. A really great use of visuals and important mathematical
                  strategies. I will keep it in mind when people ask me for good sites.
                </div>
              </div>
            </div>
          </div>
          <div className="child-content-grid">
            <div className="child-content-grid-items"></div>
            <div className="child-content-grid-items">
              <div className="left-side-content-alignment">
                <div className="vector-alignment">
                  <img src={VectorPng} alt="Vector" />
                  <div className="triangle"></div>
                </div>
                <div className="heading-text-style">Jo Boaler</div>
                <div className="sub-text-style">
                  Professor of Education (Mathematics), Stanford Graduate School of Education
                </div>
                <div className="you-code-text">
                  Co-founder of <img className="you-code-img" src={youCube} alt="youCube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoadJoeBoalerQuote && isShowJoeBoalerQuote && (
        <div className="modal-back-drop">
          <div className="modal-wrapper">
            <div className="mfl-OurEmphasis-section">
              <div className="container">
                <div className="job-boaler-quote-all-content-alignment modal-job-boaler">
                  <div className="grid popup-quote-icon">
                    <span className="close-text" onClick={() => handleCloseJoBoalerPopup()}>
                      X Close
                    </span>
                    <div className="grid-items">
                      <div className="image-style no-bg">
                        <img src={JoBoalerImage} alt="JoBoalerImage" />
                      </div>
                    </div>
                    <div className="grid-items">
                      <div className="child-text-style">
                        I looked at your new site and I love it. A really great use of visuals and important
                        mathematical strategies. I will keep it in mind when people ask me for good sites.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="child-content-grid">
                  <div className="child-content-grid-items"></div>
                  <div className="child-content-grid-items">
                    <div className="left-side-content-alignment">
                      <div className="vector-alignment">
                        <img src={VectorPng} alt="Vector" />
                        <div className="triangle"></div>
                      </div>
                      <div className="heading-text-style">Jo Boaler</div>
                      <div className="sub-text-style">
                        Professor of Education (Mathematics), Stanford Graduate School of Education
                      </div>
                      <div className="you-code-text">
                        Co-founder of <img className="you-code-img" src={youCube} alt="youCube" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default JOBoalerQuote

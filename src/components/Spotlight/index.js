import React from "react"
// import spotlightAvatar from "assets/images/spotlight-mobile-avatar.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Spotlight = ({ children }) => {
  return (
    <>
      <section className="mfl-spotlight-section section">
        <div className="circle top">
          <span className="circle-green size-65"></span>
          <span className="circle-blue size-30"></span>
        </div>
        <div className="circle bottom">
          <span className="circle-green size-90"></span>
          <span className="circle-blue size-38"></span>
        </div>
        <div className="container">
          <div className="spotlight-content-wrapper">
            <div className="spotlight-content">
              <h1 className="spotlight-title">Help your students master the basic math facts</h1>
              <p className="spotlight-subtitle">A totally-free, strategy-based approach to math fact fluency</p>
              <div className="button-wrap">
                <Link to="https://app.mathfactlab.com/teacher/signup" title="Student Login" rel="noreferrer">
                  <button
                    className="btn btn-primary lg"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Coming soon button",
                        action: "Click",
                        label: "Clicked on coming soon",
                      })
                    }}
                  >
                    Sign up for free
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="spotlight-mobile-image">
            {/* <img src={spotlightAvatar} alt="spotlightAvatar" className="spotlight-avatar" loading="eager" /> */}
            <StaticImage
              src="../../assets/images/spotlight-mobile-avatar.svg"
              alt="Girl practicing math facts strategies"
              className="spotlight-avatar"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Spotlight

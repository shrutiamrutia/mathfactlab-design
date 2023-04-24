import React from "react"
import teacher from "assets/images/teacher.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"

const JoinusToday = () => {
  return (
    <>
      <div className="mfl-joinustoday-section">
        <div className="circle-blue size-52"></div>
        <div className="circle-green size-108"></div>
        <div className="mfl-joinustoday-content">
          <div className="mfl-joinustoday-title">Join Us Today</div>
          <div className="mfl-joinustoday-text">
            Help your students master their math facts with this strategy-based approach.
          </div>
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
        <div className="mfl-joinustoday-image">
          <img src={teacher} alt="Math Fact Fluency Teacher" className="joinustoday-image" />
        </div>
      </div>
    </>
  )
}

export default JoinusToday

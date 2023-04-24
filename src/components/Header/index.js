import React, { useEffect, useState, useRef, useCallback } from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import logo from "assets/images/logo.svg"
import facebook from "assets/images/icons/facebook.svg"
import twitter from "assets/images/icons/twitter.svg"
import instagram from "assets/images/icons/instagram.svg"
import useOnClickOutside from "components/Backdrop"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Header = props => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowDropdown, setIsShowDropdown] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleToggleMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu)
  }
  const ref = useRef()
  useOnClickOutside(ref, () => setIsShowDropdown(false))
  const pageUrl = typeof window !== "undefined" ? window.location.pathname : ""

  useEffect(() => {
    trackCustomEvent({
      category: "Navigation Bar",
      action: "Navigation",
      label: `Visit page ${pageUrl}`,
    })
  }, [pageUrl]) //disable-eslint-line
  const handleScroll = useCallback(event => {
    let scrollTop = window.scrollY

    setScrollPosition(scrollTop) //1,2,...100,...200...etc (in px)
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [handleScroll]) //disable-eslint-line

  return (
    <>
      <header
        className={
          isShowMobileMenu
            ? "mfl-header mobile-menu-open"
            : scrollPosition > 0
            ? "mfl-header header-fixed"
            : "mfl-header "
        }
      >
        <div className="container">
          <div className="mfl-main-header">
            <div className="mfl-logo">
              <Link to="/" title="MathFactLab Logo" rel="canonical">
                <img src={logo} alt="header-logo" className="header-logo"></img>
                {/* <StaticImage src="../../assets/images/logo.svg" alt="header-logo" className="header-logo" /> */}
              </Link>
            </div>
            <div className="mfl-header-menu">
              <div className="mfl-links-wrapper">
                <Link className="mfl-header-text" to="/" title="MathFactLab  - Mastering Math Facts" rel="canonical">
                  Home
                </Link>
                <Link className="mfl-header-text" to="/classroom/" title="MathFactLab Classroom" rel="canonical">
                  Classroom
                </Link>
                <Link className="mfl-header-text" to="/math-facts-journal/" title="MathFactLab Blog" rel="canonical">
                  Blog
                </Link>
                <Link className="mfl-header-text" to="/about-us/" title="MathFactLab About Us" rel="canonical">
                  About Us
                </Link>
                <Link className="mfl-header-text" to="/price/" title="MathFactLab Price" rel="canonical">
                  Price
                </Link>

                <Link className="mfl-header-text" to="/faqs/" title="MathFactLab FAQs" rel="canonical">
                  FAQs{" "}
                </Link>
                <Link className="mfl-header-text" to="/contact-us/" title="MathFactLab Contact Us" rel="canonical">
                  Contact Us
                </Link>
                {/* <Link className="mfl-header-text" to="/sitemap/" title="MathFactLab Sitemap" rel="canonical">
                  Sitemap
                </Link> */}
                <Link
                  to="https://app.mathfactlab.com/teacher/login"
                  className="mfl-header-text d-none"
                  title="MathFactLab Teacher Login"
                  rel="noreferrer"
                >
                  Teacher/Parent Login
                </Link>
                <Link
                  to="https://app.mathfactlab.com/student/login"
                  className="mfl-header-text d-none"
                  title=" MathFactLab Teacher Login "
                  rel="noreferrer"
                >
                  Student Login
                </Link>
                <div className="mfl-social-wrapper">
                  <div className="mfl-social-item facebook">
                    <a
                      href="https://www.facebook.com/Math-Fact-Lab-109909925142356/"
                      title="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facebook} alt="facebook" className="icon-facebook" />
                    </a>
                  </div>
                  <div className="mfl-social-item twitter">
                    <a href="https://twitter.com/mathfactlab" title="twitter" target="_blank" rel="noreferrer">
                      <img src={twitter} alt="twitter" className="icon-twitter" />
                    </a>
                  </div>
                  <div className="mfl-social-item instagram">
                    <a href="https://www.instagram.com/mathfactlab/" title="instagram" target="_blank" rel="noreferrer">
                      <img src={instagram} alt="instagram" className="icon-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mfl-myaccount-wrapper">
                {/* <div className="mfl-login-button">
                  <img className="mfl-login-image" alt="login" src={login}></img>
                  <div className="mfl-login-text">Login</div>
                </div> */}
                <div className={`dropdown ${isShowDropdown ? "show-dropdown" : ""}`} ref={ref}>
                  <button
                    className="btn btn-primary"
                    onClick={e => {
                      e.preventDefault()
                      trackCustomEvent({
                        category: "Coming soon button",
                        action: "Click",
                        label: "Clicked on coming soon",
                      })
                      setIsShowDropdown(!isShowDropdown)
                    }}
                  >
                    Login
                  </button>
                  <div className="dropdown-content">
                    <div className="dropdown-content-wrapper">
                      <div className="btn-wrapper">
                        <Link to="https://app.mathfactlab.com/teacher/login" title="Teacher Login" rel="noreferrer">
                          <button className="btn-teacher">Teacher/Parent </button>
                        </Link>
                        <Link to="https://app.mathfactlab.com/student/login" title="Student Login" rel="noreferrer">
                          <button className="btn-student">Student</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mob-btn-wrapper">
                <button className="c-hamburger c-hamburger--htx" onClick={() => handleToggleMobileMenu()}>
                  <span>toggle menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

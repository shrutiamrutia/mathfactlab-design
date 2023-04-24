import React from "react"
import logoWhite from "assets/images/logo-white.svg"
import facebook from "assets/images/icons/facebook.svg"
import twitter from "assets/images/icons/twitter.svg"
import instagram from "assets/images/icons/instagram.svg"

import JoinusToday from "components/JoinusToday"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className="mfl-footer-section section">
      <div className="container">
        <JoinusToday />

        <div className="mfl-footer-wrapper">
          <div className="mfl-footer-logo">
            <img src={logoWhite} alt="logoWhite" />
          </div>
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
          <div className="mfl-footer-links">
            <Link className="mfl-foo-link" to="/" title="MathFactLab  - Mastering Math Facts" rel="canonical">
              Home
            </Link>
            <Link className="mfl-foo-link" to="/classroom/" title="MathFactLab Classroom" rel="canonical">
              Classroom
            </Link>
            <Link className="mfl-foo-link" to="/about-us/" title="MathFactLab About Us" rel="canonical">
              About Us
            </Link>
            <Link className="mfl-foo-link" to="/price/" title="MathFactLab Price" rel="canonical">
              Price
            </Link>
            <Link className="mfl-foo-link" to="/faqs/" title="MathFactLab FAQs" rel="canonical">
              FAQs{" "}
            </Link>
            <Link className="mfl-foo-link" to="/contact-us/" title="MathFactLab Contact Us" rel="canonical">
              Contact Us
            </Link>
            <Link className="mfl-foo-link" to="/sitemap/" title="MathFactLab Sitemap" rel="canonical">
              Sitemap
            </Link>
            <Link className="mfl-foo-link" to="/math-facts-journal/" title="MathFactLab Sitemap" rel="canonical">
              Blog
            </Link>
          </div>
        </div>
        <div className="mfl-copyright-wrapper">
          <div className="mfl-copyright-left">2022 © Oakledge Mathematics Consulting</div>
          <div className="mfl-copyright-right">
            <div className="mfl-copyright-link-wrapper">
              <Link
                className="mfl-copyright-link"
                to="/privacy-policy/"
                title="MathFactLab Privacy Policy"
                rel="canonical"
              >
                Privacy Policy
              </Link>

              <Link
                className="mfl-copyright-link"
                to="/terms-of-service/"
                title="MathFactLab Terms of Service"
                rel="canonical"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

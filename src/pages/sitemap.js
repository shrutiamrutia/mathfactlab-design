import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
import ClassroomInner from "assets/images/banners/classroom-inner.svg"
// import SEO from "components/Seo"
import { Link } from "gatsby"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const SiteMap = () => {
  return (
    // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
    <Layout>
      <SEO
        title="Visit Sitemap Page | MathFactLab"
        description="Visit MathFactLab sitemap page to find all links and web pages available on the website."
        keywords={[`mathfactlab`, `pages`, `sitemap`, `education`]}
        lang="en-us"
        robots="index, follow"
        locales={["en-us"]}
      />

      <section className="mfl-spotlightInner-section section-background-2 section classroom-spotlight">
        <div className="circle top">
          <span className="circle-green size-65"></span>
        </div>
        <div className="circle bottom">
          <span className="circle-green size-38"></span>
          <span className="circle-blue size-90"></span>
        </div>
        <div className="container">
          <div className="spotlightInner-content-wrapper">
            <div className="spotlightInner-content">
              <h1 className="spotlightInner-title">Sitemap</h1>
            </div>
            <div className="spotlightInner-image">
              <img src={ClassroomInner} alt="ClassroomInner" className="spotlightInner-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="mfl-accordions-section section">
        <div className="container">
          <div className="row mfl-accordions-row">
            <div className="col-xs-12">
              <div className="content-20 bold-text">Pages</div>
              <div className="mfl-accordions-wrapper ">
                <div className={`mfl-accordions-item no-boarder`}>
                  <p className="mfl-bullet-item">
                    <Link className="mfl-foo-link" to="/" title="MathFactLab  - Mastering Math Facts" rel="canonical">
                      Home
                    </Link>
                  </p>

                  <p className="mfl-bullet-item">
                    <Link
                      className="mfl-foo-link"
                      to="/classroom/"
                      title="MathFactLab Sitemap Classroom"
                      rel="canonical"
                    >
                      Classroom
                    </Link>
                  </p>
                  <p className="mfl-bullet-item">
                    <Link
                      className="mfl-foo-link"
                      to="/math-facts-journal/"
                      title="MathFactLab Sitemap Blog"
                      rel="canonical"
                    >
                      Blog
                    </Link>
                  </p>
                  <p className="mfl-bullet-item">
                    <Link className="mfl-foo-link" to="/about-us/" title="MathFactLab Sitemap About Us" rel="canonical">
                      About Us
                    </Link>
                  </p>
                  <p className="mfl-bullet-item">
                    <Link className="mfl-foo-link" to="/faqs/" title="MathFactLab Sitemap FAQs" rel="canonical">
                      FAQs{" "}
                    </Link>
                  </p>
                  <p className="mfl-bullet-item">
                    <Link
                      className="mfl-foo-link"
                      to="/contact-us/"
                      title="MathFactLab Sitemap Contact Us"
                      rel="canonical"
                    >
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    // </Suspense>
  )
}

export default SiteMap

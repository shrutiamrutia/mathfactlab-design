import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
// import Contact from "components/Contact"
// import Creator from "components/Creator"
// import SEO from "components/Seo"
import AboutInner from "assets/images/banners/about-inner.svg"

const Layout = loadable(() => import("../components/Layout"))
const Contact = loadable(() => import("../components/Contact"))
const Creator = loadable(() => import("../components/Creator"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const AboutUs = () => (
  // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
  <Layout>
    <SEO
      title="Math Facts Website Creator Mike Kenny | MathFactLab"
      description="Designed by a fifth-grade teacher, MathFactLab is a 100% free, strategy-based approach to multiplication, division, addition and subtraction fact fluency."
      keywords={["Math Fact Families Math Fact Fluency", "Math Facts Labb"]}
      lang="en-us"
      robots="index, follow"
      locales={["en-us"]}
    />

    <section className="mfl-spotlightInner-section section-background-1 section">
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
            <h1 className="spotlightInner-title">About Us</h1>
          </div>
          <div className="spotlightInner-image">
            <img src={AboutInner} alt="AboutInner" className="spotlightInner-img" />
          </div>
        </div>
      </div>
    </section>

    <Creator />
    <Contact />
  </Layout>
  // </Suspense>
)

export default AboutUs

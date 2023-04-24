import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
// import Contact from "components/Contact"
import ContactInner from "assets/images/banners/contact-inner.svg"
// import SEO from "components/Seo"

const Layout = loadable(() => import("../components/Layout"))
const Contact = loadable(() => import("../components/Contact"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const ContactUs = () => (
  // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
  <Layout>
    <SEO
      title="Contact us with questions or feedback | MathFactLab"
      description="Do you have any questions or comments about our teacher-created, strategy-based math fact fluency program?  Reach out.  We’d love to hear from you!"
      keywords={["Math Fact Families Math Fact Fluency", "Math Facts Lab"]}
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
            <h1 className="spotlightInner-title">Contact Us</h1>
            {/* <p className="spotlightInner-subtitle">To join MathFactLab contact us.</p> */}
          </div>
          <div className="spotlightInner-image">
            <img src={ContactInner} alt="ContactInner" className="spotlightInner-img" />
          </div>
        </div>
      </div>
    </section>

    <Contact />
  </Layout>
  // </Suspense>
)

export default ContactUs

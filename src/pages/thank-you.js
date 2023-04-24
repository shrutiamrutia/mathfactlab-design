import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
import ClassroomInner from "assets/images/banners/classroom-inner.svg"
// import SEO from "components/Seo"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const ThankYou = () => {
  return (
    // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
    <Layout>
      <SEO
        title="Congratulation"
        description="Thank you for sending the message."
        keywords={[]}
        lang="en-us"
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
              <h1 className="spotlightInner-title">Congratulation</h1>
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
              <h5 className="title">Thank you for sending the message.</h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    //  </Suspense>
  )
}

export default ThankYou

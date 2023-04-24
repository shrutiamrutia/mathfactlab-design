import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
// import Spotlight from "components/Spotlight"
// import WhyWeAreDiff from "components/WhyWeAreDiff"
// import OurEmphasis from "components/OurEmphasis"
// import Features from "components/Features"
// import Research from "components/Research"
// import SEO from "components/Seo"

const Layout = loadable(() => import("../components/Layout"))
const Spotlight = loadable(() => import("../components/Spotlight"))
const JoBoalerQuote = loadable(() => import("../components/JoBoalerQuote"))

const WhyWeAreDiff = loadable(() => import("../components/WhyWeAreDiff"))
const OurEmphasis = loadable(() => import("../components/OurEmphasis"))
const Features = loadable(() => import("../components/Features"))
const Research = loadable(() => import("../components/Research"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const HomePage = () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
        // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
        <Layout>
          <SEO
            title="Math Fact Fluency Online Free | MathFactLab"
            description="Teacher-created & free, MathFactLab’s strategy-based online practice develops both math fact fluency and number sense."
            keywords={[
              `Math fact fluency`,
              `Math facts practice`,
              `Math fact practice`,
              `Math facts website`,
              `Fact families`,
              `Multiplication facts`,
              `Division facts`,
              `Addition facts`,
              `Subtraction facts`,
              `Learn Basic math facts`,
              `Basic math facts`,
              `master the basic math facts`,
              `Math fact lab`,
              `Math fact strategies`,
              `Math fact models`,
              `Fluency assessment`,
              `Math fact models`,
              `Fact triangles`,
              // Added by
              `Math fact activity`,
              `Practice basic math facts`,
              `Teaching math facts`,
              `Student math facts`,
              // added as per docs
              `Math Facts`,
              `Fact Fluency`,
              `Math Fluency`,
              `Math Fact Families`,
              `Related Facts Math`,
              `Mastering Math Facts`,
              `Basic Math Facts`,
              `Free Math Fact Practice`,
            ]}
            robots="index, follow"
            locales={["en-us"]}
          />
          <Spotlight />
          <JoBoalerQuote />
          <WhyWeAreDiff />
          <OurEmphasis />

          <Features />
          <Research />
        </Layout>
        // </Suspense>
      )}
    </>
  )
}

export default HomePage

import React, { useEffect, useState, useCallback } from "react"
import Layout from "components/Layout"
import ClassroomInner from "assets/images/banners/classroom-inner.svg"
import SEO from "components/Seo"
import axios from "axios"
import { Link } from "gatsby"

const Blogs = props => {
  const {
    pageContext: { slug },
  } = props

  const [blogDetails, setBlogDetails] = useState(null)
  const [isBlogDetailsLoading, setIsBlogDetailsLoading] = useState(true)

  const [isScrollInBottom, setIsScrollInBottom] = useState(false)

  useEffect(() => {
    setIsBlogDetailsLoading(true)

    const username = "5133bdd5-87eb-4310-a80d-33156301c514"

    const ENDPOINT = `https://api.dropinblog.com/v1/json/post/?b=${username}&post=${slug}`
    axios
      .get(`${ENDPOINT}`)
      .then(res => {
        setBlogDetails(res.data.data)
        setIsBlogDetailsLoading(false)
      })
      .catch(error => {})
  }, [slug])

  return (
    <Layout>
      <SEO
        title={`MathFactLab | ${blogDetails && blogDetails.post.title}`}
        // title="MathFactLab | Visit Our Blog"
        description="A math fact family is a collection of related addition, subtraction,
multiplication, division facts, often represented with math fact triangles. Learn more!"
        keywords={[
          "Addition And Subtraction Fact Family, Related Facts Math, Math Fact 	Families, Fact Triangles, Fact Family Multiplication, Multiplication And Division Fact Families, Division Fact Families",
        ]}
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
            <div className="spotlightInner-content blog-content">
              <h1 className="spotlightInner-title blog-title">Math Facts Journal</h1>
              <p className="spotlightInner-subtitle blog-subtitle">
                <i>The blog of MathFactLab</i>
              </p>
            </div>
            <div className="spotlightInner-image">
              <img src={ClassroomInner} alt="ClassroomInner" className="spotlightInner-img" />
            </div>
          </div>
        </div>
      </section>
      {isBlogDetailsLoading ? (
        <div style={{ visibility: "hidden", height: "400px" }}></div>
      ) : (
        blogDetails && (
          <>
            <div className="dib dib-platform-none dib-single" id="dib-template-3">
              <div className="dib-post-single" id="dib-post-single">
                <p className="dib-post-featured-image">
                  <img
                    src={blogDetails.post.featuredImage}
                    alt={blogDetails.post.title}
                    data-lazy-load="https://io.dropinblog.com/uploaded/blogs/34247675/files/featured/Math_Facts_6x7.png"
                    loading="dib-lazy"
                    className="dib-lazy-loaded"
                  />
                </p>

                <h1 className="dib-post-title dib-highlight">{blogDetails.post.title}</h1>

                <p className="dib-meta-text dib-no-author">
                  <span className="dib-meta-item dib-post-date">{blogDetails.post.publishedAt}</span>

                  <span className="dib-meta-item dib-post-readtime">{blogDetails.post.readtime}</span>
                </p>
                {blogDetails && (
                  <div
                    className="dib-post-content dib-highlight"
                    dangerouslySetInnerHTML={{ __html: blogDetails.post.content }}
                  ></div>
                )}

                <p>
                  <Link
                    className="dib-post-back-link dib-post-back-link-bottom"
                    to="/math-facts-journal/"
                    title="MathFactLab Single  page Blogs"
                    rel="canonical"
                  >
                    « Back to Blogs
                  </Link>{" "}
                </p>
              </div>
              <div className="learn-more-button" id="learn-more-button">
                <Link to="/" title="MathFactLab Single  page Blogs" rel="canonical">
                  <button className="btn btn-primary">
                    <p style={{ marginBottom: "0px" }}>Learn About</p>
                    <p style={{ marginBottom: "0px" }}>MathFactLab</p>
                  </button>
                </Link>
              </div>
            </div>
          </>
        )
      )}
    </Layout>
  )
}
export default Blogs

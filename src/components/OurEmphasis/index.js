import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import OurEmphasisImage from "assets/images/weare-diff-image.svg"

// import VideoThumbnail from "assets/images/mathfact-video-thumbnail.png"

const OurEmphasis = () => {
  return (
    <>
      <section className="mfl-OurEmphasis-section">
        <div className="container">
          <div className="row mfl-OurEmphasis-row">
            <div className="mfl-OurEmphasis-cols">
              <div className="mfl-OurEmphasis-image">
                <div className="emphasisImage">
                  <iframe
                    title="video-thumbnail"
                    frameBorder="0"
                    // src="https://muse.ai/vc/kKRSPPK"
                    src="https://player.vimeo.com/video/763997138?h=75b11bba4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allowFullScreen
                    name="iframe_video1"
                    className="mfl-OurEmphasis-video-iframe"
                    style={{ width: "100%" }}
                  ></iframe>
                  <iframe
                    title="video-thumbnail"
                    frameBorder="0"
                    // src="https://muse.ai/vc/GefDGTg"
                    src="https://player.vimeo.com/video/763997138?h=75b11bba4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    allowFullScreen
                    name="iframe_video1"
                    className="mfl-OurEmphasis-video-mobile-iframe"
                    style={{ width: "100%" }}
                  ></iframe>
                </div>

                {/* <a href="https://muse.ai/vc/163e7Gk-MathFactLab" rel="noreferrer" target="iframe_video1">
                  <img src={VideoThumbnail} alt="VideoThumbnail" className="emphasisImage video-image" />
                </a> */}
              </div>
            </div>
            <div className="mfl-OurEmphasis-cols">
              <div className="mfl-OurEmphasis-content">
                <div className="mfl-OurEmphasis-title title">Our Emphasis is on Understanding</div>
                <div className="mfl-OurEmphasis-text">
                  <p className="emphasis-text">
                    <b>At MathFactLab, we represent each of the basic math facts with a variety of models.</b> This
                    helps our students to understand the basic facts in multiple ways and to recognize them as
                    components of math fact families, whether we are talking about addition facts, subtraction facts,
                    multiplication facts or division facts.
                  </p>
                  <p className="emphasis-text">
                    For example, as our math students practice basic multiplication fact fluency (alongside division
                    fact fluency), they may see these problems represented with number lines, dice, bar diagrams, open
                    arrays and area models, to name a few. These math fact strategies help our students to realize that
                    they can construct new math facts with previously mastered ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mfl-OurEmphasis-row second-row">
            <div className="mfl-OurEmphasis-cols">
              <div className="mfl-OurEmphasis-image">
                <div className="mfl-OurEmphasis-Strategy-Based-title title">
                  <h2>Strategy-Based Math Fact Fluency</h2>
                </div>
                <div className="mfl-OurEmphasis-text">
                  <p className="emphasis-text">
                    Students working on addition fact fluency (alongside subtraction fact fluency), will practice with
                    ten frames, rekenrek beads, number lines, and double-bar diagrams. This will help them see that the
                    addition facts and subtraction facts form math fact families, which greatly simplifies the process
                    of learning the basic facts.
                  </p>
                  <p className="emphasis-text">
                    Frequent exposure to these visual models helps our math students to construct mental models and
                    deepen their conceptual understanding of the basic operations. Division and multiplication facts
                    suddenly become two sides of the same coin! All this helps to build a foundation for overall math
                    fluency.
                  </p>

                  <p className="emphasis-text">
                    <b>
                      When students regularly complete math facts practice online with MathFactLab, they begin to see
                      the manifold patterns and relationships that interconnect the basic facts.
                    </b>{" "}
                    This, in turn, leads to easier mastery, increased engagement in math class, and greater student
                    success in mathematics.
                  </p>
                  <p className="emphasis-text">
                    Math teachers, whether your elementary students need practice with addition facts or multiplication
                    times tables, MathFactLab will serve them well!
                  </p>
                </div>
              </div>
            </div>
            <div className="mfl-OurEmphasis-cols">
              <div className=" mfl-OurEmphasis-content">
                {/* <img src={OurEmphasisImage} alt="OurEmphasisImage" className="emphasisImage" /> */}
                <StaticImage
                  src="../../assets/images/weare-diff-image.svg"
                  alt="Math Fact Fluency Strategies"
                  className="emphasisImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurEmphasis

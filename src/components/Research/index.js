import React from "react"
import Slider from "react-slick"
import clip from "assets/images/clip-1.png"
import quoteBlueBottom from "assets/images/icons/quote-blue-bottom.svg"
import quoteBluetop from "assets/images/icons/quote-blue-top.svg"
import quoteLBlueBottom from "assets/images/icons/quote-lblue-bottom.svg"
import quoteLBluetop from "assets/images/icons/quote-lblue-top.svg"
import quoteVioletBottom from "assets/images/icons/quote-violet-bottom.svg"
import quoteViolettop from "assets/images/icons/quote-violet-top.svg"

const Research = () => {
  const researchSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="mfl-Research-section">
        <div className="container">
          <div className="mfl-Research-wrap">
            <div className="title">What the Research Says</div>
            <div className="mfl-Research-slider">
              <Slider {...researchSlider}>
                <div className="mfl-Research-item lightblue-item">
                  <img className="quote top" alt="quoteLBluetop" src={quoteLBluetop} />
                  <img className="quote bottom" alt="quoteLBlueBottom" src={quoteLBlueBottom} />
                  <div className="mfl-Research-inner">
                    <div className="mfl-Research-top">
                      The best way to develop fluency with numbers is to develop number sense and to work with numbers
                      in different ways, not to blindly memorize without number sense.
                    </div>
                    <div className="mfl-Research-bottom">
                      <p className="research-author">- Jo Boaler</p>
                      <p>
                        Stanford University Professor of Mathematics Education and Co-Founder of Youcubed, in her
                        article <i>Fluency Without Fear: Research Evidence on the Best Ways to Learn Math Facts</i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mfl-Research-item blue-item">
                  <img className="quote top" alt="quoteBluetop" src={quoteBluetop} />
                  <img className="quote bottom" alt="quoteBlueBottom" src={quoteBlueBottom} />
                  <div className="mfl-Research-inner">
                    <div className="mfl-Research-top">
                      Many studies over many years have compared traditional basic fact instruction (i.e., drill) to
                      strategy- focused instruction. All of them show that strategy groups outperform their peers on
                      using strategies and on automaticity and accuracy.
                    </div>
                    <div className="mfl-Research-bottom">
                      <p className="research-author">- Jennifer Bay-Williams & Gina Kling</p>
                      <p>
                        In <i>Math Fact Fluency: 60+ Games and Assessment Tools to Support Learning and Retention </i>
                        citing research from Baroody, Pupura, Eiland, Reid, & Paliwal, 2016; Brendefur, Strother,
                        Theide, & Appleton, 2015; Locuniak & Jordan, 2008; Purpura, Baroody, Eiland, & Reid, 2016;
                        Thornton, 1978, 1990; Tournaki 2003
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mfl-Research-item violet-item">
                  <img className="quote top" alt="quoteViolettop" src={quoteViolettop} />
                  <img className="quote bottom" alt="quoteVioletBottom" src={quoteVioletBottom} />
                  <div className="mfl-Research-inner">
                    <div className="mfl-Research-top">
                      Mastery that underlies computational fluency grows out of discovering the numerous patterns and
                      relationships that interconnect the basic combinations.
                    </div>
                    <div className="mfl-Research-bottom">
                      <p className="research-author">- Arthur J. Baroody</p>
                      <p>
                        Professor Emeritus of Curriculum and Instruction, University of Illinois at Urbana-Champaign in
                        his article{" "}
                        <i>
                          Why children have difficulties mastering the basic number combinations and how to help them
                        </i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mfl-Research-item blue-item">
                  <img className="quote top" alt="quoteBluetop" src={quoteBluetop} />
                  <img className="quote bottom" alt="quoteBlueBottom" src={quoteBlueBottom} />
                  <div className="mfl-Research-inner">
                    <div className="mfl-Research-top">
                      Research supports the use of explicit strategy instruction as effective in helping all students
                      learn (and remember) their basic math facts (e.g.,Baroody, et al., 2009; Baroody, et al., 2016;
                      Thornton, 1978; Fuson, 1992; Rathmell, 1978; Thornton & Toohey, 1984).
                    </div>
                    <div className="mfl-Research-bottom">
                      <p className="research-author">- John A. Van de Walle, Karen S. Karp & Jennifer Bay-Williams</p>
                      <p>
                        In <i>Elementary and Middle School Mathematics: Teaching Developmentally, 2019</i>
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Research

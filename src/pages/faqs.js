import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"

import FaqsInner from "assets/images/banners/faqs-inner.svg"

import arrowRight from "assets/images/icons/arrow-right.svg"
// import SEO from "components/Seo"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const Faqs = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState(0)
  return (
    // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
    <Layout>
      <SEO
        title="Math Fact Fluency Program FAQs | MathFactLab"
        description="Frequently asked questions about how to help your students to develop fluency with all of the basic math facts.  Sign up today.  It’s totally free."
        keywords={["Math Fact Families Math Fact Fluency", "Math Facts Lab"]}
        lang="en-us"
        locales={["en-us"]}
      />

      <section className="mfl-spotlightInner-section section-background-2 section">
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
              <h1 className="spotlightInner-title">FAQs</h1>
            </div>
            <div className="spotlightInner-image mr-0">
              <img src={FaqsInner} alt="FaqsInner" className="spotlightInner-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="mfl-accordions-section section">
        <div className="container">
          <div className="row mfl-accordions-row">
            <div className="col-xs-12">
              {/* <h3 className="title">FAQs</h3> */}
              <div className="mfl-accordions-wrapper">
                <h3 className="accordion-title">Why MathFactLab?</h3>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 1 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 1 ? 0 : 1)}
                    title="MathFactLab f1"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Why is MathFactLab better than
                    other math fact fluency programs or websites?
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}
                    <p className="mfl-bullet-item">
                      Our founder developed MathFactLab because he could not find a true math fact fluency program on
                      the internet. While the others may claim to develop fluency, they are, at best, only drilling for
                      automaticity through memorization.
                    </p>
                    <p className="mfl-bullet-item">
                      Automaticity is just automatic recall, like knowing your phone number; it requires no
                      understanding. Fluency, on the other hand, is flexible, efficient and based on a foundation of
                      reasoning and understanding.
                    </p>
                    <p className="mfl-bullet-item">
                      Fluency can’t be developed through rote memorization and drill, which is the approach used by our
                      competitors. Students develop true math fact fluency when they explore the basic math facts
                      through a variety of strategies, continuously being challenged to find the interconnections and
                      relationship between the various facts and their inverse operations. MathFactLab was built to do
                      just this.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 2 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 2 ? 0 : 2)}
                    title="MathFactLab f2"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Who created MathFactLab and why?
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}
                    <p className="mfl-bullet-item">
                      MathFactLab was created by Mike Kenny, a working fifth-grade math, science and social studies
                      teacher. The idea for MathFactLab sprang from a master’s project completed when he was a student
                      in the Vermont Mathematics Initiative.
                    </p>
                    <p className="mfl-bullet-item">
                      He had been frustrated by the absence of any commercially-available math fact program that
                      actually aligned with the research, so, for his project, he developed a large set of
                      strategy-based flashcards for his students to use as they practiced their math facts.
                    </p>
                    <p className="mfl-bullet-item">
                      As there were so many flashcards, the students struggled to keep the sets organized in a way that
                      was effective, so Mike eventually moved the program online using Google Slideshows. This made a
                      huge improvement and Mike began to truly see the effectiveness of providing a range of strategies
                      for students to develop true math fact fluency.
                    </p>
                    <p className="mfl-bullet-item">
                      Google Slides, however, lacked the interactivity and memory of a true webapp, so after seeing
                      first hand the potential of this strategy-based approach, Mike began the long process of building
                      a website, with the hope that this approach could be used not only by his students and those in
                      his school, but by students around the world.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 2.1 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 2.1 ? 0 : 2.1)}
                    title="MathFactLab f2"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Do you offer trainings for
                    teachers or help getting started?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, Mike Kenny, MathFactLab’s creator, is happy to meet with teachers via Zoom to help them get
                      the most out of MathFactLab.
                    </p>
                  </div>
                </div>
                <h3 className="accordion-title">Cost</h3>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 3 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 3 ? 0 : 3)}
                    title="MathFactLab f3"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How much does MathFactLab cost?
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}
                    <p className="mfl-bullet-item">
                      For the 2022-2023 school year, MathFactLab will be totally free. We don’t ask for credit cards or
                      commitments. We just want you to try it with your students. We’re confident that you’ll agree that
                      MathFactLab is an effective, pedagogically-sound approach to developing flexible, long-lasting,
                      math fact fluency.
                    </p>
                  </div>
                </div>

                {/* <div className={`mfl-accordions-item ${selectedQuestionIndex === 4 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 4 ? 0 : 4)}
                    title="MathFactLab f4"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Does MathFactLab offer free math
                    fact practice?
                  </a>
                  <div className="mfl-accordions-answer">
                   
                    <p className="mfl-bullet-item">
                      Yes. For the 2022-2023 school year, MathFactLab will be totally free. We don’t ask for credit
                      cards or commitments. We just want you to try it with your students. We’re confident that you’ll
                      agree that MathFactLab is an effective, pedagogically-sound approach to developing flexible, math
                      fact fluency.
                    </p>

                    <p className="mfl-bullet-item">
                      To be upfront, we will probably be charging a nominal fee starting with the 2023-2024 school year.
                    </p>
                  </div>
                </div> */}
                <h3 className="accordion-title"> General Questions about MathFactLab’s Approach</h3>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 5 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 5 ? 0 : 5)}
                    title="MathFactLab f5"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Does MathFactLab offer ways for
                    teachers to accommodate the program to meet various student needs?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, because accommodation is necessary to meet the variety of needs within any class, we have
                      included multiple means of accommodation within MathFactLab.
                    </p>
                    <p className="mfl-bullet-item">
                      For example, the fluency rate setting, by default, is set at 4 seconds per problem. That, however,
                      can be adjusted down to 2 seconds or up to 120 seconds (essentially untimed).
                    </p>
                    <p className="mfl-bullet-item">
                      Additionally, teachers can adjust the pass rate on the Level Lifter, our assessment tool. Also,
                      teachers can give interview-style assessments to those who may find traditional computer-based
                      assessments a struggle.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 6 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 6 ? 0 : 6)}
                    title="MathFactLab f6"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab help students to develop math fact fluency?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      First, let’s define ‘math fact fluency’. Fact fluency is not automatic recall, although students
                      who are fluent with the basic facts will most likely have automatic recall for most or all facts,
                      but not necessarily.
                    </p>
                    <p className="mfl-bullet-item">
                      If you ask a student who is fluent with the multiplication facts what is ‘6 x 8’, she might not be
                      able to say, ‘48’ instantly, without thought. However, she will be able to figure it out within a
                      couple seconds and tell you multiple ways she could have solved it: double 3 x 8, double 4 x 6,
                      add one more eight to five eights, etc.
                    </p>
                    <p className="mfl-bullet-item">
                      Likewise, she could tell you that 7 + 8 is one more than double 7, one less than double 8, or 7 +
                      3 + 5.
                    </p>
                    <p className="mfl-bullet-item">
                      Automaticity through memorization has no depth of understanding to it; like learning to identify
                      words without knowing letter sounds. Nor is long-lasting. If math fact knowledge is based on
                      memorization, it’s likely to fade over time.
                    </p>
                    <p className="mfl-bullet-item">
                      We believe that rote memorization through drill encourages students to think of math as a mess of
                      discrete factoids. In our view, it’s one reason why there is so much adult mathematics illiteracy.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 7 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 7 ? 0 : 7)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Can MathFactLab be used as a tool for whole-class instruction?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      All the strategies and models used by MathFactLab students can be accessed by teachers through the
                      teacher dashboard. We call this feature ‘Teaching Tools’.
                    </p>
                    <p className="mfl-bullet-item">
                      In Teaching Tools, teachers can click on any level in either learning mode to see all of the
                      strategy options available to students. Teachers first choose whether to present questions from
                      that level in numerical order or randomly or to present a typical student which includes
                      previous-level problems as well. They then simply choose the strategy they wish to introduce or
                      practice with their class or small group.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 8 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 8 ? 0 : 8)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab use fact triangles?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, at the beginning of each session, students are shown their ‘progress table’ which maps out
                      the stages and levels of the program. At each level, students can see the exact fact triangles
                      that they are focusing on at their particular level. This way students are fully aware of the
                      day’s learning targets, and can see by the generally small amount of fact triangles at any given
                      level, that the task before them is manageable.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 9 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 9 ? 0 : 9)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab show the relationships between inverse operations?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Each year, Mike has new fifth grad students who tell him that they can’t divide. He explains that
                      if they can multiply, they can divide. They just haven’t realized how to harness one to do the
                      other.
                    </p>
                    <p className="mfl-bullet-item">
                      MathFactLab has multiple strategies particularly designed to help students see the relationships
                      of the inverse operations. On some strategies, students are simultaneously adding and subtracting.
                      While on others they are dividing and multiplying at the same time. Mathematics is the art of
                      pattern hunting. The more patterns our students see the less complicated and the more
                      comprehensible the world of mathematics becomes. When students see the relationship of the inverse
                      operations, they realize that there is so much less to learn.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 10 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 10 ? 0 : 10)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab require memorization of math facts or memorizing multiplication tables?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      No, through practice with the large variety of strategies that we offer, we believe our students
                      will, in general, have so many means of solving a given fact and so much practice doing so that,
                      for the most part, automaticity will be the natural result. Or, another way to put it, they will
                      be able to solve any given math fact problem so easily that it will be as fast as (or nearly) as
                      an automatic response.
                    </p>
                    <p className="mfl-bullet-item">
                      Will all students know all the basic facts by heart, with instant recall? No, but most students
                      who work through the basic fact program will most likely be able to do so for the vast majority of
                      facts. And essentially all will be able to respond to any basic fact prompt fluently.
                    </p>
                    <p className="mfl-bullet-item">
                      Memorization is not necessary for fluency. Fluency (and in most cases automaticity) will develop
                      simply through the strategic practice we offer.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 11 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 11 ? 0 : 11)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab teach multiplication fact fluency?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, multiplication fact fluency is taught alongside division fact fluency. We, of course, also
                      teach addition and subtraction fact fluency.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 12 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 12 ? 0 : 12)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab only teach the basic math facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      No, MathFactLab goes well beyond the basics. In fact, we offer two advanced addition/subtract
                      stages and three advanced multiplication/division stages.
                    </p>
                    <p className="mfl-bullet-item">
                      In advanced addition/subtraction, students learn to apply their basic fact knowledge in situations
                      where a one-digit number is added or subtracted from a two digit number or when the difference
                      between two two-digit numbers is ten or less.
                    </p>
                    <p className="mfl-bullet-item">
                      In super-advanced addition/subtraction, students learn to use their fact knowledge to add and
                      subtract two-digit numbers mentally.
                    </p>
                    <p className="mfl-bullet-item">
                      In advanced multiplication/division, students learn the elevens and twelves facts, up to 12x12, a
                      traditional expectation of math fact knowledge.
                    </p>
                    <p className="mfl-bullet-item">
                      In super-advanced multiplication, students step out of tradition by extending their knowledge of
                      eleven and twelves up 12 x 20. They also learn to do the same with fifties, fifteens,
                      twenty-fives, and twenties, again up to __ x 20.{" "}
                    </p>
                    <p className="mfl-bullet-item">
                      Super-duper-advanced multiplication challenges even the most capable by helping them learn to
                      efficiently solve nineteens, eighteens, fourteens, sixteens, thirteens and seventeens all the way
                      up to __ x 20. A graduate of these three advanced multiplication programs should be able to
                      quickly, accurately and flexibly respond to any multiplication problem up to 20 x 20!
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 13 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 13 ? 0 : 13)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab provide hints?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      We do provide hints, not always, but often. You will see, as your students use MathFactLab, a hint
                      button in the top left corner. This typically appears two seconds after the problem is revealed.
                      Students can hit this button to reveal a hint. Some problems offer a second hint. Sometimes hints
                      are automatically given.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 14 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 14 ? 0 : 14)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab teach advanced facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, we’re proud to say that MathFactLab goes well beyond the basics. In fact, we offer two
                      advanced addition stages and three advanced multiplication stages.
                    </p>
                    <p className="mfl-bullet-item">
                      In advanced addition/subtraction, students learn to apply their basic fact knowledge in situations
                      where a one-digit number is added or subtracted from a two digit number or when the difference
                      between two two-digit numbers is ten or less.
                    </p>
                    <p className="mfl-bullet-item">
                      In super-advanced addition/subtraction, students learn to use their fact knowledge to add and
                      subtract two-digit numbers mentally.
                    </p>
                    <p className="mfl-bullet-item">
                      In advanced multiplication/division, students learn the elevens and twelves facts, up to 12x12, as
                      is traditionally taught.
                    </p>
                    <p className="mfl-bullet-item">
                      In super-advanced multiplication, students step out of tradition by extending their knowledge of
                      eleven and twelves up 12 x 20. They also learn to do the same with fifties, fifteens,
                      twenty-fives, and twenties, again up to __ x 20.
                    </p>
                    <p className="mfl-bullet-item">
                      Super-duper-advanced multiplication challenges even the most capable by helping them learn to
                      efficiently solve nineteens, eighteens, fourteens, sixteens, thirteens and seventeens all the way
                      up to __ x 20. A graduate of these three advanced multiplication programs should be able to
                      quickly and accurately respond to any multiplication problem up to 20 x 20!
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 15 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 15 ? 0 : 15)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Do we take privacy seriously?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, absolutely. As MathFactLab was founded by a public-school teacher, we know the importance of
                      student privacy. Please see our Privacy Policy for details.
                    </p>
                  </div>
                </div>

                <h3 className="accordion-title">General Questions about Math Fact Instruction</h3>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 16 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 16 ? 0 : 16)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    What is the difference between fluency and automaticity?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      In simplest terms, fluency has depth of understanding. Automaticity is simply easy recall.
                    </p>
                    <p className="mfl-bullet-item">
                      The three elements of fluency are flexibility, accuracy and efficiency.
                    </p>
                    <p className="mfl-bullet-item">
                      A student could be fluent, but might not have automaticity - meaning they can respond accurately
                      and efficiently, but there might be some mental effort involved.
                    </p>
                    <p className="mfl-bullet-item">
                      Likewise, a student can have automaticity without being fluent - meaning they can respond
                      effortlessly, because they have memorized a set of facts, but their understanding is shallow,
                      inflexible and prone to being forgotten.
                    </p>
                    <p className="mfl-bullet-item">
                      At MathFactLab, our primary goal is to help students develop a deep, fluent understanding of all
                      the basic math facts.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 17 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 17 ? 0 : 17)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    What is the difference between drill and strategy-based math fact practice?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Most of the math fact websites you will find on the internet quiz students on the basic facts in
                      one way or another without providing them a strategic means to solving the basic facts. This is
                      drill.
                    </p>
                    <p className="mfl-bullet-item">
                      If a student cannot respond accurately to a fact prompt, such as 6x7, these websites will not
                      suggest that the student uses their knowledge of 3x7 and double it or add another seven to 5x7.
                      Rather, it will just tell the student that the product is 42, and encourage them to memorize this
                      fact. Drill only makes sense if students already have a very solid foundation with the facts and
                      are simply working to increase their response time. Even then, it’s not a particularly good
                      choice.
                    </p>
                    <p className="mfl-bullet-item">
                      A strategy-based program helps students - through the use of a variety of models - to find
                      multiple ways to solve a math fact prompt. A strategy-based approach encourages the flexible
                      thinking that is a hallmark of good mathematicians.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 18 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 18 ? 0 : 18)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Is multiplication table practice the same as multiplication facts practice?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, multiplication table practice is the same as multiplication facts practice. They are really
                      two names for the same thing.
                    </p>
                  </div>
                </div>
                <h3 className="accordion-title">Our Addition/Subtraction Program</h3>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 19 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 19 ? 0 : 19)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    What strategies are used to teach addition and subtraction facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      MathFactLab harnesses the power of five and ten to help students master the basic addition and
                      subtraction facts. We do this by using ten frames and rekenrek-like beads and number lines. These
                      are not new inventions; they are the basic tools of any well-run primary-grade math class. We use
                      them for the same reason good teachers across the world use them: they are effective.
                    </p>
                    <p className="mfl-bullet-item">
                      We also introduce facts in a research-based sequence allowing students to construct new facts
                      using previously mastered facts.
                    </p>
                    <p className="mfl-bullet-item">
                      One of the best ways to quickly familiarize yourself with the strategies we offer is to use our
                      ‘Teaching Tools’, which you will find in the teacher dashboard. In Teaching Tools, teachers can
                      click on any level in either learning mode to see all of the strategy options available to
                      students.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 20 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 20 ? 0 : 20)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab cover the addition facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Students work on the addition and subtraction facts simultaneously; thus, taking advantage of
                      addition and subtraction fact families and the relationships between these inverse operations.
                    </p>
                    <p className="mfl-bullet-item">
                      Our basic addition and subtraction program has ten levels, which proceed according to the
                      research. Students begin with the foundational facts in the following order: +1 facts, +2 facts,
                      facts with 0, and doubles. From there, students cover the within 10 facts, sums of 10, and the
                      near-doubles. These are followed by three levels of the remaining beyond-ten facts: +9, +8 and
                      lastly +7.
                    </p>
                    <p className="mfl-bullet-item">
                      The primary models used in the basic addition and subtraction program are ten frames, number
                      lines, double-bar diagrams and rekenrek-like beads. More models are on the way.
                    </p>

                    <p className="mfl-bullet-item">
                      MathFactLab also offers advanced and super-advanced addition and subtraction programs. Students
                      completing the basic addition and subtraction program progress directly into the advanced addition
                      and subtraction program.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 21 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 21 ? 0 : 21)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab cover the subtraction facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      In MathFactLab, the subtraction facts are learned alongside the addition facts; thus, taking
                      advantage of addition and subtraction fact families and the relationships between these inverse
                      operations.
                    </p>
                    <p className="mfl-bullet-item">
                      Our basic addition and subtraction program has ten levels, which proceed in a research-based
                      order. Students begin with the foundational facts in the following order: +1 facts, +2 facts,
                      facts with 0, and doubles. From there, students cover the within 10 facts, sums of 10, and the
                      near-doubles. These are followed by three levels of the remaining beyond-ten facts: +9, +8 and
                      lastly +7.
                    </p>
                    <p className="mfl-bullet-item">
                      The primary models used in the basic addition and subtraction program are ten frames, number
                      lines, double-bar diagrams and rekenrek-like beads. More models are on the way.
                    </p>

                    <p className="mfl-bullet-item">
                      MathFactLab also offers advanced and super-advanced addition and subtraction programs.
                    </p>
                    <p className="mfl-bullet-item">
                      Students completing the basic addition and subtraction program progress directly into our advanced
                      and super-advanced addition and subtraction programs.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 22 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 22 ? 0 : 22)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab teach the double facts of math?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      The doubles facts are taught in Level D of the addition/subtraction program. Students use ten
                      frames, rekenrek beads, number lines and double-bar diagrams to develop fluency with these
                      foundational facts.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 23 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 23 ? 0 : 23)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab teach the double plus one facts or near-doubles?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      The double-plus-one facts (or near-doubles) are taught in Level G (the seventh level) of our
                      addition/subtraction program. The idea of one more than a known fact is particularly emphasized
                      with the use of ten frames using three different color chips: the traditional yellow and red plus
                      one purple chip to represent the one extra.
                    </p>
                  </div>
                </div>

                <h3 className="accordion-title">Our Multiplication/Division Program</h3>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 24 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 24 ? 0 : 24)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    What strategies are used to teach multiplication and division facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Each level in our multiplication/division learning mode has its own unique strategies. For
                      example, in Level A (x2), the doubling strategy is the primary one. This doubling strategy is
                      modeled using both ten frames and dice. In this level, we also represent the x2 facts on number
                      lines, open arrays, area models and bar diagrams.
                    </p>
                    <p className="mfl-bullet-item">
                      One of the best ways to quickly familiarize yourself with the strategies we offer is to use our
                      ‘Teaching Tools’, which you will find in the teacher dashboard. In Teaching Tools, teachers can
                      click on any level in either learning mode to see all of the strategy options available to
                      students.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 25 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 25 ? 0 : 25)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab cover the multiplication facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Students work on multiplication and division facts simultaneously; thus, taking advantage of
                      multiplication and division fact families and the relationships between these inverse operations.
                    </p>
                    <p className="mfl-bullet-item">
                      Our basic multiplication and division program has eleven levels, which proceed in a research-based
                      order. Students begin with the foundational facts: x2, x10, x5, x1, x0. With that solid
                      foundation, students are then ready to construct the derived facts, which students proceed through
                      in the following order: x4, x3, x6, x9, x8, and x7.
                    </p>
                    <p className="mfl-bullet-item">
                      The primary models used in the basic multiplication and division program are dice, number lines,
                      area models, and bar diagrams. Other models are used only for particular levels: ten frames (for
                      x2, x3 & x4), place-value charts (x10), clock faces (x5), number patterns (x9). More models are on
                      the way.
                    </p>
                    <p className="mfl-bullet-item">
                      MathFactLab also offers advanced, super-advanced, and super-duper-advanced multiplication and
                      division programs, which teach strategies for multiplication up to 20 x 20.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 26 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 26 ? 0 : 26)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    How does MathFactLab cover the division facts?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Students work on the division as they learn the multiplication facts; thus, taking advantage of
                      multiplication and division fact families and the relationships between these inverse operations.
                    </p>
                    <p className="mfl-bullet-item">
                      Our basic multiplication and division program has eleven levels, which proceed in a research-based
                      order. Students begin with the foundational facts: x2, x10, x5, x1, x0. With that solid
                      foundation, students are then ready to construct the derived facts, which students proceed through
                      in the following order: x4, x3, x6, x9, x8, and x7.
                    </p>

                    <p className="mfl-bullet-item">
                      The primary models used with division are number lines, area models, and bar diagrams.
                    </p>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 27 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === 27 ? 0 : 27)}
                    title="MathFactLab f7"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Does MathFactLab teach the doubling strategy in multiplication?
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      Yes, Level A of our multiplication/division learning mode teaches the x2 facts. We harness student
                      prior knowledge of doubling to make for an easy start to our multiplication program.
                    </p>

                    <p className="mfl-bullet-item">
                      In Level A (x2) students practice x2 facts using ten frames, dice, number lines, and bar diagrams.
                    </p>
                  </div>
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

export default Faqs

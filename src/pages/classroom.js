import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
import ClassroomInner from "assets/images/banners/classroom-inner.svg"
import arrowRight from "assets/images/icons/arrow-right.svg"
// import SEO from "components/Seo"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const Classroom = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState(0)
  const [selectedListIndex, setSelectedListIndex] = React.useState()
  const [listIndex, setListIndex] = React.useState([])

  const handleParaClick = (index, ...defaultListIndex) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? 0 : index)
    setListIndex(defaultListIndex)
  }

  const handleListClick = key => {
    const index = listIndex.indexOf(key)
    listIndex.includes(key) ? listIndex.splice(index, 1) : listIndex.push(key)
    setListIndex([...listIndex])
  }

  return (
    // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
    <Layout>
      <SEO
        title="Math fact fluency: Principles for best practice | MathFactLab"
        description="Learn how to best implement this 100% free math fact website in your classroom, homeschool or home.  Help your students master all the multiplication facts."
        keywords={[
          `classroom`,
          `Implement MathfactLab`,
          "Classroom math facts lab",
          `Math fact instruction`,
          `math fact strategies`,
          // added as per docs
          "Math Fact Families",
          "Multiplication Facts Practice",
          "Multiplication Facts",
          "Addition Facts",
          "Division Facts",
          "Double Facts Math",
          "Fact Family Multiplication",
          "Multiplication Math Facts",
          "Multiplication and Division Fact Families",
          "Multiplication Table Practice",
          "Subtraction Facts",
          "Addition Math Facts",
          "Basic Math Facts",
          "Division Fact Families",
          "Fact Triangles",
          "Free Math Fact Practice",
          "Addition and Subtraction Fact Family",
          "Double Plus One Fact",
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
            <div className="spotlightInner-content">
              <h1 className="spotlightInner-title">MathFactLab in the Classroom</h1>
            </div>
            <div className="spotlightInner-image">
              <img src={ClassroomInner} alt="ClassroomInner" className="spotlightInner-img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="box-conatiner">
          <div className="box box1">
            <div className="content">
              <h1>Sedans</h1>
              <p>
                Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on
                your next road trip.
              </p>
              <button className="btn btn1">Learn More</button>
            </div>
          </div>
          <div className="box box2">
            <div className="content">
              <h1>SUVs</h1>
              <p>
                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
                off-road adventures.
              </p>
              <button className="btn btn2">Learn More</button>
            </div>
          </div>
          <div className="box box3">
            <div className="content">
              <h1>Luxury</h1>
              <p>
                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental
                and arrive in style.
              </p>
              <button className="btn btn3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mfl-accordions-section section">
        <div className="container">
          <div className="row mfl-accordions-row">
            <div className="col-xs-12">
              <h3 className="title">Key Principles for Successfully Implementing MathFactLab</h3>
              <div className="content-24 bold-text">
                Teachers, taking ten minutes to read the following will help you and your students to get the most out
                of MathFactLab.
              </div>
              <div className="mfl-accordions-wrapper">
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 2 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(2)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> MathFactLab is a strategy-based
                    math fact program, helping children to build number sense as they develop a deep understanding of
                    the basic math facts.
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}
                    <p className="mfl-bullet-item">
                      Students practice the basic math facts with a multitude of models: number lines, ten frames,
                      rekenreks, bar diagrams, dice, dominoes, dots, area models and arrays of objects.
                    </p>
                    <p className="mfl-bullet-item">
                      Through repeated application of a variety of strategies, students develop fluency and (in most
                      cases) automaticity with all the basic math facts.
                    </p>
                    <p className="mfl-bullet-item">
                      In addition, for example, students learn the 'Sums of 10' facts by completing tens frames, by
                      estimation using double-bar diagrams, and by discovering the variety of sums of ten on a rekenrek.
                    </p>
                    <p className="mfl-bullet-item">
                      In multiplication, for example, students learn the x5 facts by dividing the x10 facts in half, by
                      using their knowledge of clocks, by making jumps of five on a number line, and by pairing fives to
                      make tens.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 1 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(1, 1, 2)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> MathFactLab is a supplement to
                    good initial first instruction in the classroom.
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}

                    <p className="mfl-bullet-item" onClick={() => handleListClick(1)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(1) ? "active" : ""}`}
                      /> */}
                      According to Baroody (2006), there are three stages of development in math fact acquisition:
                    </p>

                    <div className={`list-show ${listIndex.includes(1) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            Phase 1: Counting strategies [and constructing meaning]{" "}
                          </li>
                          <li className="mfl-bullet-list-item">
                            Phase 2: Reasoning strategies - using known information (e.g., known facts and
                            relationships) to logically determine (deduce) the answer of an unknown combination
                          </li>
                          <li className="mfl-bullet-list-item">
                            Phase 3: Mastery - efficient (fast and accurate) production of answers
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(2)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(2) ? "active" : ""}`}
                      /> */}
                      Phase 1 is what happens in good classrooms: providing students with an understanding of numbers,
                      operations, and a means of solving the basic math facts.
                    </p>

                    <div className={`list-show ${listIndex.includes(2) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            It is expected that students have completed Phase I before beginning MathFactlab.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item">
                      Unlike most math fact websites, MathFactLab, with its multiple-model approach, is a powerful tool
                      for Phase 2’s development of reasoning strategies.
                    </p>
                    <p className="mfl-bullet-item">
                      With sufficient practice using a broad variety of strategies, our students develop the mastery of
                      Phase 3 without need for memorization.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 3 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(3, 3, 4)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Short frequent practice with
                    MathFactLab is best.
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}

                    <p className="mfl-bullet-item" onClick={() => handleListClick(3)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(3) ? "active" : ""}`}
                      /> */}
                      MathFactLab student sessions are from 5 to 20 minutes long. The default is 12.5 minutes.
                    </p>
                    <div className={`list-show ${listIndex.includes(3) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            Teachers can determine the length of student sessions in the teacher dashboard.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(4)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(4) ? "active" : ""}`}
                      /> */}
                      For greatest success, we recommend that students complete at least three sessions per week.
                    </p>
                    <div className={`list-show ${listIndex.includes(4) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            While multiple sessions can be completed in a single day, distributed (or spaced) practice
                            has been shown to be a more effective method of learning.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 4 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(4, 5)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" /> Students using MathFactLab
                    progress through a series of stages, each broken into multiple levels.
                  </a>
                  <div className="mfl-accordions-answer">
                    {/* <p className="mfl-answer-item">
                    Aliquam bibendum pulvinar felis, a molestie orci venenatis quis. Cras vulputate consequat malesuada.
                    Cras magna ante, accumsan in elit vitae, luctus varius magna. Sed maximus, libero vel pretium
                    malesuada, nulla leo aliquet nibh, eget hendrerit orci odio quis tellus. Cras in ligula dictum,
                    dapibus lectus non, commodo enim.
                  </p> */}
                    <p className="mfl-bullet-item">
                      The many small steps that the program is divided into allows for ample opportunity for students to
                      recognize their growth and to feel proud of it.
                    </p>

                    <p className="mfl-bullet-item">
                      Although MathFactLab goes well beyond the basics, only the basic facts are essential for your
                      students to master.{" "}
                    </p>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(5)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(5) ? "active" : ""}`}
                      /> */}
                      While certainly worthwhile, consider the advanced stages to be enrichment, not essential.
                    </p>
                    <div className={`list-show ${listIndex.includes(5) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            The advanced stages enhance mental math skills while providing a means for all students -
                            not just those working on the basic facts - to be engaged in math fact study.
                          </li>
                          <li className="mfl-bullet-list-item">
                            Note: Students should have mastery of the advanced +/- stages before tackling the advanced
                            x/÷ stages
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p
                      className="mfl-bullet-item-without-bullet"
                      onClick={() => setSelectedListIndex(selectedListIndex === 6 ? 0 : 6)}
                    >
                      <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${selectedListIndex === 6 ? "active" : ""}`}
                      />{" "}
                      The addition/subtraction program consists of 17 levels, broken into 4 stages:
                    </p>

                    <div className={`list-show ${selectedListIndex === 6 ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Basic Facts Part 1 (Levels A - F)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level A: +1</li>
                          <li className="mfl-bullet-item-inner">Level B: +2 </li>
                          <li className="mfl-bullet-item-inner">Level C: +0 </li>
                          <li className="mfl-bullet-item-inner">Level D: Doubles</li>
                          <li className="mfl-bullet-item-inner">Level E: +3 or +4</li>
                          <li className="mfl-bullet-item-inner">Level F: +10</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Basic Facts Part 2 (Levels G - K)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level G: Near doubles</li>
                          <li className="mfl-bullet-item-inner">Level H: +9</li>
                          <li className="mfl-bullet-item-inner">Level J: +8</li>
                          <li className="mfl-bullet-item-inner">Level K: +7</li>
                        </ul>

                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Advanced Facts (Levels L - M)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level L: +11 to 20</li>
                          <li className="mfl-bullet-item-inner">Level M: +21 to 90</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Super-Advanced Facts (Levels N - R)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">
                            Level N: 2-digit + multiple of 10 (sums less than 100)
                          </li>
                          <li className="mfl-bullet-item-inner">Level O: 2-digit + 2-digit (sums less than 100)</li>
                          <li className="mfl-bullet-item-inner">
                            Level P: 2-digit + 2-digit ending in 9 (sums less than 100)
                          </li>
                          <li className="mfl-bullet-item-inner">
                            Level Q: 2-digit + multiple of 10 (sums greater than 100)
                          </li>
                          <li className="mfl-bullet-item-inner">Level R: 2-digit + 2-digit (sums greater than 100)</li>
                        </ul>
                      </div>
                    </div>

                    <p
                      className="mfl-bullet-item-without-bullet"
                      onClick={() => setSelectedListIndex(selectedListIndex === 7 ? 0 : 7)}
                    >
                      <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${selectedListIndex === 7 ? "active" : ""}`}
                      />{" "}
                      The multiplication/division program consists of 25 levels, broken into 4 stages:
                    </p>

                    <div className={`list-show ${selectedListIndex === 7 ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Basic Facts Part 1 (Levels A - E)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level A: x2</li>
                          <li className="mfl-bullet-item-inner">Level B: x10</li>
                          <li className="mfl-bullet-item-inner">Level C: x5</li>{" "}
                          <li className="mfl-bullet-item-inner">Level D: x1</li>
                          <li className="mfl-bullet-item-inner">Level E: x0</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Basic Facts Part 2 (Levels F - L)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level F: x4</li>
                          <li className="mfl-bullet-item-inner">Level G: x3</li>
                          <li className="mfl-bullet-item-inner">Level H: x6</li>{" "}
                          <li className="mfl-bullet-item-inner">
                            Level J: x9 <br></br>
                            <i className="note-text">
                              Note: While students are introduced to a new nine fact at each level (for example, 4 x 9
                              at Level F), mastery of most nine facts is not expected until this level.
                            </i>
                          </li>
                          <li className="mfl-bullet-item-inner">Level K: x8</li>
                          <li className="mfl-bullet-item-inner">Level L: x7</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Advanced Facts (Levels M - N)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level M: x11</li>
                          <li className="mfl-bullet-item-inner">Level N: x12</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Super-Advanced Facts (Levels O - T)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level O: x11 (advanced)</li>
                          <li className="mfl-bullet-item-inner">Level P: x12 (advanced)</li>
                          <li className="mfl-bullet-item-inner">Level Q: x50</li>
                          <li className="mfl-bullet-item-inner">Level R: x15</li>
                          <li className="mfl-bullet-item-inner">Level S: x25</li>
                          <li className="mfl-bullet-item-inner">Level T: x20</li>
                        </ul>
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">Super-Duper-Advanced Facts (Levels U - Z)</li>
                        </ul>
                        <ul className="mfl-bullet">
                          <li className="mfl-bullet-item-inner">Level U: x19</li>
                          <li className="mfl-bullet-item-inner">Level V: x18</li>
                          <li className="mfl-bullet-item-inner">Level W: x14</li>
                          <li className="mfl-bullet-item-inner">Level X: x16</li>
                          <li className="mfl-bullet-item-inner">Level Y: x13</li>
                          <li className="mfl-bullet-item-inner">Level Z: x17</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 5 ? "active" : ""}`}>
                  <a
                    className="mfl-accordions-link"
                    onClick={() => handleParaClick(5, 6, 7, 8, 9)}
                    title="MathFactLab c2"
                  >
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon " /> Students are given a brief
                    placement assessment upon first logging in to MathFactLab.
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item" onClick={() => handleListClick(6)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(6) ? "active" : ""}`}
                      /> */}
                      This assessment mirrors the levels of the programs, first starting with questions from Level A and
                      progressing level-by-level towards the final level.
                    </p>
                    <div className={`list-show ${listIndex.includes(6) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            Depending on their assigned learning mode, students begin with either addition or
                            multiplication.
                          </li>
                          <li className="mfl-bullet-list-item">
                            After the student has responded inaccurately and/or non-fluently five times, that
                            operation’s assessment ends.
                          </li>
                          <li className="mfl-bullet-list-item">
                            The student then begins the 2nd operation’s assessment (either subtraction or division),
                            which will also end after the fifth inaccurate and/or non-fluent response
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(7)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(7) ? "active" : ""}`}
                      /> */}
                      Before beginning the placement assessment, students are asked to type in a variety of two-digit
                      numbers. The average response time can help teachers best determine an appropriate required
                      fluency rate for each student.
                    </p>

                    <div className={`list-show ${listIndex.includes(7) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            Students who have slower than typical response times may need to be assigned a slower
                            required fluency rate.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(8)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(8) ? "active" : ""}`}
                      /> */}
                      We know that students make typos or, at times, respond incorrectly to facts that they may know
                      well.
                    </p>
                    <div className={`list-show ${listIndex.includes(8) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            With this in mind, at each level in the placement assessment, students are given a second
                            try for up to two incorrect or slow responses.
                          </li>
                          <li className="mfl-bullet-list-item">
                            This helps us make sure that students are being accurately placed within the program.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item">
                      Students are assigned to begin MathFactLab at the level where they have made their third
                      inaccurate and/or non-fluent response.
                    </p>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(9)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(9) ? "active" : ""}`}
                      /> */}
                      We know that If a teacher feels a student’s results on a placement assessment is not reflective of
                      the student’s ability, the teacher has two choices.
                    </p>
                    <div className={`list-show ${listIndex.includes(9) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            One, the student can be given the opportunity to take the placement assessment again. (The
                            teacher selects ‘Reassess’ under ‘Actions’ on the student’s row in the teacher dashboard.)
                          </li>
                          <li className="mfl-bullet-list-item">
                            Two, the teacher can place the student in the program at the level determined most
                            appropriate by the teacher. (Select ‘Edit’ on the student’s row in the teacher dashboard.)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mfl-accordions-item ${selectedQuestionIndex === 6 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(6)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Growth is its own best reward.
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      MathFactLab is not game-based, nor are there reward tokens,games, etc. Instead, we find that our
                      students are generally intrinsically motivated by the growth that they see in their own
                      performance as they move through the levels of the program.
                    </p>
                    <p className="mfl-bullet-item">
                      You will find that making progress in the program is a source of pride for your students,
                      especially for those who have struggled with math facts in the past.
                    </p>
                    <p className="mfl-bullet-item">
                      Implementing small celebrations in your classroom, like clapping for those each day who move up a
                      level, can add to student pride in their successes.
                    </p>
                  </div>
                </div>
                <div className={`mfl-accordions-item ${selectedQuestionIndex === 7 ? "active" : ""}`}>
                  <a className="mfl-accordions-link" onClick={() => handleParaClick(7, 10, 11)} title="MathFactLab c2">
                    <img src={arrowRight} alt="arrowRight" className="mfl-acc-icon" />
                    Not all students process at the same speed.
                  </a>
                  <div className="mfl-accordions-answer">
                    <p className="mfl-bullet-item">
                      By default, MathFactLab students are expected to respond accurately to a given prompt in under
                      four seconds, but you will find that this pace is unrealistic for some students.
                    </p>
                    <p className="mfl-bullet-item">
                      Teachers are able to change the required response time in the teacher console. This can be set
                      from 2 up to 120 seconds.
                    </p>
                    <p className="mfl-bullet-item">
                      A longer response time will be helpful for a good percentage of special education students.
                    </p>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(10)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(10) ? "active" : ""}`}
                      /> */}
                      We know that some general education students may also need a longer response time.
                    </p>
                    <div className={`list-show ${listIndex.includes(10) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            While typically teachers may choose a slower pace for those with a learning disability in
                            math, keep in mind that you may also have general education students working at grade level
                            or above who - because of their processing speed - simply are not capable of responding
                            consistently in less than four seconds.
                          </li>
                          <li className="mfl-bullet-list-item">
                            To keep MathFactLab a positive, pleasant experience, adjust the required fluency rate for
                            students who need it to one that is appropriately challenging while also achievable.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="mfl-bullet-item" onClick={() => handleListClick(11)}>
                      {/* <img
                        src={arrowRight}
                        alt="arrowRight"
                        className={`mfl-acc-icon sub-arrow ${listIndex.includes(11) ? "active" : ""}`}
                      /> */}
                      For students working on addition/subtraction - in order to break dependencies on counting fingers
                      - it is important that their required response time be no longer than necessary.
                    </p>
                    <div className={`list-show ${listIndex.includes(11) ? "activeList" : ""}`}>
                      <div className="list-wrapper">
                        <ul className="mfl-bullet-list">
                          <li className="mfl-bullet-list-item">
                            This time restraint will help to encourage the student to use more efficient strategies.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="export-button-wrapper">
                <a
                  title="MathFactLab pdf"
                  className="button-wrap"
                  href="https://docs.google.com/document/d/1dmtanQUZ1tBJsCg-7F6wRNEPOYj04AYUbUPHzOa6V2Q/edit?usp=sharing"
                  download
                >
                  <button className="btn btn-primary lg">Export as PDF</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    // </Suspense>
  )
}

export default Classroom

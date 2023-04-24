import React, { useState } from "react"
import { useForm } from "react-hook-form"
// import ReCAPTCHA from "react-google-recaptcha"
import user from "assets/images/icons/user.svg"
import envelope from "assets/images/icons/envelope.svg"
import chat from "assets/images/icons/chat.svg"
import email from "assets/images/icons/icemail.svg"
import axios from "axios"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { navigate } from "gatsby"

const Contact = () => {
  const GATSBY_API_URL = process.env.GATSBY_API_URL || "https://dev.mathfactlab.com"

  // const GATSBY_GOOGLE_SITE_KEY = process.env.GATSBY_GOOGLE_SITE_KEY || "https://dev.mathfactlab.com"

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()

  // const recaptchaRef = React.useRef()

  // const [isShowReCaptchaError, setIsShowReCaptchaError] = useState(false)

  const [errorType, setErrorType] = useState("")
  const onSubmit = async data => {
    const body = {
      user_name: data.yourname,
      email: data.youremail,
      message: data.yourmsg,
    }

    // const token = await recaptchaRef.current.executeAsync()
    // if (token) {
    // setIsShowReCaptchaError(false)

    await axios
      .post(`${GATSBY_API_URL}/api/v1/contact-support`, body)
      .then(res => {
        setErrorType("success")
        trackCustomEvent({
          category: "Got a question, problem or suggestion?",
          action: "Send Message",
          label: `Message has been sent`,
        })
        navigate("/thank-you")
      })
      .catch(error => {
        setErrorType("error")
      })
    reset()
    // } else {
    //   setIsShowReCaptchaError(true)
    // }
  }

  return (
    <>
      <section className="mfl-Contact-section section">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="title">Got a question, problem or suggestion?</h2>
            <h2 className="title">
              Want to arrange a free MathFactLab training for you, your staff and/or colleagues?
            </h2>
            <p className="subtitle">Please fill out the form below. We look forward to hearing from you.</p>
          </div>
          <form className="mfl-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div className="mfl-form-group">
              <div className="mfl-form-item--half">
                {/* For success input class ==> mfl-success */}
                <div className={errors.yourname ? "mfl-input-wrap mfl-error" : "mfl-input-wrap"}>
                  <div className="mfl-form-title">
                    <span className="mfl-input-icon">
                      <img src={user} alt="user" className="mfli-icon" />
                    </span>
                    <span className="mfl-input-label">Your Name</span>
                  </div>
                  <input
                    {...register("yourname", { required: true })}
                    type="text"
                    id="yourname"
                    name="yourname"
                    placeholder="Enter Your User Name"
                    className="mfl-inputfield"
                  />
                </div>
                {errors.yourname ? <span className="mfl-error-text">Enter Your Name</span> : ""}
              </div>
              <div className="mfl-form-item--half">
                {/* For Error input class ==> mfl-error */}
                <div className={errors.youremail ? "mfl-input-wrap mfl-error" : "mfl-input-wrap"}>
                  <div className="mfl-form-title">
                    <span className="mfl-input-icon">
                      <img src={envelope} alt="envelope" className="mfli-icon" />
                    </span>
                    <span className="mfl-input-label">Your Email</span>
                  </div>
                  <input
                    {...register("youremail", {
                      required: true,
                      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                    id="youremail"
                    type="text"
                    name="youremail"
                    placeholder="Enter Your Email"
                    className="mfl-inputfield"
                  />
                </div>
                {errors.youremail && errors.youremail.type === "required" && (
                  <span className="mfl-error-text">Enter Your Email</span>
                )}

                {errors.youremail && errors.youremail.type === "pattern" && (
                  <span className="mfl-error-text">Please enter valid email.</span>
                )}
              </div>
            </div>
            <div className="mfl-form-group">
              <div className="mfl-form-item">
                <div className={errors.yourmsg ? "mfl-input-wrap mfl-error" : "mfl-input-wrap"}>
                  <div className="mfl-form-title">
                    <span className="mfl-input-icon">
                      <img src={chat} alt="chat" className="mfli-icon" />
                    </span>
                    <span className="mfl-input-label">Message</span>
                  </div>
                  <textarea
                    {...register("yourmsg", { required: true })}
                    type="text"
                    name="yourmsg"
                    placeholder="Enter Your Message"
                    className="mfl-inputfield textarea"
                  ></textarea>
                </div>
                {errors.yourmsg ? <span className="mfl-error-text">Message is required.</span> : ""}
              </div>
            </div>
            {/* {!!errorType && (
              <div className={`mfl-response ${errorType}-message`}>
                <span>
                  {errorType === "success"
                    ? "Your message has been sent successfully."
                    : "Something went wrong. Try after some time."}
                </span>
              </div>
            )} */}

            <div className="mfl-form-group">
              <div className="mfl-form-item">
                <button className="btn btn-primary lg" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="mfl-emailer">
            <a href="mailto:contact@mathfactlab.com" className="link" title="MathFactLab mail">
              <img src={email} alt="email" className="mfl-emailicon" />
              contact@mathfactlab.com
            </a>
          </div>
        </div>

        {/* <ReCAPTCHA size={"invisible"} sitekey={GATSBY_GOOGLE_SITE_KEY} ref={recaptchaRef} /> */}
      </section>
    </>
  )
}
export default Contact

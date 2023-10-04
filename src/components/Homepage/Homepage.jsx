import { React, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  HomepageIntro,
  HomepageFooter,
  animateDelay,
} from "../../simpleConstants";
import me from "../../Assets/me.png";
import "./Homepage.styles.scss";

function Homepage() {
  const HomepageMain = {
    intro: (
      <>
        In this second portion I want to take the opportunity to briefly discuss
        my apps at the top of this page. I will streamline my resume here too.
        If you want the full version of my resume I have it as a PDF. Why didn't
        I just put my full resume on here? Well, I'll be candid. I've wanted to
        become a software developer for quite some time, however, my actions
        didn't always match my desires; as such I've had a lot of jobs that are
        not partucularly pertinent to development. These were "waste of time"
        jobs if you like and I don't want to give an overage of information
        unless asked directly, I know you are busy. Instead, similar to how I
        try and code, I strive for efficiency, practicality and effectiveness
        wherever possible and the more I know, the better I am.{" "}
        <div className="quote-container">
          "Data! Data! Data!.. I cannot make bricks without clay!" -Sherlock
          Holmes
        </div>
      </>
    ),
    appDiscussButtons: [
      <>GPT3 Application</>,
      <>
        <button className="monster-button" type="button">
          Monster Application
        </button>
      </>,
      <>
        <button className="third-button" type="button">
          Third
        </button>
      </>,
      <>
        <button className="fourth-button" type="button">
          Fourth
        </button>
      </>,
      <>
        <button className="resume-button" type="button">
          Resume
        </button>
      </>,
    ],
    appDiscuss: [
      <div className="gpt3-discuss">
        GPT3 body and here is another link to that same app
        <Link to="/GPT3App" id="link">
          GPT3 app
        </Link>{" "}
        <span id="close-link">Click to Close</span>
      </div>,
      <>Monster body</>,
      <>third body</>,
      <>fourth body</>,
      <>Resume</>,
    ],
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const [bodyText, setBodyText] = useState(HomepageIntro.body);
  const [inviteText, setInviteText] = useState(HomepageIntro.invite[0]);
  const [inviteText1, setInviteText1] = useState("");
  const [inviteText2, setInviteText2] = useState("");

  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  const [gpt3Discuss, setGpt3Discuss] = useState(
    HomepageMain.appDiscussButtons[0]
  );

  const TextChangeHandlerIchi = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body1);
      setInviteText("");
      setInviteText1(HomepageIntro.invite[1]);
    }, animateDelay);
  };

  const TextChangeHandlerNi = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body2);
      setInviteText1("");
      setInviteText2(HomepageIntro.invite[2]);
    }, animateDelay);
  };

  const TextChangeHandlerSan = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body);
      setInviteText2("");
      setInviteText(HomepageIntro.invite[0]);
    }, animateDelay);
  };

  const TextChangeHandlerYon = async () => {
    setIsButtonAnimating(true);

    setTimeout(() => {
      setIsButtonAnimating(false);
      setGpt3Discuss(HomepageMain.appDiscuss[0]);
    }, animateDelay);
  };

  return (
    <Fragment>
      <div className="home-page-container">
        <section className="intro-container">
          <div className="image-container">
            <h3 className="heading">{HomepageIntro.heading}</h3>
            <img src={me} alt="img not found" />

            <div className="intro">
              <h3>{HomepageIntro.intro}</h3>
            </div>
          </div>

          <div className={`body-container ${isAnimating ? "animate" : ""}`}>
            {bodyText}
          </div>

          <div className="invite-container">
            <span
              onClick={TextChangeHandlerIchi}
              className={`invite invite-ichi ${isAnimating ? "animate" : ""}`}
            >
              {inviteText}
            </span>
            <span
              onClick={TextChangeHandlerNi}
              className={`invite invite-ni ${isAnimating ? "animate" : ""}`}
            >
              {inviteText1}
            </span>
            <span
              onClick={TextChangeHandlerSan}
              className={`invite invite-san ${isAnimating ? "animate" : ""}`}
            >
              {inviteText2}
            </span>
          </div>
        </section>

        <div className="divider"></div>

        <section className="main-container">
          <div className="main-intro-container">{HomepageMain.intro}</div>
          <div className="app-discuss-container">
            <div className="app-discuss-buttons-container">
              <button
                type="button"
                onClick={TextChangeHandlerYon}
                className={`gpt3-button ${
                  isButtonAnimating ? "button-animate" : ""
                }`}
              >
                {gpt3Discuss}
              </button>
              <div>{HomepageMain.appDiscussButtons[1]}</div>
              <div>{HomepageMain.appDiscussButtons[2]}</div>
              <div>{HomepageMain.appDiscussButtons[3]}</div>
              <div>{HomepageMain.appDiscussButtons[4]}</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="footer-container">
          <div className="footer-container">{HomepageFooter.footer}</div>
        </section>
      </div>
    </Fragment>
  );
}

export default Homepage;

import { React, useState, Fragment, useRef } from "react";
import {
  HomepageIntro,
  HomepageMain,
  HomepageFooter,
  animateDelay,
} from "../../simpleConstants";
import me from "../../Assets/me.png";
import "./Homepage.styles.scss";

function Homepage() {
  const [isAnimating, setIsAnimating] = useState(false);

  const [bodyText, setBodyText] = useState(HomepageIntro.body);
  const [inviteText, setInviteText] = useState(HomepageIntro.invite[0]);
  const [inviteText1, setInviteText1] = useState("");
  const [inviteText2, setInviteText2] = useState("");

  const InviteTextChangeHandlerIchi = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body1);
      setInviteText("");
      setInviteText1(HomepageIntro.invite[1]);
    }, animateDelay);
  };

  const InviteTextChangeHandlerNi = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body2);
      setInviteText1("");
      setInviteText2(HomepageIntro.invite[2]);
    }, animateDelay);
  };

  const InviteTextChangeHandlerSan = async () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setBodyText(HomepageIntro.body);
      setInviteText2("");
      setInviteText(HomepageIntro.invite[0]);
    }, animateDelay);
  };

  const invite = {
    invite: [
      <span className="invite" onClick={InviteTextChangeHandlerIchi}>
        {inviteText}
      </span>,
      <span className="invite" onClick={InviteTextChangeHandlerNi}>
        {inviteText1}
      </span>,
      <span className="invite" onClick={InviteTextChangeHandlerSan}>
        {inviteText2}
      </span>,
    ],
  };

  const [isGpt3ButtonClicked, setIsGpt3ButtonClicked] = useState("");
  const [isMonsterButtonClicked, setIsMonsterButtonClicked] = useState("");
  const [isCrownClothingButtonClicked, setIsCrownClothingButtonClicked] =
    useState("");
  const [isFourthButtonClicked, setIsFourthButtonClicked] = useState(""); //not done
  const [isResumeButtonClicked, setIsResumeButtonClicked] = useState("");

  const Gpt3ButtonClickHandler = () => {
    setIsGpt3ButtonClicked(HomepageMain.discussDivsAfterClick[0]);
  };

  const MonsterButtonClickedHandler = () => {
    setIsMonsterButtonClicked(HomepageMain.discussDivsAfterClick[1]);
  };

  const CrownClothingButtonClickedHandler = () => {
    setIsCrownClothingButtonClicked(HomepageMain.discussDivsAfterClick[2]);
  };

  const FourthButtonClickedHandler = () => {
    setIsFourthButtonClicked(HomepageMain.discussDivsAfterClick[3]);
  };

  const ResumeButtonClickedHandler = () => {
    setIsResumeButtonClicked(HomepageMain.discussDivsAfterClick[4]);
  };

  const DiscussButtonsDivsBeforeClick = {
    buttons: [
      <button
        type="button"
        className="buttons gpt3-button"
        onClick={Gpt3ButtonClickHandler}
      >
        GPT3 Application
      </button>,
      <div className="divs">{isGpt3ButtonClicked}</div>,
      <button
        type="button"
        className="buttons monster-button"
        onClick={MonsterButtonClickedHandler}
      >
        Monster Application
      </button>,
      <div className="divs">{isMonsterButtonClicked}</div>,
      <button
        type="button"
        className="buttons crown-clothing-button"
        onClick={CrownClothingButtonClickedHandler}
      >
        Crown Clothing Application
      </button>,
      <div className="divs">{isCrownClothingButtonClicked}</div>,
      <button
        type="button"
        className="buttons fourth"
        onClick={FourthButtonClickedHandler}
      >
        Fourth
      </button>,
      <div className="divs">{isFourthButtonClicked}</div>, //not done
      <button
        type="button"
        className="buttons resume-button"
        onClick={ResumeButtonClickedHandler}
      >
        Resume
      </button>,
      <div className="divs">{isResumeButtonClicked}</div>,
    ],
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
            {invite.invite.map((invite) => {
              return <span key={Math.random()}>{invite}</span>;
            })}
          </div>
        </section>

        <div className="divider"></div>

        <section className="main-container">
          <div className="main-intro-container">{HomepageMain.intro}</div>
          <div className="app-discuss-container">
            <div className="app-discuss-buttons-container">
              {DiscussButtonsDivsBeforeClick.buttons.map((buttonsDivs) => {
                return (
                  <div className="map-buttons-divs" key={Math.random()}>
                    {buttonsDivs}
                  </div>
                );
              })}
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

/*
  const DiscussDivsAfterClick = {
    divs: [
      <div className="gpt3-div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
        quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
        rerum in omnis aut quis laborum perferendis asperiores suscipit ex,
        nulla libero neque.
      </div>,
      <div id="monster-div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
        quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
        rerum in omnis aut quis laborum perferendis asperiores suscipit ex,
        nulla libero neque.
      </div>,
      <div id="thrid-div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
        quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
        rerum in omnis aut quis laborum perferendis asperiores suscipit ex,
        nulla libero neque.
      </div>,
      <div id="fourth-div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
        quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
        rerum in omnis aut quis laborum perferendis asperiores suscipit ex,
        nulla libero neque.
      </div>,
      <div id="resume-div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
        quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
        rerum in omnis aut quis laborum perferendis asperiores suscipit ex,
        nulla libero neque.
      </div>,
    ],
  };
*/

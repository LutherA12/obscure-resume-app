import { Link } from "react-router-dom";

export const animateDelay = 1500;

export const HomepageIntro = {
  heading: "Hello",
  intro: "My name is Luther",
  body: (
    <>
      I've been programming in React for about 1 and a half years consistantly
      and can build webpage applications. I also have experience in using hooks
      and Firebase, as well as some experience with Python, however, I got some
      really good advice from another developer who has been at it for about 5
      years. He told me{" "}
      <span className="accents">
        "focus on one thing, you can learn the rest over time"
      </span>
      , so I plan on studying and using Python much more once I've landed my
      first job. I am writing this project using Vite which I find to be much
      faster than CRA. Here is a link to my{" "}
      <a href="https://github.com/LutherA12" className="github-link">
        Github
      </a>{" "}
      account as well.
    </>
  ),
  body1: (
    <>
      If you've been through my code then you can already tell I'm a fan of
      lists! I do the same thing in Python as in React i.e. I hate when{" "}
      <span className="accents">my JSX and/or main coding base is</span> bogged
      down with text, constants, variables, functions, etc., obviously some of
      it is necessary and I'm not familiar with the state of production code,
      but I try to streamline things where ever possible to ensure the code I
      write is <span className="accents">scalable, reuseable and DRY.</span>{" "}
      However, and quite ironically, this intro alone has cost me three
      functions already. <span className="accents">Go figure.</span>
    </>
  ),
  body2: (
    <>
      Finally, I believe my strongest skills are my soft skills:{" "}
      <span className="accents">I'm a forever student</span> and always willing
      to learn what needs to be done in order to acheve success for any company
      I work with as well as myself.{" "}
      <span className="accents">
        I've worked with many different customers and technicians
      </span>{" "}
      over my previous jobs so I understand how to parse technical jorgon that I
      understand into everyday language without being condesending. I'm also
      primarily a kinesthetic learner, so I enjoy researching, "getting my hands
      dirty", and learning by doing. As a matter of fact, while writing this
      intro I had to research state to get this click effect running properly!
    </>
  ),
  invite: [
    "Would you like to know more?",
    "Would you like to know more?",
    "Thank you for doing your part!",
  ],
};

export const HomepageMain = {
  intro: (
    <>
      In this second portion I want to take the opportunity to briefly discuss
      my apps at the top of this page. I will streamline my resume here too. If
      you want the full version of my resume I have it as a PDF. Why didn't I
      just put my full resume on here? Well, I'll be candid. I've wanted to
      become a software developer for quite some time, however, my actions
      didn't always match my desires; as such I've had a lot of jobs that are
      not partucularly pertinent to development. These were "waste of time" jobs
      if you like and I don't want to give an overage of information unless
      asked directly, I know you are busy. Instead, similar to how I try and
      code, I strive for efficiency, practicality and effectiveness wherever
      possible and the more I know, the better I am.{" "}
      <span className="quote-container">
        "Data! Data! Data!.. I cannot make bricks without clay!" -Sherlock
        Holmes
      </span>
    </>
  ),

  discussDivsAfterClick: [
    <div className="gpt3-div">
      This was the first full application that I sat through and wrote from
      start to finish. I'm a bit ashamed to say it took me two times over the
      span of a few months to sit through this one. <br />
      <br /> I started this when I was very new to React so I didn't really
      understand much about the BEM naming convention, state, the map method, or
      much of anything else for that matter. I understand a bit more now than
      before and working through this app really helped cement some of those
      concepts for me. This is a full landing page for GPT3 "chat gpt", it
      doesn't have any functionallity behind it, but that can of course be added
      if necessary and this page can be tweaked for different landing page uses.{" "}
      <br />
      <br />I tried to make this app as DRY as I could and the coding you see
      now is a bit different from how it was when I coded along. Namely, I
      pushed everything I could into objects and put those in a separate helper
      file so that I could import them where ever I needed without bogging down
      my JSX. This page is also fully responsive down to cell phone screens.{" "}
      <br />
      <br />
      <span>
        {" "}
        Here is another link{" "}
        <Link to="/GPT3App" className="gpt3-object-link">
          GPT3
        </Link>{" "}
        to this app.
      </span>
    </div>,
    <div className="monster-div">
      start
      <br />
      <br />
      <span>
        {" "}
        Here is another link{" "}
        <Link to="/MonsterApp" className="monster-object-link">
          Monster Rolodex
        </Link>{" "}
        to this app.
      </span>
    </div>,
    <div className="crown-div">
      start <br />
      <br />{" "}
      <span>
        {" "}
        Here is another link{" "}
        <Link to="/CrownApp" className="crown-object-link">
          Crown Clothing
        </Link>{" "}
        to this app.
      </span>
    </div>,
    <div className="fourth-div">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
      quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
      rerum in omnis aut quis laborum perferendis asperiores suscipit ex, nulla
      libero neque.
    </div>,
    <div className="resume-div">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad,
      quos incidunt voluptatibus blanditiis ipsam voluptates exercitationem,
      rerum in omnis aut quis laborum perferendis asperiores suscipit ex, nulla
      libero neque.
    </div>,
  ],
};

export const HomepageFooter = {
  footer: <>Footer of the page</>,
};

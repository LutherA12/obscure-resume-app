import { Link } from "react-router-dom";

export const animateDelay = 1500;

export const HomepageIntro = {
  heading: "Hello",
  intro: "My name is Luther",
  body: (
    <>
      I'm a self taught developer and I've been coding in React for about one
      and a half years. I also have experience in Firebase (a database service),
      fetching API's, using Context, as well as some experience with Python.
      When I first began my developer journey I jumped around from language to
      language trying to learn everything, however, I got some really good
      advice from a senior developer. He told me{" "}
      <span className="accents">
        "focus on one thing, you can learn the rest over time"
      </span>
      , so React has become my main focus. I am writing this project using Vite
      and here is a link to my{" "}
      <a href="https://github.com/LutherA12" className="github-link">
        Github
      </a>{" "}
      account as well.
    </>
  ),
  body1: (
    <>
      If you've been through my code then you can already tell I'm a fan of
      lists! I did the same thing in Python as in React i.e. I hate when{" "}
      <span className="accents">
        my return statement and/or main coding base is
      </span>{" "}
      bogged down with strings, objects, variables, functions, etc., obviously
      some of it is necessary and I'm not familiar with the state of production
      code, but I try to streamline things where ever possible to ensure the
      code I write is{" "}
      <span className="accents">scalable, reuseable and DRY.</span> Ironically,
      this intro alone has already cost me three functions.{" "}
      <span className="accents">Go figure.</span>
    </>
  ),
  body2: (
    <>
      Finally, I believe my strongest skills are my soft skills:{" "}
      <span className="accents">I'm a forever student</span> and always willing
      to learn what needs to be done in order to acheve success for any company
      I work with as well as for myself.{" "}
      <span className="accents">
        Customer service was/is a large part of my skill set
      </span>{" "}
      over my previous jobs so I know how to parse technical jorgon into
      everyday language without being condesending. I'm also primarily a
      kinesthetic learner so I enjoy researching, "getting my hands dirty", and
      learning by doing. As a matter of fact, while writing this intro I had to
      research state to get this click effect running properly!
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
      my apps at the top of this page. One thing to note is that I make use of a
      lot of helper files such as component/container export files and simple
      constant files. I do this so that I can bottleneck those files and use one
      import statement to bring them where they are necessary. It's more work on
      the frontend, but it saves me hassle on the backend when folder structure
      gets more complex since the helper files always have the same name and
      location. <br />
      <br /> I will streamline my resume on the last button below here as well.
      If you want the full version I have it in PDF form at the bottom of the
      page. Why not just put my full resume here? Well, I'll be candid. I've
      wanted to become a software developer for quite some time, however, my
      actions didn't always match my desires and some of those actions have led
      me to a lot of jobs that are not pertinent to development. These were
      "waste of time" jobs if you like and I don't want to give needless
      information unless asked directly, I know you are busy people. Instead,
      similar to how I try and code, I strive for efficiency, practicality and
      effectiveness wherever possible and the more I know, the better I am.
    </>
  ),

  discussDivsAfterClick: [
    <div className="gpt3-div">
      This was the first full application that I sat through and wrote from
      start to finish. I'm a bit ashamed to say it took me two attempts over the
      span of a few months to complete. The reason why? I wanted to understand
      what I was writing and why it worked, not just mindlessly copy a tutorial.
      <br />
      <br /> When I started this project I was very new to React so I didn't
      really understand much about the BEM naming convention, state, the map
      method, or much of anything else for that matter, but I found working
      through this app really helped cement some of those concepts for me once I
      had more knowledge under my belt. <br />
      <br /> This is a full landing page for GPT3 (chat gpt) which I've added
      functionallity to since the basic design was simply just the landing page.
      Now, the sign in/sign out buttons work via Firebase and the articles are
      clickable links. I did a bit of research on chat gpt and wrote the
      articles as coherently as I could if you're in the mood for some more
      reading but please take them with a grain of salt. <br />
      <br />I also tried to make this app as DRY as I could and the coding you
      see now is a bit different from how it was originally. Namely, I moved
      everything within reason into objects and put those in a separate helper
      file so that I could import them where they are needed. This page is also
      fully responsive down to cell phone screens. <br />
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
      I wrote this app a bit later into my React journey. I usually prefer
      functional components but I wanted to try my hand at class components. For
      the record I still prefer functional components, however, whatever the
      production code calls for I will be ready to learn, understand and teach
      if necessary. <br />
      <br />
      This is a simple filtering app that consumes an api then parses the
      returned object into JSON and uses the filter method for the name
      (target.value) so that each monster can be searched and sorted by name as
      you type.
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
      This is my largest project by far and for it I'm attending and learning
      from ZTM which is similar to Udemy. <br />
      <br />
      Crown is a fully realized clothing web app with the database service
      Firebase attached. The features includes sign in/sign out via Google popup
      and email/password, various web pages each with links that are fully
      functional as well as use of user context in order to leverage the
      consumed user object from the sign in/sign up to use it where it is
      needed. <br />
      <br />I was also able to use context for this project which was a very
      large and difficult concept for me at first glance. However, I am
      continuing to understand how it works as I use it more and I have no doubt
      that I can become extremly efficiant with it. <br />
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
    </div>, //not complete
    <div className="resume-div">
      Here is my streamlined resume as promised, I will go through my last few
      jobs from present to past and my educational background.
      <br />
      <br />
      <p className="resume-title-exp">Education</p>
      <br />
      <p>
        <span className="resume-job-categories">School: </span> Devry University
        / Columbus State Community College / My Computer Carrer Technical School
      </p>
      <br />
      <p>
        <span className="resume-job-categories">Year: </span> 2007 / 2008 / 2020
      </p>
      <br />
      <p>
        <span className="resume-job-categories">Graduate: </span> No / No / Yes
      </p>
      <br />
      <p className="resume-title-exp">Professional Experience</p>
      <br />
      <ul className="ENA">
        <li>
          <span className="resume-job-categories">Job Title: </span>Customer
          Support Anaylist
        </li>
        <li>
          <span className="resume-job-categories">Company: </span>ENA "Education
          Networks of America"
        </li>
        <li>
          <span className="resume-job-categories">Role: </span>Tech
          Support/Customer Service/Error Monitoring
        </li>
        <li>
          <span className="resume-job-categories">Current Job: </span>Yes
        </li>
        <li>
          <span className="resume-job-categories">Duration: </span>Sept 2022 -
          Current
        </li>
        <br />
        <li>
          <span className="resume-job-categories">Responsibilities:</span>
          <br />
          <br />
          <ul>
            <li>
              - My main focus here is to create and work tickets that are auto
              generated by a web app called Icinga. The auto generator is based
              on different errors that we receive from the various businesses we
              monitor.
            </li>
            <br />
            <li>
              - Along with my main detail, I handle inbound and outbound calls.
              These calls are split between customers and various ISP's, I give
              and get updates about each ticket and take the appropriate actions
              based on the information I receive.
            </li>
            <br />
            <li>
              - This is exclusivly software support, so we dispatch technicians
              as needed and are allowed to make certain higher level decisions
              such as putting tickets on hold, shutting down and/or resetting
              onsite devices, putting in maintenance hold times and requests,
              etc...
            </li>
            <br />
            <li>
              - I work on a team as well as independently and need to manage
              multiple tasks at once much like other tech support positions I've
              had. I also have opporitunities to troubleshoot customer devices
              and solve simple problems when necessary.
            </li>
            <br />
            <li>
              - Finally, this is primarily a customer facing position, so
              customer service is at the forefront of what I do. This is where I
              practice turning "geek speak" from our engineers into everyday
              verbage for the end users that I speak to.
            </li>
            <br />
            <p>
              Contact Info: 615-312-6000 / My supervisor: Aurora Rose / Address:
              618 Grassmere Park Dr #12 Nashville, TN 37211 / Link to Website:{" "}
              <Link to="https://www.ena.com/" className="resume-links">
                ENA
              </Link>
            </p>
          </ul>
        </li>
      </ul>
      <div className="resume-divider"></div>
      <ul className="NetOps">
        <li>
          <span className="resume-job-categories">Job Title: </span>Application
          Support Technician
        </li>
        <li>
          <span className="resume-job-categories">Company: </span>NetOps
          Consulting
        </li>
        <li>
          <span className="resume-job-categories">Role: </span>Desktop and
          Application Support
        </li>
        <li>
          <span className="resume-job-categories">Current Job: </span>No
        </li>
        <li>
          <span className="resume-job-categories">Duration: </span>March 2022 -
          July 2022
        </li>
        <li>
          <span className="resume-job-categories">Responsibilities:</span>
        </li>
        <br />
        <br />
        <ul>
          <li>
            - This position was far more in-depth with software support. We were
            the main tech support for various schools and hospitals, so we had
            to know any and all of the end user applications regardless of
            whether they were desktop or web apps, popular or nuance, open
            source or proprietary. We had to know both windows and MAC OS along
            with all of their features.
          </li>
          <br />
          <li>
            - We worked in a ticketing system called ConnectWise and we were
            allowed to use a screen sharing app in order to commandeer an end
            users PC and solve issues ourselves.
          </li>
          <br />
          <li>
            - Inbound and outbound calls were a bit more frequent here, but the
            most frequent was emails and we had to manually create each ticket
            and then work them with ConnectWise.
          </li>
          <br />
          <li>
            - There was a small measure of hardware support as well with this
            job since we were located in a NOC that was attached to one of the
            schools. We would commute from school to school on a regular basis
            and assist various users (teachers, students, etc.) with issues
            they've called or emailed for.
          </li>
          <br />
          <p>
            Contact Info: 330-263-2950 / My supervisor: David Mcbride / Address:
            2241 Benden Dr, Wooster, OH 44691 / Link to Website:{" "}
            <Link
              to="https://www.netopsconsulting.com/"
              className="resume-links"
            >
              NetOps Consulting
            </Link>
          </p>
        </ul>
      </ul>
      <div className="resume-divider"></div>
      <ul className="fenix-group">
        <li>
          <span className="resume-job-categories">Job Title: </span>Cable
          Installation Technician
        </li>
        <li>
          <span className="resume-job-categories">Company: </span>Fenix Group
          LLC
        </li>
        <li>
          <span className="resume-job-categories">Role: </span>Installing Cable,
          Internet and Phone for residential and small business
        </li>
        <li>
          <span className="resume-job-categories">Current Job: </span>No
        </li>
        <li>
          <span className="resume-job-categories">Duration: </span>Sept 2021 -
          Feb 2022
        </li>
        <li>
          <span className="resume-job-categories">Responsibilities:</span>
        </li>
        <br />
        <br />
        <ul>
          <li>
            - I ran cable, used ladders and all manner of hand and power tools,
            drove a company vehical, installed and configured hardware and
            software devices for Spectrum services. The Fenix group is a thrid
            party contractor.
          </li>
          <br />
          <li>
            - This job was very independent, there was very little to no
            supervision unless some special case would arise so personal time
            management was the biggest focus here.
          </li>
          <br />
          <li>
            - This was also a very high pressure type of job. If you've ever
            worked with the general public or been inside of a stangers home
            then you know what I'm talking about. I've been in some literal life
            or death situations while working there.
          </li>
          <br />
          <li>
            - This was also a physically demanding job. A normal day was 10 to
            12 hrs of consistant physical labor. We served the greater Columbus
            area east, but if need be they rolled us anywhere they could.
            Basements, attics, crawlspaces, bugs, varmints, and critters were a
            regular occurance for the inside of establishments and day, night,
            rain, snow, ice, dirt, mud, wind, even some weaker lightning and
            weaker tornados were a regular occurance for the outside and we were
            out there in all of it installing cable.
          </li>
          <br />
          <li>
            - There was a small amount of troubleshooting as well, but only if
            you had the necessary skills to do so which I did. It wasn't
            mandatory, but if you could help a customer with a hardware/software
            issue beyond just the installation you were encouraged to do so.
          </li>
          <br />
          <p>
            Contact Info: 937-387-8830 / My supervisor: Phil / Address: 2166
            Cloverleaf St E, Columbus, OH 43232 / Link to Website:{" "}
            <Link to="https://www.thefenixgroup.org/" className="resume-links">
              Fenix Group LLC
            </Link>
          </p>
        </ul>
      </ul>
      <div className="resume-divider"></div>
      <ul className="Amazon">
        <li>
          <span className="resume-job-categories">Job Title: </span>Data Center
          Hardware/Software Technician
        </li>
        <li>
          <span className="resume-job-categories">Company: </span>Amazon/CER INC
        </li>
        <li>
          <span className="resume-job-categories">Role: </span>Hardware/Software
          Technician
        </li>
        <li>
          <span className="resume-job-categories">Current Job: </span>No
        </li>
        <li>
          <span className="resume-job-categories">Duration: </span>May 2021-Sept
          2021
        </li>
        <li>
          <span className="resume-job-categories">Responsibilities:</span>
        </li>
        <br />
        <br />
        <ul>
          <li>
            - This is a 24/7 data center where I would work tickets for hardware
            and software issues in the server rooms at the Amazon Data Center.
            Tickets came in with all manner of issues via the Amazon monitoring
            system, we would then pick a few tickets, roll our PC cart into the
            server room after procuring any necessary hardware parts and get to
            work.
          </li>
          <br />
          <li>
            - The data center was very high level security, RFID badges at every
            door with security checkpoints, metal detectors and a 5 to 10 second
            timer if any one door was not closed fast enough.
          </li>
          <br />
          <li>
            - There were also networking tickets that we could work if we had
            the proper knowledge. They would give us access to their fiber room
            which is where all of the networking servers were.
          </li>
          <br />
          <li>
            - We would destroy HDD's and SSD's on a regular basis, "hot swaps"
            were a regular occurance in order to keep all the servers in working
            order.
          </li>
          <br />
          <li>
            - There was a fair bit of physical and mental labor involved as
            well. Each server was a case with many metal cases that housed the
            hardware components. Each metal case was a long rectangle and
            weighted about 50lbs. Also, it was extremly hot and very noisy in
            the server rooms.
          </li>
          <br />
          <li>
            - Finally, there was something like command line manipulation for
            checking devices, reading error codes, running basic commands and
            receiving output, etc. It was very basic input/output.
          </li>
          <br />
          <p>
            Contact Info: 586-884-6955 / My supervisor: Michael / Address: 6100
            Auburn Road, Shelby Township, MI 48317 / Link to Website:{" "}
            <Link to="http://cergroupna.com/" className="resume-links">
              CER INC
            </Link>
          </p>
        </ul>
      </ul>
      <div className="resume-divider"></div>
      <ul className="ADT">
        <li>
          <span className="resume-job-categories">Job Title: </span>Home
          Security Technician
        </li>
        <li>
          <span className="resume-job-categories">Company: </span>ADT/Insight
          Global
        </li>
        <li>
          <span className="resume-job-categories">Role: </span>Home Security
          Technician
        </li>
        <li>
          <span className="resume-job-categories">Current Job: </span>No
        </li>
        <li>
          <span className="resume-job-categories">Duration: </span>June 2020 -
          May 2021
        </li>
        <li>
          <span className="resume-job-categories">Responsibilities:</span>
        </li>
        <br />
        <br />
        <ul>
          <li>
            - I installed the hardware side and configured the software side of
            security systems for residential and small businesses. This included
            smoke, CO2, motion and heat sensors, wired and wireless cameras,
            door and window contact sensors, auto thermostat and garage door
            openers, etc...
          </li>
          <br />
          <li>
            - Similar to Spectrum, I used hand and power tools, was in
            basements, attics, crawl spaces and used ladders, I also had to work
            with the general public and the hazards that can bring.
          </li>
          <br />
          <li>
            - I drove a company truck as well, however, unlike Spectrum, most of
            the work for ADT was done inside the home or business which gave
            more opportunity to conversate with customers.
          </li>
          <br />
          <li>
            - On a personal note, I was hand selected to be the first temporary
            worker in four years due to my manager at the time Zane looking
            favorably on my resume and selecting me himself.
          </li>
          <br />
          <p>
            {" "}
            Contact Info: 855-485-8732 / My supervisor: Zane / Address: 330 Rush
            Alley Suite 850, Columbus, OH 43215 / Link to Website:{" "}
            <Link
              to="https://insightglobal.com/locations/ohio/staffing-agency-columbus-oh/?utm_source=gmb&utm_medium=Yext"
              className="resume-links"
            >
              Insight Global/ADT
            </Link>
          </p>
        </ul>
      </ul>
    </div>,
  ],
};

export const HomepageFooter = {
  footer: <>Footer of the page</>,
};

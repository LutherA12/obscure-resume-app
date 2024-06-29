import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";

function WhatGPT3() {
  const WhatGpt3InfoA = [
    {
      title: "What is GPT-3",
      text: `As we've covered a little bit in the intro, GPT-3 is a cutting edge AI
     that is very similar to Chat GPT with a few key differences! Sounds good
     right? We think so!`,
    },
    {
      title: "Convenience",
      text: `Convenience is something that is everywhere nowadays and GPT-3 has no shortage of convenient ways for usage.
      Your phone, laptop, video game console, tablet, just about any smart electronic device can use GPT-3!`,
    },
  ];

  const WhatGpt3InfoB = [
    {
      title: "Chatbots",
      text: `These chatbots will be deployed in various places to support the main
       "head" of GPT3. Anyone who signs up now will have free access!`,
    },
    {
      title: "Knowledgebase",
      text: `GPT3 pulls from an extensive knowledgebase to give you the widest array
       of answers possible. We are very serious about truth and we want you to
       have all the information you can at your disposel so that you can make
       the most informed decision possible!`,
    },
    {
      title: "Education",
      text: `Learning and knowledge, that is what we are all about and we ensure that
       GPT3 is up to speed on the latest and greatest things! Don't believe us?
       We dare you to try it!`,
    },
  ];

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-container_featureA">
        {WhatGpt3InfoA.map((info, index) => {
          return <Feature key={index} title={info.title} text={info.text} />;
        })}
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination!!
        </h1>
        <p>
          <a href="#blog">Explore the Blogs</a>
        </p>
      </div>

      <div className="gpt3__whatgpt3-container_featureB">
        {WhatGpt3InfoB.map((info, index) => {
          return <Feature key={index} title={info.title} text={info.text} />;
        })}
      </div>
    </div>
  );
}

export default WhatGPT3;

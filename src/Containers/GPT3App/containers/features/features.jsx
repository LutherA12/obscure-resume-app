import "./features.styles.scss";
import { Feature } from "../../components/componentExports";

export default function Features() {
  const FeaturesInfo = [
    {
      title: "Improving End User Mistrust",
      text: "It's very easy to mistrust anyone working with AI, and robotics in general, remember skynet? Well, we aim to rectify that issue and help end users understand that AI is undoubtedly under our control!",
    },
    {
      title: "Becoming Active",
      text: "One of our goals is to become very active in any community we can, and that may mean community service, giving to local churches and food shelters, or anything else we can do to assist!",
    },
    {
      title: "Our message is clear",
      text: "Help people with technology and doing what we can for the community, it's that or nothing!",
    },
    {
      title: "Ethics",
      text: "Ethics are and will always be a large part of AI. Bias is prevelent and we do our best to have as many points of view while coding these systems in order to eliminate as much bias as we can!",
    },
  ];

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now! You just need to realize it! Step into the future
          today & make it happen!
        </h1>
        <p>Request Early Access to Get Started!</p>
      </div>

      <div className="gpt3__features-container">
        {FeaturesInfo.map((features, index) => {
          return (
            <Feature title={features.title} text={features.text} key={index} />
          );
        })}
      </div>
    </div>
  );
}

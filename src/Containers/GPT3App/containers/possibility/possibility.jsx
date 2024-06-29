import "./possibility.styles.scss";
import possibility from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="image not found" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination!!
        </h1>
        <p>
          We've tried to save the best for last, but we really believe in our
          product! We know that virtual reality is still in it's infant stages,
          but imagine it: go anywhere, do anything, be anyone, gain knowledge
          beyond what you could without it, there is no limit to what you could
          acheve!
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

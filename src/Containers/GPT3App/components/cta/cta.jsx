import { Link } from "react-router-dom";
import "./cta.styles.scss";

export default function Cta() {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities!</h3>
      </div>

      <div className="gpt3__cta-btn">
        <Link to="/SignUpForm">
          <button type="button">Get Started!</button>
        </Link>
      </div>
    </div>
  );
}

import { React } from "react";
import { Link } from "react-router-dom";
import "./sign-up-form.styles.scss";

export default function SignUpForm() {
  return (
    <>
      <div>
        <form className="sign-up-form-container gradient__bg">
          <h4>Welcome!</h4>
          <input type="text" placeholder="Pick a username"></input>
          <input type="email" placeholder="Enter your email"></input>
          <input type="password" placeholder="Enter your password"></input>
          <div className="sign-up-form-button-container">
            <Link to="/ThankYouPage" className="button-link">
              <button type="submit">Click to Sign Up</button>
            </Link>
            <Link to="/GPT3App" className="button-link">
              <button type="button">Reconsidering?</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

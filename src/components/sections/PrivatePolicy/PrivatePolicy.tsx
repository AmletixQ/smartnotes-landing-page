import Facebook from "assets/social-icons/facebook.svg";
import LinkedIn from "assets/social-icons/linkedin.svg";
import Twitter from "assets/social-icons/twitter.svg";
import YouTube from "assets/social-icons/youtube.svg";
import "./PrivatePolicy.scss";

const PrivatePolicy = () => {
  return (
    <section className="privatepolicy-section">
      <p>
        @2024 SmartNotesI. All Rights Reserved. <a href="#">@iamhervewabo</a>
      </p>
      <div className="social-icons">
        <a href="#" className="icon">
          <img src={Facebook} alt="" />
        </a>
        <a href="#" className="icon">
          <img src={LinkedIn} alt="" />
        </a>
        <a href="#" className="icon">
          <img src={Twitter} alt="" />
        </a>
        <a href="#" className="icon">
          <img src={YouTube} alt="" />
        </a>
      </div>
    </section>
  );
};

export default PrivatePolicy;

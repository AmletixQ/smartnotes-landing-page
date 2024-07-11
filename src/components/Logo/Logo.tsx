import LogoIcon from "assets/social-icons/logo-icon.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoIcon} alt="Logo" />
      <h5>SmartNotes</h5>
    </div>
  );
};

export default Logo;

import ArrowP3 from "assets/icons/arrow-primary-300.svg";
import Navbar from "components/Navbar/Navbar";
import Logo from "components/Logo/Logo";
import Button from "components/Button/Button";
import "./Header.scss";
import BurgerMenu from "components/BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <Button intent={"gradient"}>
        Get Started
        <img src={ArrowP3} alt="p3a" />
      </Button>
      <BurgerMenu />
    </header>
  );
};

export default Header;

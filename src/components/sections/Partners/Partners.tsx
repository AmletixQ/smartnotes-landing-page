import Logo1 from "src/assets/logos/logos-1.svg";
import Logo2 from "src/assets/logos/logos-2.svg";
import Logo3 from "src/assets/logos/logos-3.svg";
import Logo4 from "src/assets/logos/logos-4.svg";
import Logo5 from "src/assets/logos/logos-5.svg";
import Logo6 from "src/assets/logos/logos-6.svg";
import Logo7 from "src/assets/logos/logos-7.svg";
import Logo8 from "src/assets/logos/logos-8.svg";
import "./Partners.scss";

const Partners = () => {
  return (
    <section className="partners">
      <img src={Logo1} alt="1" />
      <img src={Logo2} alt="2" />
      <img src={Logo3} alt="3" />
      <img src={Logo4} alt="4" />
      <img src={Logo5} alt="5" />
      <img src={Logo6} alt="6" />
      <img src={Logo7} alt="7" />
      <img src={Logo8} alt="8" />
      <div className="overlay"></div>
    </section>
  );
};

export default Partners;

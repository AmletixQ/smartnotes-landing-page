import CTAIllustration from "assets/block-icons/CTA shapes.svg";
import ArrowP3 from "assets/icons/arrow-primary-300.svg";
import "./CTA.scss";
import Button from "components/Button/Button";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="content">
        <div className="info">
          <h2>
            Unlock the Full Potential of{" "}
            <span className="gradient">SmartNotes</span>
          </h2>
          <p>
            Ready to streamline your workflow and boost your productivity? Start
            your free trial of SmartNotes today and experience the power of
            smart note-taking.
          </p>
        </div>
        <Button intent={"gradient"} weight={"bold"}>
          Sign Up for Free
          <img src={ArrowP3} alt="" />
        </Button>
      </div>
      <img src={CTAIllustration} alt="CTA Illustration" />
    </section>
  );
};

export default CTA;

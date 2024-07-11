import Plan from "./Plan/Plan";
import individual from "assets/pricing-icons/individual-plan.svg";
import team from "assets/pricing-icons/team-plan.svg";
import enterprise from "assets/pricing-icons/enterprise-plan.svg";
import arrowRotated from "assets/icons/arrow-gradient-rotated.svg";
import arrowP3 from "assets/icons/arrow-primary-300.svg";
import "./Plans.scss";

const Plans = () => {
  return (
    <div className="plans">
      <Plan intent={"accent"}>
        <Plan.Heading>
          <img src={individual} alt="Individual" />
          Individual plan
        </Plan.Heading>

        <Plan.Price>
          <h2>$9.99</h2>
          <span>/ month</span>
        </Plan.Price>

        <Plan.Features>
          <Plan.Feature>Real-time collaboration</Plan.Feature>
          <Plan.Feature>AI-powered organization</Plan.Feature>
          <Plan.Feature>Customizable templates</Plan.Feature>
          <Plan.Feature>5GB cloud storage</Plan.Feature>
          <Plan.Feature>Basic integrations</Plan.Feature>
        </Plan.Features>

        <div className="button-container">
          <Plan.Button intent={"accent"}>
            Start Free Trial
            <img src={arrowRotated} alt="Arrow" />
          </Plan.Button>
          <span>No credit card required</span>
        </div>
      </Plan>
      <Plan intent={"primary"}>
        <Plan.Heading>
          <img src={team} alt="Individual" />
          Team plan
        </Plan.Heading>

        <Plan.Price>
          <h2>$19.99</h2>
          <span>/ month</span>
        </Plan.Price>

        <Plan.Features>
          <Plan.Feature>Everything in the Individual Plan</Plan.Feature>
          <Plan.Feature>Unlimited cloud storage</Plan.Feature>
          <Plan.Feature>Advanced integrations</Plan.Feature>
          <Plan.Feature>Team management and permissions</Plan.Feature>
          <Plan.Feature>Shared templates and note libraries</Plan.Feature>
        </Plan.Features>

        <div className="button-container">
          <Plan.Button intent={"gradient"}>
            Start Free Trial
            <img src={arrowP3} alt="ap3" />
          </Plan.Button>
          <span>No credit card required</span>
        </div>
      </Plan>
      <Plan intent={"accent"}>
        <Plan.Heading>
          <img src={enterprise} alt="Individual" />
          Enterprise plan
        </Plan.Heading>

        <Plan.Price>
          <h2>Custom</h2>
        </Plan.Price>

        <Plan.Features>
          <Plan.Feature>Everything in the Team Plan</Plan.Feature>
          <Plan.Feature>Dedicated account manager</Plan.Feature>
          <Plan.Feature>Enterprise-grade security</Plan.Feature>
          <Plan.Feature>Customized onboarding</Plan.Feature>
          <Plan.Feature>Advanced analytics</Plan.Feature>
        </Plan.Features>

        <div className="button-container">
          <Plan.Button intent={"accent"}>
            Contact support <img src={arrowRotated} alt="Arrow" />
          </Plan.Button>
          <span>No credit card required</span>
        </div>
      </Plan>
    </div>
  );
};

export default Plans;

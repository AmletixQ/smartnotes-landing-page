import { VariantProps, cva } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import Button, { ButtonProps } from "components/Button/Button";
import tick from "assets/icons/tick.svg";
import "./Plan.scss";

const plan = cva("plan", {
  variants: {
    intent: {
      accent: "accent",
      primary: "primary",
    },
  },
});

interface PlanProps extends FC<VariantProps<typeof plan> & PropsWithChildren> {
  Heading: FC<PropsWithChildren>;
  Price: FC<PropsWithChildren>;
  Features: FC<PropsWithChildren>;
  Feature: FC<PropsWithChildren>;
  Button: FC<ButtonProps>;
}

const Plan: PlanProps = ({ intent, children }) => {
  return <div className={plan({ intent })}>{children}</div>;
};

Plan.Heading = ({ children }) => <div className="plan-heading">{children}</div>;
Plan.Price = (props) => <div className="plan-price" {...props} />;
Plan.Features = ({ children }) => <div className="plan-features">{children}</div>;
Plan.Feature = (props) => (
  <div className="feature">
    <img src={tick} alt="Tick" />
    {props.children}
  </div>
);
Plan.Button = Button;

export default Plan;

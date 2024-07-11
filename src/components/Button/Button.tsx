import { type VariantProps, cva } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";
import "./Button.scss";

const button = cva("button", {
  variants: {
    intent: {
      gradient: "gradient",
      accent: "accent",
    },
    weight: {
      bold: "bold",
    },
  },
});

export interface ButtonProps extends PropsWithChildren, VariantProps<typeof button> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ intent, weight, children, className }) => {
  return (
    <button className={button({ intent, weight }) + ` ${className}`}>
      {children}
    </button>
  );
};

export default Button;

import AccordionItem, { Props } from "./AccordionItem/AccordionItem";
import "./Accordion.scss";

const items: Props[] = [
  {
    title: "What is SmartNotes?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: false,
  },
  {
    title: "How do I get started with SmartNotes?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: true,
  },
  {
    title: "What are the key features of SmartNotes?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: false,
  },
  {
    title: "How much does SmartNotes cost?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: false,
  },
  {
    title: "Who is SmartNotes for?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: false,
  },
  {
    title: "What is SmartNotes?",
    summary:
      "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
    status: false,
  },
];

const Accordion = () => {
  return (
    <div className="accordion-container">
      {items.map((item) => (
        <AccordionItem {...item} />
      ))}
    </div>
  );
};

export default Accordion;

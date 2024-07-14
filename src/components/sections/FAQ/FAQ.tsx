import Accordion from "components/Accordion/Accordion";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="info">
        <h2>
          Frequently Asked <span className="gradient">Questions</span>
        </h2>
        <p>
          We've compiled a list of the most frequently asked questions about
          SmartNotes to help you get the information you need. If you have any
          other questions, feel free to reach out to our support team.
        </p>
      </div>
      <Accordion />
    </section>
  );
};

export default FAQ;

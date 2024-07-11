import icon1 from "assets/features-icons/cross-platform-like.svg";
import icon2 from "assets/features-icons/customizable-templates.svg";
import icon3 from "assets/features-icons/secure-cloud-storage.svg";
import icon4 from "assets/features-icons/real-time.svg";
import icon5 from "assets/features-icons/hashtag.svg";
import icon6 from "assets/features-icons/integrations.svg";
import Card from "./Card/Card";
import "./Cards.scss";

const cards = [
  {
    title: "Cross-Platform Accessibility",
    details:
      "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
    icon: icon1,
  },
  {
    title: "Customizable Templates",
    details:
      "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
    icon: icon2,
  },
  {
    title: "Secure Cloud Storage",
    details:
      "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
    icon: icon3,
  },
  {
    title: "Real-Time Collaboration",
    details:
      "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
    icon: icon4,
  },
  {
    title: "AI-Powered Organization",
    details:
      "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
    icon: icon5,
  },
  {
    title: "Integrations",
    details:
      "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c",
    icon: icon6,
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
};

export default Cards;

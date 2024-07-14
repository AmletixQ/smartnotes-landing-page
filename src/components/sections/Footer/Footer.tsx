import Logo from "components/Logo/Logo";
import ArrowRotated from "assets/icons/arrow-gradient-rotated.svg";
import "./Footer.scss";
import LinkContainers from "components/LinkContainers/LinkContainers";

export interface Link {
  name: string;
  link: string;
}

export interface Links {
  title: string;
  links: Link[];
}

const links: Links[] = [
  {
    title: "Product",
    links: [
      {
        name: "About",
        link: "#",
      },
      {
        name: "Features",
        link: "#",
      },
      {
        name: "Pricing",
        link: "#",
      },
      {
        name: "Integrations",
        link: "#",
      },
      {
        name: "FAQs",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Our Story",
        link: "#",
      },
      {
        name: "Team",
        link: "#",
      },
      {
        name: "Careers",
        link: "#",
      },
      {
        name: "Press",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of Service",
        link: "#",
      },
      {
        name: "Privacy Policy",
        link: "#",
      },
      {
        name: "Cookie Policy",
        link: "#",
      },
      {
        name: "Acceptable Use",
        link: "#",
      },
      {
        name: "Refund Policy",
        link: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Webinars",
        link: "#",
      },
      {
        name: "Case Studies",
        link: "#",
      },
      {
        name: "Templates",
        link: "#",
      },
      {
        name: "Help Center",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <Logo />
        <form>
          <input type="email" placeholder="email@smartnote.io" />
          <button>
            <img src={ArrowRotated} />
          </button>
        </form>
      </div>
      <LinkContainers list={links} />
    </footer>
  );
};

export default Footer;

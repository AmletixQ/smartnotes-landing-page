import "./Navbar.scss";

const links = [
  { name: "Features", link: "" },
  { name: "Pricing", link: "" },
  { name: "Support", link: "" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      {links.map(({ name, link }) => (
        <a key={name} href={link}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;

import Cards from "components/Cards/Cards";
import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="info">
        <h2>
          Discover the Power of <span className="gradient">SmartNotes</span>
        </h2>
        <p>
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Features;

import Button from "components/Button/Button";
import ArrowP3 from "src/assets/icons/arrow-primary-300.svg";
import AbstractShapes from "src/assets/block-icons/abstract-shapes.svg";
import "./Heading.scss";

const Heading = () => {
  return (
    <section className="heading">
      <div>
        <div className="content">
          <h1>
            <span>Intelligent</span> cloud-based <span>note-taking</span> and
            collaboration tool
          </h1>
          <p>
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <Button intent={"gradient"}>
            Sign Up <img src={ArrowP3} alt="P3A" />
          </Button>
        </form>
      </div>
      <div className="illustration-container">
        <img src={AbstractShapes} alt="Abstract Shapes" />
      </div>
    </section>
  );
};

export default Heading;

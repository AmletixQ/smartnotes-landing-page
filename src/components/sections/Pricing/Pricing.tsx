import Plans from "components/Plans/Plans";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="info">
        <h2>
          <span className="gradient">Pricing</span> & Plans
        </h2>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      {/* TODO: Create switch button */}
      <Plans />
    </section>
  );
};

export default Pricing;

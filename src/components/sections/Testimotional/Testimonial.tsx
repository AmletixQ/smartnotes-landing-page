import { FC } from "react";
import "./Testimonial.scss";

interface Props {
  summury: string;
  fullname: string;
  position: string;
}

const Testimonial: FC<Props> = ({ fullname, position, summury }) => {
  return (
    <section className="testimonial">
      <div className="content">
        <div className="text">
          <h5>{summury}</h5>
        </div>
        <div className="info">
          <p>{fullname}</p>
          <p className="position">{position}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

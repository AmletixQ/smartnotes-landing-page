import { FC, MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowRotated from "assets/icons/arrow-gradient-rotated.svg";
import ArrowRight from "assets/icons/arrow-gradient-right.svg";
import "./AccordionItem.scss";

export interface Props {
  title: string;
  summary: string;
  status: boolean;
}

const AccordionItem: FC<Props> = ({ title, summary, status }) => {
  const [active, setActive] = useState<boolean>(status);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className={"accordion-item-container " + (active ? "active" : "")}>
      <div className="accoridion-item-heading">
        <h5>{title}</h5>
        <button onClick={handleClick}>
          {!active ? (
            <img src={ArrowRotated} alt="arrow-rotated" />
          ) : (
            <img src={ArrowRight} alt="arrow-right" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {active && (
          // IMPORTANT
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <p>{summary}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;

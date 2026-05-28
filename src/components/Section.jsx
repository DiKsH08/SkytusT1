import { useRef } from "react";
import useIntersection from "./useIntersection";

const Section = ({ id, children, style }) => {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default Section;

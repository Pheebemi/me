import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const icons = technologies.map((t) => t.icon);
  const rows = Math.ceil(icons.length / 5);

  return (
    <div style={{ width: "100%", height: `${rows * 130 + 60}px` }}>
      <BallCanvas icons={icons} />
    </div>
  );
};

export default SectionWrapper(Tech, "");

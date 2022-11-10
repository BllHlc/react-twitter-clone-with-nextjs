import * as React from "react";
const SvgCircle = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10.3} />
  </svg>
);
export default SvgCircle;

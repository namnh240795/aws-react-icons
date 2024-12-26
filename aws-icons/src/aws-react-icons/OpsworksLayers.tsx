import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const OpsworksLayers: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M4 43.92h39.92V30.199H4zm40.92-15.721H3a1 1 0 0 0-1 1V44.92a1 1 0 0 0 1 1h41.92a1 1 0 0 0 1-1V29.199a1 1 0 0 0-1-1M4 17.72h39.92V4H4zM44.92 2H3a1 1 0 0 0-1 1v15.72a1 1 0 0 0 1 1h41.92a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    />
  </svg>
);
export default OpsworksLayers;

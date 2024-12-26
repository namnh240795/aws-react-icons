import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const OpsworksApps: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M45.897 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.348h2V4h39.896v10.348h2zM4 43.896h39.896V17.965H4zm40.896 2H3a1 1 0 0 1-1-1v-27.93a1 1 0 0 1 1-1h41.896a1 1 0 0 1 1 1v27.93a1 1 0 0 1-1 1"
    />
  </svg>
);
export default OpsworksApps;

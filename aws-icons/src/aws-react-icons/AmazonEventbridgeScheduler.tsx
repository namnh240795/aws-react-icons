import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonEventbridgeScheduler: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M15 16h3.92v-2h-3v-3H14v4a1 1 0 0 0 1 1m-9.707 8.293 1.414 1.414 3-3-1.414-1.414zm3.414-16-3-3-1.414 1.414 3 3zM15.92 6H16V2h-2v4zm9.787.707-1.414-1.414-3 3 1.414 1.414zM8.92 15c0 3.309 2.691 6 6 6s6-2.691 6-6-2.691-6-6-6-6 2.691-6 6m-2 0c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8M18 38h4v-2h-4zm0-5h4v-2h-4zm0-5h4v-2h-4zm18 10h4v-2h-4zm0-5h4v-2h-4zm0-5h4v-2h-4zm-9 10h4v-2h-4zm0-5h4v-2h-4zm0-5h4v-2h-4zm18-16h-3v-2h-2v2h-4.08v-2H34v2h-4.08v-2H28v2h-3v2h3v2h1.92v-2H34v2h1.92v-2H40v2h1.92v-2H44v4H25v2h19v23H14V26h-2v18a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1M2 17h3.976v-2H2z"
    />
  </svg>
);
export default AmazonEventbridgeScheduler;

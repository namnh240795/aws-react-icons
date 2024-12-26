import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const OpsworksResources: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M25.228 43.363V25.067l16.228-9.37v18.297zM7 15.698l16.228 9.369v18.296L7 33.993zM24.228 4.154l16.609 9.59-16.61 9.592-16.61-9.591zm18.728 8.504L24.728 2.134a1 1 0 0 0-1 0L5.5 12.658c-.31.179-.5.509-.5.866V34.57a1 1 0 0 0 .5.866L23.728 45.96a1 1 0 0 0 1 0l18.228-10.524a1 1 0 0 0 .5-.866V13.524c0-.357-.191-.687-.5-.866"
    />
  </svg>
);
export default OpsworksResources;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsDirectConnectGateway: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="m24.279 2-18.5 10.68.999 1.733 16.5-9.527v18.052H7.328l4.157-4.157-1.413-1.414L3 24.437l7.072 7.07 1.413-1.413-5.157-5.157h16.95v18.055l-16.5-9.526-.999 1.732 18.5 10.681 18.499-10.681-.999-1.732-16.5 9.526V24.937h16.72l-4.597 4.599 1.414 1.413 7.07-7.07-7.07-7.071-1.414 1.414 4.714 4.716H25.279V4.886l16.5 9.527.999-1.733z"
    />
  </svg>
);
export default AwsDirectConnectGateway;

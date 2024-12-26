import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ApiGateway: React.FC<SvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="#8C4FFF" d="M0 0h40v40H0z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19 28h2v-1h-2zM14 7.262l-7 3.04v20.055l7 2.439zM15 13v14h2v1h-2v5.5a.5.5 0 0 1-.664.472l-8-2.787A.5.5 0 0 1 6 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0 1 15 6.5V12h2v1zm18-2.698-7-3.04v25.534l7-2.439zm1-.328v20.739a.5.5 0 0 1-.336.472l-8 2.787a.507.507 0 0 1-.454-.064.5.5 0 0 1-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 0 1 .699-.458l8 3.474a.5.5 0 0 1 .301.458M19 13h2v-1h-2zm4.975 2.658-.95-.316-3 9 .95.316zm-4.829 7.196-3-3a.5.5 0 0 1 0-.708l3-3 .708.708-2.647 2.646 2.647 2.646z"
      clipRule="evenodd"
    />
  </svg>
);
export default ApiGateway;

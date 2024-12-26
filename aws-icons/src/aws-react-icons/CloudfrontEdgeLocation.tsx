import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CloudfrontEdgeLocation: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M4 43.889V29.036a42.2 42.2 0 0 1 11.963-4.207v7.097h15.963v-7.097a42.3 42.3 0 0 1 11.963 4.207v14.853zm13.963-13.963h11.963V17.963H17.963zM43.889 4v22.781a44.2 44.2 0 0 0-11.963-3.984v-6.834H15.963v6.834A44.1 44.1 0 0 0 4 26.781V4zM2 45.889h43.889V2H2z"
    />
  </svg>
);
export default CloudfrontEdgeLocation;

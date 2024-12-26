import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const WafRule: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M2 2v44h44V2zm2 14.001h40.001V4H4zM4 30h40.001V18H4zm0 14.001h40.001V32H4zm31.151-32.993-2.573-1.824-1.156 1.632 3.949 2.801 5.336-5.337-1.414-1.414zm0 14-2.573-1.824-1.156 1.632 3.949 2.801 5.336-5.336-1.414-1.414zM36 36.646l-2.353-2.353-1.414 1.414 2.353 2.353-2.353 2.354 1.414 1.415L36 39.475l2.354 2.354 1.414-1.415-2.354-2.354 2.354-2.353-1.414-1.414z"
    />
  </svg>
);
export default WafRule;

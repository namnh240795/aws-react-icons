import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotSitewiseAssetHierarchy: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M22 8h4V4h-4zm-1 2h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m-7 15h4v-4h-4zm16 0h4v-4h-4zM7 32h16v4h2v-4h16v4h2v-5a1 1 0 0 0-1-1h-9v-3h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v3H17v-3h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v3H6a1 1 0 0 0-1 1v5h2zm10-15h-2v-3a1 1 0 0 1 1-1h7v-2h2v2h7a1 1 0 0 1 1 1v3h-2v-2H17zm23 27h4v-4h-4zm5-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-23 6h4v-4h-4zm5-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 44h4v-4H4zm5-6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"
    />
  </svg>
);
export default IotSitewiseAssetHierarchy;

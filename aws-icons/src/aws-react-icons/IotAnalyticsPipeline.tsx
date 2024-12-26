import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotAnalyticsPipeline: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M23 21h6v-2h-6zm8 0h2v-2h-2zm13 13h-7V14h7zm-31-3h22V17H13zm-2 3H4V14h7v20m25-22a1 1 0 0 0-1 1v2H13v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2h22v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default IotAnalyticsPipeline;

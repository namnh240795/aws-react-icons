import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CloudformationTemplate: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M22.734 38.089h14.859v-2H22.734zm0-12.237h14.859v-2H22.734zm0-12.237h14.859v-2H22.734zm-8.616 24.223h4.119v-4.119h-4.119zm-1 2h6.12a1 1 0 0 0 1-1v-6.119a1 1 0 0 0-1-1h-6.12a1 1 0 0 0-1 1v6.119a1 1 0 0 0 1 1m1-14.238h4.119v-4.119h-4.119zm-1 2.001h6.12a1 1 0 0 0 1-1v-6.12a1 1 0 0 0-1-1h-6.12a1 1 0 0 0-1 1v6.12a1 1 0 0 0 1 1m1-14.238h4.119V9.244h-4.119zm-1 2h6.12a1 1 0 0 0 1-1V8.244a1 1 0 0 0-1-1h-6.12a1 1 0 0 0-1 1v6.119a1 1 0 0 0 1 1M8 43.956h32.963V4H8zM41.963 2H7a1 1 0 0 0-1 1v41.956a1 1 0 0 0 1 1h34.963a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    />
  </svg>
);
export default CloudformationTemplate;

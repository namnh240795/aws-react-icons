import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonCloudsearchSearchDocuments: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="m41.406 14.638-2.583 1.937 2.583 1.938zm2-2v7.875a1.001 1.001 0 0 1-1.6.8l-5.249-3.938a.998.998 0 0 1 0-1.6l5.249-3.937a1 1 0 0 1 1.6.8M9.243 16.575 6.66 14.638v3.875zm2.267.8-5.25 3.938a1.002 1.002 0 0 1-1.6-.8v-7.875a1.001 1.001 0 0 1 1.6-.8l5.25 3.938a1 1 0 0 1 0 1.599m1.15 23.388h22.75v-2H12.66zm0-5.25h22.75v-2H12.66zm0-5.25h22.75v-2H12.66zm0-5.25h22.75v-2H12.66zm0-5.25h22.75v-2H12.66zm.109-5.25H35.41v-2H12.769zm-.109-5.25h22.75v-2H12.66zm25.25 34.75H10.16V21.388h-2v24.625h31.75V21.388h-2zm-27.75-32.25h-2v-9.75h31.75v9.75h-2v-7.75H10.16z"
    />
  </svg>
);
export default AmazonCloudsearchSearchDocuments;

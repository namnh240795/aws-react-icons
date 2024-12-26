import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const OpsworksDeployments: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="m42.507 38.677-7.02 7.019a.997.997 0 0 1-1.413 0l-7.018-7.02 1.414-1.413 5.31 5.31v-16.64a.65.65 0 0 0-.306-.533l-9.221-6.22-9.22 6.22a.66.66 0 0 0-.307.534v16.64l5.31-5.311 1.415 1.414-7.018 7.019a1 1 0 0 1-1.414 0l-7.02-7.02 1.415-1.413 5.312 5.31v-16.64c0-.87.444-1.69 1.188-2.191l9.339-6.298V2h2v15.443l9.339 6.298a2.66 2.66 0 0 1 1.189 2.193v16.64l5.312-5.311z"
    />
  </svg>
);
export default OpsworksDeployments;

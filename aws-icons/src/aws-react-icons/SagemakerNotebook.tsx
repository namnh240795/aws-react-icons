import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const SagemakerNotebook: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#01A88D"
      fillRule="evenodd"
      d="M7.972 2v5.206H5v1.999h2.972v3.262H5v2h2.972v3.313H5v2h2.972v3.274H5v1.999h2.972v3.193H5v2h2.972v3.233H5v2h2.972v3.314H5v2h2.972v5.179h35.614V2zm2 2h31.614v39.972H9.972v-3.179h3.08v-2h-3.08v-3.314h3.08v-2h-3.08v-3.233h3.08v-2h-3.08v-3.193h3.08v-1.999h-3.08V19.78h3.08v-2h-3.08v-3.313h3.08v-2h-3.08V9.205h3.08V7.206h-3.08zm6.89 5.205H36.56v-2H16.862zm0 6.389H36.56v-2H16.862zm0 6.333H36.56v-2.001H16.862zm0 6.386h9.902v-2h-9.902z"
    />
  </svg>
);
export default SagemakerNotebook;

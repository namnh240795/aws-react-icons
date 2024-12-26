import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Ec2Instance: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M9 39h30V9H9zm37-26v-2h-5V8a1 1 0 0 0-1-1h-3V2h-2v5h-4V2h-2v5h-4V2h-2v5h-4V2h-2v5h-4V2h-2v5H8a1 1 0 0 0-1 1v3H2v2h5v4H2v2h5v4H2v2h5v4H2v2h5v4H2v2h5v3a1 1 0 0 0 1 1h3v5h2v-5h4v5h2v-5h4v5h2v-5h4v5h2v-5h4v5h2v-5h3a1 1 0 0 0 1-1v-3h5v-2h-5v-4h5v-2h-5v-4h5v-2h-5v-4h5v-2h-5v-4z"
    />
  </svg>
);
export default Ec2Instance;

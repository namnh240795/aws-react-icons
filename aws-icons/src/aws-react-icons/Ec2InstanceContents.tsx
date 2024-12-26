import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Ec2InstanceContents: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M10 29h19V10H10zm23-17v-1h-3V9.5a.5.5 0 0 0-.5-.5H28V6h-1v3h-3V6h-1v3h-3V6h-1v3h-3V6h-1v3h-3V6h-1v3H9.5a.5.5 0 0 0-.5.5V11H6v1h3v3H6v1h3v3H6v1h3v3H6v1h3v3H6v1h3v1.5a.5.5 0 0 0 .5.5H11v3h1v-3h3v3h1v-3h3v3h1v-3h3v3h1v-3h3v3h1v-3h1.5a.5.5 0 0 0 .5-.5V28h3v-1h-3v-3h3v-1h-3v-3h3v-1h-3v-3h3v-1h-3v-3z"
      />
    </g>
  </svg>
);
export default Ec2InstanceContents;

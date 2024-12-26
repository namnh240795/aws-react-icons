import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonAppstream2: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M21 20v12.35L7.769 20zm.699 13.958a.5.5 0 0 0 .3-.458v-14a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.34.866l15 14a.5.5 0 0 0 .54.092M34.5 34a.5.5 0 0 1-.336-.129l-10.5-9.5.672-.742L34 32.374V7H7.707l9.647 9.646-.708.708-10.5-10.5A.5.5 0 0 1 6.5 6h28a.5.5 0 0 1 .5.5v27a.5.5 0 0 1-.5.5"
      />
    </g>
  </svg>
);
export default AmazonAppstream2;

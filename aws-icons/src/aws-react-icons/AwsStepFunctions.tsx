import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsStepFunctions: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23 22h10v-4H23zm10.5-5h-11a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5M22 31.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5M7 24h9v-2H7zm0-6v-2h9v2zm12-9.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5S19 9.327 19 8.5M28 27H12v-2h4.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H12v-2h4.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H12v-2h16v2h1v-2.5a.5.5 0 0 0-.5-.5H21v-1.051c1.14-.232 2-1.242 2-2.449C23 7.122 21.879 6 20.5 6A2.503 2.503 0 0 0 18 8.5c0 1.207.86 2.217 2 2.449V12h-8.5a.5.5 0 0 0-.5.5V15H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H11v2H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H11v2.5a.5.5 0 0 0 .5.5H20v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.207-.86-2.217-2-2.449V28h7.5a.5.5 0 0 0 .5-.5V25h-1z"
      />
    </g>
  </svg>
);
export default AwsStepFunctions;
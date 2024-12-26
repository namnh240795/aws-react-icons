import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsAuditManager: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m30.746 25.561-.707.707L31.77 28H27v1h4.739l-1.7 1.7.707.707 2.569-2.569a.5.5 0 0 0 0-.707zM18 29h5.746l-1.701 1.7.707.707 2.57-2.569a.5.5 0 0 0 0-.707l-2.57-2.57-.707.707L23.777 28H18zm-4.241 2.407 2.569-2.569a.5.5 0 0 0 0-.707l-2.569-2.57-.707.707L14.783 28H9v1h5.752l-1.7 1.7zM9 22h8v-1H9zm0-5h8v-1H9zm12 0h3v-1h-3zm3.5-2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM21 22h12v-1H21zm13-1.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5M23 7.165V11h3.797zM27 32h1v1.5a.5.5 0 0 1-.5.5h-21a.5.5 0 0 1-.5-.5v-27a.5.5 0 0 1 .5-.5h16.546c.134 0 .262.053.355.148l4.454 4.5A.5.5 0 0 1 28 11v7h-1v-6h-4.5a.5.5 0 0 1-.5-.5V7H7v26h20zM17.256 9.565l-3.855 3.855a.498.498 0 0 1-.707 0l-1.927-1.927.707-.707 1.574 1.573 3.501-3.501z"
      />
    </g>
  </svg>
);
export default AwsAuditManager;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ReservedInstanceReporting: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m28.379 27.672-3.525-3.525-.707.707 3.523 3.524-7.167 2.971-7.175-2.97 3.526-3.525-.707-.707-3.524 3.524-2.972-7.168 2.97-7.175 3.526 3.526.707-.707-3.524-3.524 7.167-2.972 7.175 2.97-3.525 3.526.707.707 3.523-3.524 2.972 7.167zM34 21v-1h-1.775l-3.082-7.436 1.711-1.71-.707-.707-1.709 1.709L21 8.777V7h-1v1.776l-7.435 3.081-1.711-1.71-.707.707 1.709 1.709L8.777 20H7v1h1.775l3.083 7.436-1.711 1.711.707.707 1.709-1.709L20 32.223V34h1v-1.775l7.436-3.082 1.711 1.711.707-.707-1.709-1.709L32.223 21zm-13.5 2.24a2.743 2.743 0 0 1-2.74-2.74 2.743 2.743 0 0 1 2.74-2.74 2.743 2.743 0 0 1 2.74 2.74 2.743 2.743 0 0 1-2.74 2.74m0-6.48a3.745 3.745 0 0 0-3.74 3.74 3.744 3.744 0 0 0 3.74 3.74 3.743 3.743 0 0 0 3.74-3.74 3.744 3.744 0 0 0-3.74-3.74"
      />
    </g>
  </svg>
);
export default ReservedInstanceReporting;

import * as React from "react";
import type { SVGProps } from "react";
const SvgForecast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M25 30h3V15h-3zm-1 1h5V14h-5zm-7-1h3V19h-3zm-1 1h5V18h-5zm-6-1h3v-6h-3zm-1 1h5v-8H9zM30 8v1h2.138l-3.537 3h-5.259a.5.5 0 0 0-.437.256L20.811 16h-5.18a.5.5 0 0 0-.46.304L13.599 20H9v1h4.93a.5.5 0 0 0 .46-.304L15.962 17h5.142c.18 0 .347-.098.436-.256L23.635 13h5.149a.5.5 0 0 0 .323-.119L33 9.58V12h1V8zm1 6h1v19H6V9h21v1H7v22h24z"
      />
    </g>
  </svg>
);
export default SvgForecast;

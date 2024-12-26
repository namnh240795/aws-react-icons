import * as React from "react";
import type { SVGProps } from "react";
const SvgCommandLineInterface = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M6 7v27h17v-1H7V12h26v21h-3v1h4V7zm1 4h26V8H7zm6-1h1V9h-1zm-2 0h1V9h-1zm-2 0h1V9H9zm1.647 8.354L15.293 23l-4.646 4.647.706.706L16.707 23l-5.354-5.354zM19 26h9v-1h-9z"
      />
    </g>
  </svg>
);
export default SvgCommandLineInterface;

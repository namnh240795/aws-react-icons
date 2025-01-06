import * as React from "react";
import type { SVGProps } from "react";
const SvgContainers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M11 37h25v-2H11zm1-3h23v-9H12zm24-9v9h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-26a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h.5v-9h-.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h.07l9.171-5.74.531.847L12.455 21H28v1H11v2h25v-2h-7v-1h5.545l-7.817-4.893.531-.847L36.43 21h.07a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm-12.5-9c1.103 0 2-.897 2-2h-1a1.001 1.001 0 0 1-2 0c0-.551.448-1 1-1a.5.5 0 0 0 .5-.5V10h-1v2.063A2.005 2.005 0 0 0 21.5 14c0 1.103.897 2 2 2M14 32h1v-5h-1zm3 0h1v-5h-1zm3 0h1v-5h-1zm12 0h1v-5h-1zm-3 0h1v-5h-1zm-3 0h1v-5h-1zm-3 0h1v-5h-1z"
      />
    </g>
  </svg>
);
export default SvgContainers;

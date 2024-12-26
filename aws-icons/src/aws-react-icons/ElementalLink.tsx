import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ElementalLink: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m17.254 8.663-.5-.866 2.996-1.73a.5.5 0 0 1 .5 0l2.996 1.73-.5.866L20 7.077zM23 28.212l-2.5 1.443-2.5-1.443v-2.887l2.5-1.444 2.5 1.444v2.887m1-3.176a.5.5 0 0 0-.25-.433l-3-1.732a.5.5 0 0 0-.5 0l-3 1.732a.5.5 0 0 0-.25.433V26H8v1h9v1.5c0 .179.096.344.25.434L20 30.52V34h1v-3.48l2.75-1.586A.5.5 0 0 0 24 28.5V27h8v-1h-8zM26 18h3v-1h-3zm0-3h3v-1h-3zm-15 0h8v-1h-8zm-2 5h22v-8H9zm22.5-9h-23a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default ElementalLink;

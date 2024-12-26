import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AppRunner: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m14.163 26.544-.707-.707L7 32.293V29H6v4.5a.5.5 0 0 0 .5.5H11v-1H7.707zM33.5 6H29v1h3.293l-6.147 6.147.707.707L33 7.707V11h1V6.5a.5.5 0 0 0-.5-.5M22 30h8v-8h-8zm9-8.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M10 18h8v-8h-8zm9-8.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M18.5 21h-9a.5.5 0 0 0-.5.5v6.672l1-1V22h8v8h-5.172l-1 1H18.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5M30 12.828l1-1V18.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h6.672l-1 1H22v8h8z"
      />
    </g>
  </svg>
);
export default AppRunner;

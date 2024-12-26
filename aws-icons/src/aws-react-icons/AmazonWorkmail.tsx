import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonWorkmail: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M7 33V7.707l12.647 12.647a.5.5 0 0 0 .707 0L33 7.707V33zM32.293 7 20 19.292 7.707 7zM33.5 6h-27a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5h27a.5.5 0 0 0 .5-.5v-27a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default AmazonWorkmail;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonComprehendMedical: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M33 27h-2.5a.5.5 0 0 1-.5-.5V24h-3v2.5a.5.5 0 0 1-.5.5H24v3h2.5a.5.5 0 0 1 .5.5V33h3v-2.5a.5.5 0 0 1 .5-.5H33zm1-.5v4a.5.5 0 0 1-.5.5H31v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V31h-2.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H26v-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V26h2.5a.5.5 0 0 1 .5.5M7.098 9.986 11 27.867V9.185l-.125.023zM26 7.174V10h3.117zM12 32h11v1H11.5a.49.49 0 0 1-.48-.396l-.008.002L6.012 9.705a.497.497 0 0 1 .387-.597L11 8.177V6.5a.5.5 0 0 1 .5-.5H26c.124 0 .244.046.336.129l4.5 4.079c.104.095.164.23.164.371V22h-1V11h-4.5a.5.5 0 0 1-.5-.5V7H12zm2-7h8v-1h-8zm0-3h12v-1H14zm0-9h9v-1h-9zm0 6h13v-1H14zm4-3h9v-1h-9zm-4 0h3v-1h-3z"
      />
    </g>
  </svg>
);
export default AmazonComprehendMedical;

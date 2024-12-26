import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ServerContents: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7D8998" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M12 34h16V6H12zm1-1h14V7H13zm2-22h10v-1H15zm0 4h10v-1H15zm0 4h10v-1H15z"
      />
    </g>
  </svg>
);
export default ServerContents;

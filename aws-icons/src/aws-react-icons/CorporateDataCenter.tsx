import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CorporateDataCenter: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7D8998" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M12 17h3.5a.5.5 0 0 0 .5-.5V7h7v9.5a.5.5 0 0 0 .5.5H27v16H12zm16 16.5v-17a.5.5 0 0 0-.5-.5H24V6.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5V16h-3.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5M24 31h1v-2h-1zm-5 0h1v-2h-1zm-5 0h1v-2h-1zm10-4h1v-3h-1zm-5 0h1v-3h-1zm-5 0h1v-3h-1zm10-5h1v-3h-1zm-5-10h1V9h-1zm0 5h1v-3h-1zm0 5h1v-3h-1zm-5 0h1v-3h-1z"
      />
    </g>
  </svg>
);
export default CorporateDataCenter;

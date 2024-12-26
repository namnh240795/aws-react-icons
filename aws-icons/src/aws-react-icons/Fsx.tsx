import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Fsx: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m27.537 22.267-3.548 4.915h1.6l2.669-3.898zm4.776 4.915H34l-4.194-5.966 3.819-5.325h-1.578l-3.019 4.31-.807 1.118zm-3.955-7.937-2.348-3.354h-1.666l3.173 4.473zm-10.813.909q-1.53-.596-2.245-1.421t-.715-2.037q0-1.649 1.181-2.673Q16.95 13 18.877 13q.874 0 1.838.208.963.21 1.818.587v1.013q-2.027-.715-3.597-.715-1.53 0-2.344.666-.816.666-.815 1.897 0 .696.248 1.123t.815.775q.566.348 1.619.745l2.127.815q1.43.556 2.086 1.361t.656 2.017q0 1.769-1.302 2.861t-3.427 1.093q-2.207 0-3.935-.834v-1.014q2.086.756 3.835.755 1.65 0 2.633-.775t.983-2.106a1.97 1.97 0 0 0-.536-1.391q-.536-.577-1.729-1.033zM6 27.108v-13.77h7.729v1.053H7.172v5.266h5.545v1.053H7.172v6.398z"
      />
    </g>
  </svg>
);
export default Fsx;
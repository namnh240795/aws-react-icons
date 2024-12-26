import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotSitewiseDataStreams: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M36 2v5H20v7h2V9h14v3h10V2zm2 8h6V4h-6zm-28 6v2h16v20h2V16zm-3 2h2v-2H7zm-3 0h2v-2H4zm34 10h8v-8h-8zm2-1.999h4.001V22H40zM22 46h2V21h-2zm8-23v23h1.999V25H37v-2zM2 35h10V25H2zm2-2h6v-6H4zm9.999-4v2H18v15h2V29zM26 46h2v-6h-2z"
    />
  </svg>
);
export default IotSitewiseDataStreams;

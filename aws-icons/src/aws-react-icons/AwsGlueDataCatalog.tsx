import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsGlueDataCatalog: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M21.306 18.375C23.678 18.932 26.68 19 28 19s4.323-.068 6.695-.625L29 29.764V33h-2v-3.236zM28 15c3.95 0 6.573.561 7.617 1-1.044.441-3.667 1-7.617 1-3.949 0-6.571-.559-7.616-1 1.045-.439 3.667-1 7.616-1m3 20v-4.764l6.642-13.284c.226-.278.358-.593.358-.952 0-2.783-7.654-3-10-3s-10 .217-10 3c0 .359.131.674.358.952L25 30.236V35zM4 2h5v2H6v40h3v2H4zm12 40h24v-2H16zm0-4h24v-2H16zm0-26h24v-2H16zm0-4h24V6H16zm-3 36h29V4H13zm-2 2h33V2H11z"
    />
  </svg>
);
export default AwsGlueDataCatalog;

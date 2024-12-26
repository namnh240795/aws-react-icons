import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const VpcFlowLogs: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="m42.207 24.708-4.375 4.375-1.414-1.414 2.668-2.668H7.376v-2h31.71l-2.668-2.669 1.414-1.414 4.375 4.376a1 1 0 0 1 0 1.414M17 33.751h13.125v-2H17zm0-4.375h13.125v-2H17zm0-8.751h13.125v-2H17zm0-4.375h13.125v-2H17zm14.75 10.376h2v10.5a1 1 0 0 1-1 1H14.375a1 1 0 0 1-1-1v-10.5h2v9.5H31.75zm-16.375-5.251h-2v-10.5a1 1 0 0 1 1-1H32.75a1 1 0 0 1 1 1v10.5h-2v-9.5H15.375zM24 44.001c-11.028 0-20-8.972-20-20S12.972 4 24 4s20 8.973 20 20.001-8.972 20-20 20M24 2C11.87 2 2 11.869 2 24.001c0 12.131 9.87 22 22 22s22-9.869 22-22S36.131 2 24 2"
    />
  </svg>
);
export default VpcFlowLogs;
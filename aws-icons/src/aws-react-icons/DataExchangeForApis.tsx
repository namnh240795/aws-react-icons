import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const DataExchangeForApis: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M14 34.007h20v-20H14zm21-22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1zm-9.207 17.707 1.414-1.414-4.293-4.293 4.293-4.293-1.414-1.414-5 5a1 1 0 0 0 0 1.414zM7.707 10.3 5.414 8.007H43v-2H5.414l2.293-2.293L6.293 2.3l-4 4a1 1 0 0 0 0 1.414l4 4zm38 31.414-4 4-1.414-1.414 2.293-2.293H5v-2h37.586l-2.293-2.293 1.414-1.414 4 4a1 1 0 0 1 0 1.414"
    />
  </svg>
);
export default DataExchangeForApis;

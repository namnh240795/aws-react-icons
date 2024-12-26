import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotAction: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M32.546 23.274a1 1 0 0 1 0 1.367L19.448 38.612l-1.459-1.367 12.456-13.287L17.99 10.67l1.46-1.368zM4 23.958C4 12.953 12.953 4 23.958 4s19.957 8.953 19.957 19.958-8.953 19.957-19.957 19.957S4 34.962 4 23.958m-2 0c0 12.107 9.851 21.957 21.958 21.957 12.108 0 21.957-9.85 21.957-21.957S36.066 2 23.958 2C11.851 2 2 11.85 2 23.958"
    />
  </svg>
);
export default IotAction;

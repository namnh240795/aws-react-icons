import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Account: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M24.5 22c1.93 0 3.5 1.57 3.5 3.5S26.43 29 24.5 29 21 27.43 21 25.5s1.57-3.5 3.5-3.5m0 8c2.481 0 4.5-2.019 4.5-4.5S26.981 21 24.5 21a4.505 4.505 0 0 0-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5m1.523-19.12L29.084 17h-6.121zM22.154 18h7.739a.502.502 0 0 0 .447-.724l-3.869-7.738c-.17-.338-.725-.338-.895 0l-3.869 7.738a.503.503 0 0 0 .447.724M11 23h7v-7h-7zm-.5 1h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5M8 32h24V8H8zM32.5 7h-25a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5h25a.5.5 0 0 0 .5-.5v-25a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default Account;

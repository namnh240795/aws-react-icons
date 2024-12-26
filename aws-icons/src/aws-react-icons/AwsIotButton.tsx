import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotButton: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M20.979 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 4c1.379 0 2.5-1.122 2.5-2.5s-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5m0 1c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5m-14.5 1.998 14 .002C30.471 25.998 33 23.479 33 20.499c0-2.979-2.529-5.497-5.521-5.497l-14-.002C10.509 15.002 8 17.52 8 20.499c0 2.981 2.509 5.499 5.479 5.499m14 1-14 .002C9.966 26.998 7 24.021 7 20.499s2.966-6.497 6.479-6.497l14-.002c3.534.002 6.521 2.979 6.521 6.499 0 3.523-2.987 6.499-6.521 6.499M8.479 8h5V7h-5.5a.5.5 0 0 0-.5.5V13h1zm24 5h1V7.5a.5.5 0 0 0-.5-.5h-5.5v1h5zm-24 14h-1v5.5a.5.5 0 0 0 .5.5h5.5v-1h-5zm24 0h1v5.5a.5.5 0 0 1-.5.5h-5.5v-1h5z"
      />
    </g>
  </svg>
);
export default AwsIotButton;

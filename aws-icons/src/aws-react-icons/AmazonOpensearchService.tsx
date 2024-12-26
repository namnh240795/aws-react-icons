import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonOpensearchService: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23 26c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m0-9c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m9.284 13.308a.85.85 0 0 1-1.191.063l-3.469-3.13c.422-.372.8-.792 1.122-1.255l3.475 3.13a.85.85 0 0 1 .063 1.192M17 22c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6m12.264 3.106A6.96 6.96 0 0 0 30 22c0-3.86-3.141-7-7-7s-7 3.14-7 7 3.141 7 7 7a6.96 6.96 0 0 0 3.817-1.14l3.607 3.254c.351.316.792.471 1.232.471.504 0 1.007-.205 1.371-.608a1.85 1.85 0 0 0-.135-2.603zM34 9.5V26h-1V10h-4v5h-1V9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5M26 32h1v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V31h1v2h4zm-4-19h-1V6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h-1V7h-4zm-3 17h1v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V26h1v7h4zm-4-14h-1v-5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h-1v-2h-4zM8 33h4V16H8zm4.5-18h-5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-18a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default AmazonOpensearchService;

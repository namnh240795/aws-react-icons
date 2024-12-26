import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsB2BDataInterchange: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M28 20v-5h-5v5h1v1h-1.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H27v-1zm-7.5 11h-3.778l1.638 1.639-.707.707-2.5-2.5a.5.5 0 0 1 0-.707l2.5-2.5.707.707L16.706 30H20.5c2.481 0 4.5-2.019 4.5-4.5v-8.501h1V25.5c0 3.033-2.468 5.5-5.5 5.5m-2.209-13h-3.792a4.505 4.505 0 0 0-4.5 4.5v8.501h-1V22.5c0-3.033 2.468-5.5 5.5-5.5h3.792l-1.646-1.646.707-.708 2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5-.707-.708zm-5.292 9.501V33.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5v-5.999a.5.5 0 0 1 .5-.5H8v1H7V33h4.999v-4.999h-1v-1h1.5a.5.5 0 0 1 .5.5M30 7.712 32.284 10H30zm3.854 2.444-4.004-4.01A.5.5 0 0 0 29.496 6H13.5a.5.5 0 0 0-.5.5V14h1V7h15v3.5a.5.5 0 0 0 .5.5H33l-.01 22H24v1h9.49a.5.5 0 0 0 .5-.5L34 10.51a.5.5 0 0 0-.146-.354"
      />
    </g>
  </svg>
);
export default AwsB2BDataInterchange;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonManagedGrafana: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M14 26.001h1v-5h-1zm9 0h1v-5h-1zm-3 0h1v-12h-1zm-3 0h1v-8h-1zm16 2.884L14.726 32.94 7.062 21.442l5.751-14.376L23.05 8.927l.954 7.636a.493.493 0 0 0 .552.435L33 16.06zm.833-13.757a.5.5 0 0 0-.388-.124l-8.51.946-.939-7.51a.5.5 0 0 0-.406-.43l-11-2a.49.49 0 0 0-.554.305l-6 15a.5.5 0 0 0 .048.463l8 12a.5.5 0 0 0 .525.211l19-4.214a.5.5 0 0 0 .391-.488V15.501a.5.5 0 0 0-.167-.373"
      />
    </g>
  </svg>
);
export default AmazonManagedGrafana;

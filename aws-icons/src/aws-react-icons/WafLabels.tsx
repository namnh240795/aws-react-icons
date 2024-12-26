import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const WafLabels: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M13 33.009h28v-2H13zm0-8h33v-2H13zm6-14c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2m2 0c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m11 35H2V12.487l9.068-10.478L22.923 2 32 12.487v7.522h-2v-6.777l-7.991-9.231-10.027.008L4 13.232v30.777h26v-7h2z"
    />
  </svg>
);
export default WafLabels;

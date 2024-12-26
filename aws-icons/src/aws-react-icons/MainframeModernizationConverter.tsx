import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const MainframeModernizationConverter: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#01A88D"
      fillRule="evenodd"
      d="M22.997 13h4V9h-4zm2 22c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.898-2-2-2m1-20v18.142c1.72.447 3 2 3 3.858 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.858 1.279-3.411 3-3.858V15h-3V7h8v8zm-5 5v-2H14.16l-8.962-7 8.962-7h19.792l8.962 7-8.962 7h-5.955v2h6.644l11.521-9-11.521-9h-21.17L1.95 11l11.521 9zm13.644 8 11.521 9-11.521 9h-21.17L1.95 37l11.521-9h7.526v2H14.16l-8.962 7 8.962 7h19.792l8.962-7-8.962-7h-5.955v-2z"
    />
  </svg>
);
export default MainframeModernizationConverter;

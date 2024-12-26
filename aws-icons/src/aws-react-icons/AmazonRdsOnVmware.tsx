import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonRdsOnVmware: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M30.984 29h1.007v-2h-1.007zm-2.032 0h1.007v-2h-1.007zm4.041 3H20.91v-2.879l2.008-2.058 3.287 1.798a.5.5 0 0 0 .746-.438V26h6.042zm.504-7h-7.05a.5.5 0 0 0-.503.5v2.077l-2.877-1.574a.51.51 0 0 0-.605.09l-2.418 2.477a.5.5 0 0 0-.141.348V32.5c0 .276.224.5.503.5h13.09a.5.5 0 0 0 .504-.5v-7c0-.276-.226-.5-.503-.5M8.53 8l3.672 3.646-.712.708L7.82 8.707V12H6.813V7.5c0-.276.224-.5.503-.5h4.531v1zm3.672 18.354L8.53 30h3.316v1h-4.53a.5.5 0 0 1-.504-.5V26H7.82v3.293l3.67-3.647zm13.385-14.708L29.26 8h-3.316V7h4.532c.278 0 .503.224.503.5V12h-1.007V8.707L26.3 12.354zm4.38 6.892c0-1.376-1.565-2.724-4.185-3.605l.323-.947c3.094 1.04 4.87 2.699 4.87 4.552s-1.776 3.512-4.87 4.552l-.323-.947c2.62-.881 4.185-2.228 4.185-3.605m-22.961 0c0 1.299 1.496 2.61 4.003 3.508l-.343.941C7.702 21.924 6 20.302 6 18.538c0-1.765 1.702-3.386 4.667-4.449l.343.941c-2.507.898-4.003 2.209-4.003 3.508m11.889 5.503c-2.526 0-3.988-.74-4.028-1.041v-1.207c.98.491 2.534.689 4.028.689s3.048-.198 4.028-.689v1.206c-.04.302-1.503 1.042-4.028 1.042m-4.028-5.22c.98.491 2.534.688 4.028.688s3.048-.197 4.028-.688v1.675c0 .28-1.199.986-4.028.986-2.83 0-4.028-.706-4.028-.986zm0-2.61c1.174.548 3.108.723 4.327.723 1.326 0 2.784-.184 3.729-.639v1.227c0 .281-1.199.987-4.028.987-2.83 0-4.028-.706-4.028-.987zm4.327-2.145c2.607 0 3.729.745 3.729.981 0 .245-1.147.887-3.729.887-2.526 0-4.177-.6-4.327-.858v-.008c.134-.303 1.746-1.002 4.327-1.002M23.931 23l-.01-8c-.055-1.14-1.977-1.934-4.726-1.934-2.04 0-5.254.527-5.327 1.934l-.007 8c0 1.326 2.594 2.041 5.035 2.041 2.44 0 5.035-.715 5.035-2.041"
      />
    </g>
  </svg>
);
export default AmazonRdsOnVmware;

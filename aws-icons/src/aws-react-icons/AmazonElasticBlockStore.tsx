import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonElasticBlockStore: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M33 28h1v6h-6v-1h4.293l-4.647-4.646.708-.708L33 32.293zm-19.646.354L8.707 33H13v1H7v-6h1v4.293l4.646-4.647zM34 6v6h-1V7.707l-4.646 4.647-.708-.708L32.293 7H28V6zM8.707 7l4.647 4.646-.708.708L8 7.707V12H7V6h6v1zM20.5 15.5c-3.572 0-5.5-1.04-5.5-1.464V14c0-.626 2.093-1.5 5.5-1.5s5.5.874 5.5 1.5v.036c0 .424-1.928 1.464-5.5 1.464m0 12c-3.407 0-5.5-.874-5.5-1.5V15.389c1.228.727 3.404 1.111 5.5 1.111s4.272-.384 5.5-1.111V26c0 .626-2.093 1.5-5.5 1.5m0-16c-3.235 0-6.5.773-6.5 2.5v12c0 1.727 3.265 2.5 6.5 2.5S27 27.727 27 26V14c0-1.727-3.265-2.5-6.5-2.5"
      />
    </g>
  </svg>
);
export default AmazonElasticBlockStore;

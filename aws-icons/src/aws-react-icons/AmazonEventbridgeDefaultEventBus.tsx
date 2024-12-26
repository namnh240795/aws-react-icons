import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonEventbridgeDefaultEventBus: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M11.001 39.001h26v-2h-26zM35.88 12.009l-1.727-1.011-3.609 6.162 1.727 1.01zm6.687 6.585-6.244 3.553.989 1.738 6.244-3.553zm-3.565 10.401-.002 2 7 .006.002-2zM2 31.001l7 .006.002-2-7-.006zm3.454-12.439-.992 1.736 6.239 3.565.992-1.737zm12.026-1.414-3.598-6.167-1.729 1.008 3.598 6.167zm7.521-8.146-2-.002-.007 7 2 .002zM13.095 27.196l5.019-8.695c.179-.309.509-.5.867-.5h10.04c.357 0 .687.191.866.5l5.02 8.695a1 1 0 0 1 0 1l-3.836 6.642-1.732-1 3.548-6.142-4.444-7.695h-8.885l-4.443 7.695 3.547 6.142-1.732 1-3.835-6.642a1 1 0 0 1 0-1"
    />
  </svg>
);
export default AmazonEventbridgeDefaultEventBus;

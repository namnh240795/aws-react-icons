import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonEc2Ami: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M30.143 37.727h8.456V26.656h-8.456zm-20.914 0h8.457V26.656H9.229zm10.457 0h8.457V26.656h-8.457zm19.913-13.071H8.229a1 1 0 0 0-1 1v13.071a1 1 0 0 0 1 1h31.37a1 1 0 0 0 1-1V25.656a1 1 0 0 0-1-1m-9.456-5.228h8.456v-8.457h-8.456zm-20.914 0h8.457v-8.457H9.229zm10.457 0h8.457v-8.457h-8.457zM39.599 8.971H8.229a1 1 0 0 0-1 1v10.457a1 1 0 0 0 1 1h31.37a1 1 0 0 0 1-1V9.971a1 1 0 0 0-1-1m4.228 30.408a4.45 4.45 0 0 1-4.447 4.448H8.448A4.453 4.453 0 0 1 4 39.379V8.448A4.453 4.453 0 0 1 8.448 4H39.38a4.45 4.45 0 0 1 4.447 4.448zM39.38 2H8.448A6.455 6.455 0 0 0 2 8.448v30.931a6.456 6.456 0 0 0 6.448 6.448H39.38a6.455 6.455 0 0 0 6.447-6.448V8.448A6.454 6.454 0 0 0 39.38 2"
    />
  </svg>
);
export default AmazonEc2Ami;

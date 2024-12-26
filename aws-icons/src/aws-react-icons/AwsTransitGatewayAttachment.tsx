import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsTransitGatewayAttachment: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M24 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20m0-42C11.869 2 2 11.869 2 24s9.869 22 22 22 22-9.869 22-22S36.131 2 24 2m12 25c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-24 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m24-8a5.01 5.01 0 0 0-4.899 4H16.899A5.01 5.01 0 0 0 12 19c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 0 0 4.899-4h14.202A5.01 5.01 0 0 0 36 29c2.757 0 5-2.243 5-5s-2.243-5-5-5"
    />
  </svg>
);
export default AwsTransitGatewayAttachment;

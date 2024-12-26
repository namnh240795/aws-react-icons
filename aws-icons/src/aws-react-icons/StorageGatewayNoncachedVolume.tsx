import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const StorageGatewayNoncachedVolume: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M39.243 43.991h-8.498v-5.124a1 1 0 0 0-1-1H17.498a1 1 0 0 0-1 1v5.124H8V4.001h31.243zm1-41.99H7a1 1 0 0 0-1 1v41.99a1 1 0 0 0 1 1h10.498a1 1 0 0 0 1-1v-5.124h10.247v5.124a1 1 0 0 0 1 1h10.498a1 1 0 0 0 1-1V3.001a1 1 0 0 0-1-1"
    />
  </svg>
);
export default StorageGatewayNoncachedVolume;

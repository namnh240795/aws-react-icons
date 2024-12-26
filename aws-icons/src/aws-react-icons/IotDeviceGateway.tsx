import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotDeviceGateway: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M20.443 21.397a.99.99 0 0 0 .988.989.99.99 0 0 0 0-1.977.99.99 0 0 0-.988.988m7.323 6.116a.99.99 0 0 0-1.977 0 .99.99 0 0 0 1.977 0m2.92 3.51v-8.617h-6.454a2.985 2.985 0 0 1-2.801 1.98 2.99 2.99 0 0 1-2.988-2.99 2.99 2.99 0 0 1 2.988-2.988c1.299 0 2.395.838 2.807 1.997h6.448v-2.517H17.532v8.633h6.44a2.98 2.98 0 0 1 2.806-1.997 2.99 2.99 0 0 1 2.988 2.988 2.99 2.99 0 0 1-2.988 2.99 2.98 2.98 0 0 1-2.801-1.98h-6.445v2.5zm-14.154 2a1 1 0 0 1-1-1V16.888a1 1 0 0 1 1-1h15.154a1 1 0 0 1 1 1v15.135a1 1 0 0 1-1 1zm27.61-18.242L36.89 7.437v34.502l7.253-4.352zm2 23.372c0 .352-.184.677-.484.858l-9.253 5.55a1 1 0 0 1-1.008.014 1 1 0 0 1-.507-.87v-4.106h-2.74v-2h2.74V11.198h-2.74v-2h2.74V5a1 1 0 0 1 1.712-.702l9.253 9.371a1 1 0 0 1 .288.702zM11.253 7.437 4 14.78v22.806l7.253 4.35zm2 30.162h2.78v2h-2.78v4.106a1 1 0 0 1-1.513.857L2.486 39.01A1 1 0 0 1 2 38.153V14.372a1 1 0 0 1 .288-.703L11.54 4.3A1 1 0 0 1 13.253 5v4.198h2.78v2h-2.78zm5.72 2h3.702v-2h-3.701zm6.537 0h3.779v-2h-3.78zm-6.536-28.401h3.7v-2h-3.7zm6.536 0h3.779v-2h-3.78z"
    />
  </svg>
);
export default IotDeviceGateway;
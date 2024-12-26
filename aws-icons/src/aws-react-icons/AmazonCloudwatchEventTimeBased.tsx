import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonCloudwatchEventTimeBased: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M39.07 11.905h-5.388v-2h3.387V5.64h2zM38.07 4a6.044 6.044 0 0 1 6.036 6.038 6.044 6.044 0 0 1-6.037 6.038 6.045 6.045 0 0 1-6.038-6.038A6.045 6.045 0 0 1 38.07 4m0 14.076c4.431 0 8.036-3.606 8.036-8.038S42.501 2 38.07 2s-8.038 3.605-8.038 8.038 3.605 8.038 8.038 8.038m3.397 22.633H34.67V21.155c2.187.66 4.61.66 6.797 0zm.59-21.907a9.83 9.83 0 0 1-7.977 0 .998.998 0 0 0-1.41.913V41.71a1 1 0 0 0 1 1h8.797a1 1 0 0 0 1-1V19.715a.998.998 0 0 0-1.41-.913M2 46.227h43.986v-2H2zm18.594-5.518h6.797V27.753h-6.797zm-1 2h8.797a1 1 0 0 0 1-1V26.753a1 1 0 0 0-1-1h-8.797a1 1 0 0 0-1 1V41.71a1 1 0 0 0 1 1m-13.076-2h6.798V23.353H6.518zm-1 2h8.798a1 1 0 0 0 1-1V22.354a1 1 0 0 0-1-1H5.518a1 1 0 0 0-1 1V41.71a1 1 0 0 0 1 1"
    />
  </svg>
);
export default AmazonCloudwatchEventTimeBased;

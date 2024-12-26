import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonSimpleQueueServiceQueue: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M37.449 22.261v3.96l-2.423-2.014zm.361 6.86a1 1 0 0 0 1.639-.769v-8.176a1 1 0 0 0-1.626-.779l-5.004 4.017a1.002 1.002 0 0 0-.013 1.549zm-27.283-6.814 2.424 2.015-2.424 1.945zm-1.432 6.946a1 1 0 0 0 1.058-.121l5.005-4.017a1.002 1.002 0 0 0 .013-1.549l-5.005-4.159a1.001 1.001 0 0 0-1.639.769v8.176c0 .385.221.735.568.901m19.273 4.774h2v-19.28h-2zm-5.247 0h2v-19.28h-2zm-5.41 0h2v-19.28h-2zM3.999 35.773h39.978V13.001H3.999zM44.977 11H3a1 1 0 0 0-1 1v24.773a1 1 0 0 0 1 1h41.977a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1"
    />
  </svg>
);
export default AmazonSimpleQueueServiceQueue;

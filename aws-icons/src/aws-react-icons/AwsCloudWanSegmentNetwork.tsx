import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsCloudWanSegmentNetwork: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M28 38.81v5.029c7.98-1.434 14.406-7.859 15.84-15.84h-5.03C37.528 33.319 33.32 37.527 28 38.81m-1 7.189a1.003 1.003 0 0 1-1-1v-7a1 1 0 0 1 .822-.984c5.164-.933 9.26-5.029 10.194-10.194a1 1 0 0 1 .984-.822h7a1 1 0 0 1 .993 1.118c-1.161 9.775-9.1 17.713-18.875 18.875a1 1 0 0 1-.118.007m-22.84-18C5.594 35.98 12.019 42.405 20 43.839V38.81c-5.32-1.283-9.527-5.491-10.811-10.811zm16.84 18a1 1 0 0 1-.118-.007c-9.776-1.162-17.714-9.1-18.875-18.875A1.002 1.002 0 0 1 3 25.999h7a1 1 0 0 1 .984.822c.933 5.165 5.03 9.261 10.194 10.194a1 1 0 0 1 .822.984v7a1 1 0 0 1-1 1m17.81-26h5.03C42.406 12.018 35.98 5.593 28 4.159v5.029c5.319 1.283 9.527 5.491 10.81 10.811m6.19 2h-7a1 1 0 0 1-.984-.822c-.933-5.165-5.03-9.262-10.194-10.194A1 1 0 0 1 26 9.999v-7a1 1 0 0 1 1.118-.993c9.776 1.162 17.714 9.1 18.875 18.875A1 1 0 0 1 45 21.999m-40.84-2h5.029c1.284-5.32 5.492-9.528 10.81-10.811V4.159c-7.98 1.434-14.405 7.859-15.84 15.84m5.84 2H3a1 1 0 0 1-.993-1.118c1.16-9.775 9.099-17.713 18.875-18.875A1 1 0 0 1 22 2.999v7a1 1 0 0 1-.822.984c-5.164.932-9.261 5.029-10.194 10.194a1 1 0 0 1-.984.822"
    />
  </svg>
);
export default AwsCloudWanSegmentNetwork;

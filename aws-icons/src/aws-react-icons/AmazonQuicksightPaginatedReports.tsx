import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonQuicksightPaginatedReports: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M27 32h6v-2h-6zm0-4h6v-2h-6zm0-4h6v-2h-6zm0-4h6v-2h-6zm-5 12h3v-2h-3zm0-4h3v-2h-3zm0-4h3v-2h-3zm0-4h3v-2h-3zm-2 14h15V16H20zm16-20H19a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1m0 28h2v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v2H9v36h27zm-21-4V4h17v7a1 1 0 0 0 1 1h7v26zM34 5.415 38.586 10H34zM41.991 11a1 1 0 0 0-.284-.707l-8-8A1 1 0 0 0 33 2.01V2H14a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h27a1 1 0 0 0 1-1V11z"
    />
  </svg>
);
export default AmazonQuicksightPaginatedReports;

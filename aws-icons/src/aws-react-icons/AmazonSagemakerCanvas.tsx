import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonSagemakerCanvas: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#01A88D"
      fillRule="evenodd"
      d="m30.587 31 9.086 8.26-1.346 1.48L29 32.26V36h-2v-6a1 1 0 0 1 1-1h6v2zm10.412-9v11h-2V23H16v17h16v2H15a1 1 0 0 1-1-1V22a1 1 0 0 1 1-1h25a1 1 0 0 1 1 1m-6-5h-4v-2h5a1 1 0 0 1 1 1v3h-2zm-20 0h13v-2H15zm-7-2h4v2H9v2H7v-3a1 1 0 0 1 1-1M7 27h2v-5H7zm2 5h3v2H8a1 1 0 0 1-1-1v-3h2zm4-24h4V6h-4zM7 8h4V6H7zM4 44h40V12H4zm0-34h40V4H4zm41-8H3a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    />
  </svg>
);
export default AmazonSagemakerCanvas;

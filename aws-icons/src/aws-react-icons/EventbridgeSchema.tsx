import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const EventbridgeSchema: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M19 27.25v-5.774l5-2.887 5 2.887v5.774l-5 2.886zm5 5.041a1 1 0 0 0 .5-.134l6-3.464c.31-.178.5-.508.5-.866v-6.928a1 1 0 0 0-.5-.866l-6-3.465a1 1 0 0 0-1 0l-6 3.465a1 1 0 0 0-.5.866v6.928c0 .358.19.688.5.866l6 3.464a1 1 0 0 0 .5.134m8.707-14.584-1.414-1.414 6-6 1.414 1.414zM15.293 31.293l1.414 1.414-6 6-1.414-1.414zm1-13.586-6-6 1.414-1.414 6 6zm16.414 13.586 6 6-1.414 1.414-6-6zM34 26h6v-2h-6zM8 26h6v-2H8zm15-13h2V7h-2zm0 28h2v-5h-2zM4 44h40V4H4zM46 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1z"
    />
  </svg>
);
export default EventbridgeSchema;

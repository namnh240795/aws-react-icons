import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotAnalyticsNotebook: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M7.972 2v5.206H5v2h2.972v3.261H5v2h2.972v3.314H5v1.999h2.972v3.275H5v1.999h2.972v3.193H5v2h2.972v3.233H5v2h2.972v3.314H5v2h2.972v5.179h35.614V2zm2 2.001h31.614v39.972H9.972v-3.179h3.079v-2H9.972V35.48h3.079v-2H9.972v-3.233h3.079v-2H9.972v-3.193h3.079v-1.999H9.972V19.78h3.079v-1.999H9.972v-3.314h3.079v-2H9.972V9.206h3.079v-2H9.972zm6.889 5.205h19.698v-2H16.861zm0 6.388h19.698v-2.001H16.861zm0 6.333h19.698v-2H16.861zm0 6.387h9.903v-2.001h-9.903z"
    />
  </svg>
);
export default IotAnalyticsNotebook;

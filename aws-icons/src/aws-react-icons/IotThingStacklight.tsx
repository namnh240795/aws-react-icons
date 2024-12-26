import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotThingStacklight: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M39 37.865C39 38.49 38.491 39 37.865 39h-27.73C9.509 39 9 38.49 9 37.865v-27.73C9 9.509 9.509 9 10.135 9h27.73C38.491 9 39 9.509 39 10.135zM46 15v-2h-5v-2.865A3.14 3.14 0 0 0 37.865 7H35V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-2.865A3.14 3.14 0 0 0 7 10.135V13H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v2.865A3.14 3.14 0 0 0 10.135 41H13v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h2.865A3.14 3.14 0 0 0 41 37.865V35h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3zm-34.008 7h4v-2h-4zm4.293 2.293 1.414 1.414-2 2-1.414-1.414zm-.586-10 2 2-1.414 1.414-2-2zM31.992 22h4v-2h-4zm-.293 2.293 2 2-1.414 1.414-2-2zm0-6.586-1.414-1.414 2-2 1.414 1.414zM20.992 29h6v-4h-6zm0-6h6v-4h-6zm0-6h6v-4h-6zm7-6h-8a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v4h-4v2h10v-2h-4v-4h3a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1"
    />
  </svg>
);
export default IotThingStacklight;

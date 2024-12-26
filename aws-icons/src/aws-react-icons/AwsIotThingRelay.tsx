import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotThingRelay: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M22 33h2V15h-2zm9-3a1.501 1.501 0 1 1 1.5-1.5c0 .827-.673 1.5-1.5 1.5m1.823-4.474A3.46 3.46 0 0 0 31 25c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.903 2.5 3.336V36h2v-4.164c1.44-.433 2.5-1.756 2.5-3.336 0-.514-.117-.998-.316-1.437l3.916-5.482-1.627-1.163zM31 18a1.501 1.501 0 0 1 0 3 1.501 1.501 0 0 1 0-3m0 5c1.93 0 3.5-1.571 3.5-3.5 0-1.581-1.06-2.904-2.5-3.337V12h-2v4.163c-1.44.433-2.5 1.756-2.5 3.337 0 1.929 1.57 3.5 3.5 3.5m-12.515-1.637c.939.654 1.515 1.576 1.515 2.614s-.576 1.96-1.515 2.613c.939.654 1.515 1.577 1.515 2.614 0 1.778-1.691 3.218-4 3.545V36h-2v-4.182a1 1 0 0 1 1-1c1.717 0 3-.852 3-1.614s-1.283-1.614-3-1.614a1 1 0 1 1 0-2c1.717 0 3-.852 3-1.613 0-.762-1.283-1.614-3-1.614a1 1 0 1 1 0-2c1.717 0 3-.852 3-1.613 0-.762-1.283-1.614-3-1.614a1 1 0 0 1-1-1V12h2v3.205c2.309.326 4 1.766 4 3.545 0 1.037-.576 1.96-1.515 2.613M39 37.865c0 .626-.509 1.135-1.135 1.135h-27.73A1.136 1.136 0 0 1 9 37.865v-27.73C9 9.509 9.509 9 10.135 9h27.73C38.491 9 39 9.509 39 10.135zM46 15v-2h-5v-2.865A3.14 3.14 0 0 0 37.865 7H35V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-2.865A3.14 3.14 0 0 0 7 10.135V13H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v2.865A3.14 3.14 0 0 0 10.135 41H13v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h2.865A3.14 3.14 0 0 0 41 37.865V35h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3z"
    />
  </svg>
);
export default AwsIotThingRelay;
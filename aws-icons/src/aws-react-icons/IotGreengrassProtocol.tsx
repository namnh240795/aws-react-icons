import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotGreengrassProtocol: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M19 25h4v-2h-4zm-6 0h4v-2h-4zm-6 0h4v-2H7zm-3 4h40V19H4zm31.917 13c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m-10.416.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5M11.917 42c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5M10.499 7.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5m12-2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5m12.002 2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5M45 17H33.379l3.317-3.217a1 1 0 0 0 .304-.718v-2.228c1.441-.433 2.501-1.757 2.501-3.337 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.58 1.059 2.903 2.499 3.336v1.806L30.506 17H25V8.836c1.44-.433 2.499-1.756 2.499-3.336 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.58 1.06 2.904 2.501 3.337V17h-5.508L13 12.642v-1.806c1.44-.433 2.499-1.756 2.499-3.336 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.58 1.06 2.904 2.501 3.337v2.228c0 .271.109.53.304.718L14.62 17H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12.023l-3.721 3.625a1 1 0 0 0-.302.716v1.796c-1.483.406-2.583 1.753-2.583 3.363 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.549-1.02-2.852-2.417-3.311v-1.426L17.89 31H23v8.164c-1.44.433-2.499 1.756-2.499 3.336 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.904-2.501-3.337V31h5.086L35 35.765v1.372c-1.483.406-2.583 1.753-2.583 3.363 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.549-1.02-2.852-2.417-3.311v-1.848a1 1 0 0 0-.304-.717L32.959 31H45a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1"
    />
  </svg>
);
export default IotGreengrassProtocol;
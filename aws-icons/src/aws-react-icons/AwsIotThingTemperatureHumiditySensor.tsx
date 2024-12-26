import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotThingTemperatureHumiditySensor: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M14.437 20.378c-.788 0-1.43-.642-1.43-1.43 0-.632.834-2.217 1.43-3.289.597 1.073 1.43 2.657 1.43 3.289 0 .788-.642 1.43-1.43 1.43m.895-7.224a1.002 1.002 0 0 0-1.79.001c-.105.21-.283.521-.492.892-1.078 1.897-2.043 3.7-2.043 4.901a3.434 3.434 0 0 0 3.43 3.43 3.434 3.434 0 0 0 3.43-3.43c0-1.203-.968-3.007-2.046-4.906-.208-.369-.386-.678-.49-.888M30 27h4v-2h-4zm0-4h5v-2h-5zm0-4h4v-2h-4zm0-4h5v-2h-5zm-6 17.977c-.552 0-1-.449-1-1s.448-1 1-1a1.001 1.001 0 0 1 0 2m1-3.816V18h-2v11.161a3 3 0 0 0-2 2.816c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816m1.523 5.92c-.953.776-2.158 1.061-3.392.806-1.544-.321-2.774-1.589-3.061-3.155a3.96 3.96 0 0 1 1.532-3.935l.398-.3V14c0-1.103.898-2 2-2s2 .897 2 2v14.498l.398.299c1.018.77 1.602 1.929 1.602 3.18 0 1.209-.538 2.34-1.477 3.104M28 27.528V14c0-2.206-1.794-4-4-4s-4 1.794-4 4v13.529a5.988 5.988 0 0 0 2.726 10.316 6.2 6.2 0 0 0 1.265.131 6 6 0 0 0 3.794-1.344A5.98 5.98 0 0 0 30 31.977a5.93 5.93 0 0 0-2-4.449m11 10.337C39 38.49 38.491 39 37.865 39h-27.73c-.626 0-1.136-.51-1.136-1.135V10.134C9 9.509 9.51 9 10.135 9h27.731C38.493 9 39 9.509 39 10.134zM46 15v-2h-5v-2.866A3.14 3.14 0 0 0 37.865 7H35V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-2.865A3.14 3.14 0 0 0 7 10.134V13H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v2.865A3.14 3.14 0 0 0 10.134 41H13v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h2.866A3.14 3.14 0 0 0 41 37.865V35h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3z"
    />
  </svg>
);
export default AwsIotThingTemperatureHumiditySensor;

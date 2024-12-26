import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsLaunchWizard: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M25.103 24h2v1h-2v2h-1v-2h-2v-1h2v-2h1zm3-6h4v-4h-4zm4.5-5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m-1.5 18h2v1h-2v2h-1v-2h-2v-1h2v-2h1zm-11 1h5v-1h-5zm2.757-14.229-1.095-1.095 1.842-1.842 1.095 1.095zM8.301 32.329l-1.094-1.095 13.851-13.851 1.095 1.095zm17.461-16.753-1.802-1.803a.5.5 0 0 0-.707 0L6.146 30.88a.5.5 0 0 0 0 .707l1.802 1.803a.5.5 0 0 0 .707 0l17.107-17.107a.5.5 0 0 0 0-.707M13.103 16h-2v-1h2v-2h1v2h2v1h-2v2h-1zm8-5h4V7h-4zm-.5 1h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5m-9.5-3h3V8h-3zm-5 0h4V8h-4zm22 2h4V7h-4zm4.5-5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default AwsLaunchWizard;

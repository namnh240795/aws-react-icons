import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsDirectoryService: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M17 27h1v-1h-1zm-5 0h4v-1h-4zm0-3h6v-1h-6zm21-10H10v5h10v-2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V19h1zM21.859 27h8.385c-.208-1.463-1.326-2.586-3.094-3.088a3 3 0 0 1-1.123.246c-.391 0-.762-.096-1.119-.242-1.741.501-2.844 1.621-3.049 3.084m6.112-5.76a1.936 1.936 0 0 0-1.944-1.924 1.936 1.936 0 0 0-1.943 1.924c0 .697.384 1.341 1.002 1.679a1.97 1.97 0 0 0 1.88-.001 1.91 1.91 0 0 0 1.005-1.678M21 20v6.256c.38-1.354 1.382-2.425 2.879-3.044a2.9 2.9 0 0 1-.795-1.972c0-1.612 1.32-2.924 2.943-2.924s2.944 1.312 2.944 2.924c0 .744-.3 1.437-.794 1.968 1.374.568 2.364 1.521 2.823 2.711V17H21v3m12 0h-1v7.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V20H10v10h23zm1-6.5v17a.5.5 0 0 1-.5.5h-24a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h24a.5.5 0 0 1 .5.5M7 26h1v1H6.5a.5.5 0 0 1-.5-.5v-16a.5.5 0 0 1 .5-.5h24a.5.5 0 0 1 .5.5V12h-1v-1H7z"
      />
    </g>
  </svg>
);
export default AwsDirectoryService;

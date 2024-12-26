import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsCodeartifact: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m18.082 22.997 2.95-6.591.912.408-2.95 6.59zm5.131-2.008 1.77-1.292-1.559-1.582.713-.702 1.966 1.995a.5.5 0 0 1-.062.755l-2.238 1.633zm-5.4-2.831-1.795 1.31 1.564 1.583-.711.703-1.973-1.995a.498.498 0 0 1 .061-.755l2.265-1.653zm.222-11.297L8 12.794v11.07H7V12.509a.5.5 0 0 1 .245-.43l10.28-6.08zM34 14.864v12.52a.5.5 0 0 1-.251.433L23.478 33.73l-.499-.866L33 27.095V14.864zm-6 9.414-7.54 4.288L13 24.194v-8.662l7.455-4.287L28 15.619zm1 .29v-9.237a.5.5 0 0 0-.249-.433l-8.044-4.663a.5.5 0 0 0-.5-.001l-7.956 4.575a.5.5 0 0 0-.251.434v9.237a.5.5 0 0 0 .247.432l7.956 4.662a.5.5 0 0 0 .5.004l8.044-4.575a.5.5 0 0 0 .253-.434"
      />
    </g>
  </svg>
);
export default AwsCodeartifact;

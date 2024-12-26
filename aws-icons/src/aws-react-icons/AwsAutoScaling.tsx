import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsAutoScaling: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M24.023 21.73v-2.994l-3.018 1.526v3.34zm-7.036-.481 3.018 2.253v-3.267l-3.018-1.844zm.532-3.705 3.01 1.838 2.962-1.498-3.009-1.815zm7.262-.05a.5.5 0 0 1 .242.429v4.086c0 .173-.09.334-.236.425l-4.018 2.49a.5.5 0 0 1-.562-.024l-4.019-3a.5.5 0 0 1-.201-.4v-4a.5.5 0 0 1 .277-.448l4.019-2a.5.5 0 0 1 .48.019zM34 19.455h-4.904l2.281-2.627-.755-.655-3 3.454a.5.5 0 0 0-.004.65l3 3.546.763-.645-2.303-2.723H34zm-23.623-3.282-.755.655 2.281 2.627H7v1h4.921l-2.303 2.723.763.645 3-3.546a.5.5 0 0 0-.004-.65zm10.628 15.994V26.5h-1v5.672l-2.629-3.002-.752.659 3.504 4a.498.498 0 0 0 .753 0l3.496-4-.754-.659zm-3.62-21.212-.666-.746 3.452-3.081a.5.5 0 0 1 .666 0l3.455 3.08-.666.747-2.621-2.338V13.5h-1V8.615z"
      />
    </g>
  </svg>
);
export default AwsAutoScaling;

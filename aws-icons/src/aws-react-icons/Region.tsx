import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Region: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#00A4A6" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M14 20.026v-9h15.293l-4.147 4.146a.5.5 0 0 0 0 .708l4.147 4.146zm12.207-4.5 4.647-4.646a.5.5 0 0 0-.354-.854H14V8.97A1.528 1.528 0 0 0 13.495 6c-.845 0-1.532.687-1.532 1.531 0 .67.435 1.235 1.037 1.442v24.053h-3v1h7v-1h-3v-12h16.5a.5.5 0 0 0 .354-.854z"
      />
    </g>
  </svg>
);
export default Region;

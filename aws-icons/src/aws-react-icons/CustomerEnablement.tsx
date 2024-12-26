import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CustomerEnablement: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="m36 29.936-4.609 2.713c-.496-3.934-2.636-6.979-5.409-7.974a4.5 4.5 0 0 0 2.642-4.087c0-2.482-2.019-4.5-4.5-4.5a4.505 4.505 0 0 0-4.5 4.5c0 1.784 1.052 3.315 2.56 4.042-2.854.945-5.087 4.057-5.577 8.018L12 29.936V17.225l12-7.064 12 7.064zm-15.376-9.348c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5M24 37l-6.562-3.862.113.01c.408-4.46 3.18-7.822 6.449-7.822 3.165 0 5.925 3.263 6.42 7.591l.641-.073zm0-28-13 7.654v13.853l13 7.654 13-7.654V16.654z"
      />
    </g>
  </svg>
);
export default CustomerEnablement;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsWickr: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M13 23.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5zM16 12h8V9.75C24 8.233 22.584 7 20.844 7h-1.688C17.416 7 16 8.233 16 9.75zm-1.5 0h.5V9.75C15 7.682 16.864 6 19.156 6h1.688C23.136 6 25 7.682 25 9.75V12h.5c1.379 0 2.5 1.122 2.5 2.5v9c0 1.378-1.121 2.5-2.5 2.5h-11a2.503 2.503 0 0 1-2.5-2.5v-9c0-1.378 1.121-2.5 2.5-2.5m16-2H26v1h4.5c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5h-12a.5.5 0 0 0-.5.5v2.959l-4.188-3.35A.5.5 0 0 0 13.5 29h-4c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5H14v-1H9.5A2.503 2.503 0 0 0 7 12.5v15C7 28.878 8.121 30 9.5 30h3.824l4.863 3.891a.5.5 0 0 0 .53.06A.5.5 0 0 0 19 33.5V30h11.5c1.379 0 2.5-1.122 2.5-2.5v-15c0-1.378-1.121-2.5-2.5-2.5M18.854 22.854l6-6-.708-.708-6 6zm-3-1-.708-.708 6-6 .708.708z"
      />
    </g>
  </svg>
);
export default AwsWickr;
import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonBedrock: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m16.516 32.933-2.223-1.27 3.431-1.716-.447-.894-4 2 .02.041L10 29.21v-3.4l3.724-1.863-.447-.894-3.741 1.87L7 23.233v-2.424l3.724-1.862-.447-.894L7 19.691v-2.924l2.523-1.68L13 17.037v3.153l-1.723.862.447.894 1.776-.888 1.777.888.447-.894L14 20.191v-3.424l2.778-1.85A.5.5 0 0 0 17 14.5V11h-1v3.232l-2.722 1.815L10 14.207v-4.172l3-1.378V13h1V8.198l2.492-1.144L20 8.81v14.382l-7.723 3.862.447.894L20 24.31v6.882zM31.5 25.5a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0m-5 4.5a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0m-1-20a1.001 1.001 0 1 1 1 1c-.551 0-1-.449-1-1m6.5 7.5a1.001 1.001 0 0 1 0 2c-.551 0-1-.449-1-1s.449-1 1-1M30.071 19c.224.86 1 1.5 1.929 1.5 1.103 0 2-.897 2-2s-.897-2-2-2c-.929 0-1.705.64-1.929 1.5H21v-3h5.5a.5.5 0 0 0 .5-.5v-2.57c.86-.225 1.5-1 1.5-1.93 0-1.103-.897-2-2-2s-2 .897-2 2c0 .93.64 1.705 1.5 1.93V14h-5V8.5a.5.5 0 0 0-.276-.447l-4-2a.5.5 0 0 0-.433-.008l-7 3.215A.5.5 0 0 0 9 9.714v4.518l-2.777 1.852A.5.5 0 0 0 6 16.5v7c0 .167.084.323.223.416L9 25.767V29.5a.5.5 0 0 0 .252.434l7 4a.5.5 0 0 0 .472.013l4-2A.5.5 0 0 0 21 31.5V27h4v1.071c-.86.224-1.5 1-1.5 1.93 0 1.102.898 2 2 2 1.103 0 2-.898 2-2 0-.93-.64-1.706-1.5-1.93v-1.57a.5.5 0 0 0-.5-.5H21v-3h6.293l1.491 1.49c-.176.297-.284.64-.284 1.01 0 1.102.898 2 2 2 1.103 0 2-.898 2-2 0-1.104-.897-2-2-2-.369 0-.712.107-1.009.282l-1.637-1.637A.5.5 0 0 0 27.5 22H21v-3z"
      />
    </g>
  </svg>
);
export default AmazonBedrock;

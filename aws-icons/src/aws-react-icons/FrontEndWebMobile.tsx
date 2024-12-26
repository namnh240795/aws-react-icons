import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const FrontEndWebMobile: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M30 35h3v-1h-3zm7 1.5V33H26v3.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5m-11-18V32h11V18.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5m12 0v18c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-18c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5M14 14h12v2h1v-2.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5H24v-1H14zm-2.093 21H24v1H11.907C10.855 36 10 35.121 10 34.041V11.959c0-1.08.855-1.959 1.907-1.959h16.186c1.052 0 1.907.879 1.907 1.959V16h-1v-4.041c0-.529-.407-.959-.907-.959H11.907c-.5 0-.907.43-.907.959v22.082c0 .529.407.959.907.959"
      />
    </g>
  </svg>
);
export default FrontEndWebMobile;

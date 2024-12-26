import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Activate: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M33 19.972c0 5.29-3.18 9.843-7.725 11.871v-1.109C29.251 28.777 32 24.695 32 19.972c0-5.589-3.847-10.285-9.028-11.612l-.492-1.144C28.466 8.378 33 13.653 33 19.972M14.725 30.734v1.109C10.181 29.815 7 25.262 7 19.972c0-6.317 4.531-11.59 10.512-12.755l-.491 1.145C11.843 9.692 8 14.385 8 19.972c0 4.723 2.749 8.805 6.725 10.762M16 33.972h1v-10h-1zm7 0h1v-10h-1zm-3.5-2h1v-11h-1zM20 7.669l5.206 12.178-4.901-3.737c-.158-.12-.442-.091-.616.005l-4.895 3.732zm-6.719 14.12a.5.5 0 0 0 .611.003l6.104-4.66 6.112 4.66a.5.5 0 0 0 .763-.594L20.492 6.276c-.158-.368-.826-.368-.984 0l-6.379 14.922a.5.5 0 0 0 .152.591"
      />
    </g>
  </svg>
);
export default Activate;

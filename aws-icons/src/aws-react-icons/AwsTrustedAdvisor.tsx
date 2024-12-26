import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsTrustedAdvisor: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h64v64H0z" />
      <path
        fill="#FFF"
        d="m26 18.662 5-2.115v17.396c-4.854-.555-5-5.125-5-5.175zm12 10.106c0 .05-.146 4.62-5 5.175V16.547l5 2.115zM32 36c6.563 0 8-5.219 8-7.23v-10.77a1 1 0 0 0-.61-.92l-7-2.962a1 1 0 0 0-.78 0l-7 2.962A1 1 0 0 0 24 18v10.77c0 2.011 1.438 7.23 8 7.23M22 15.773l10-3.707 10 3.707v12.188C42 31.711 40.701 38 32 38c-9.518 0-10-8.362-10-10.038zM32 40c11.135 0 12-9.214 12-12.038V15.078a1 1 0 0 0-.652-.938l-11-4.078a1 1 0 0 0-.696 0l-11 4.078a1 1 0 0 0-.652.938v12.883C20 29.193 20.337 40 32 40m17 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m-15 4c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2m-19-4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m34-6c-.997 0-1.899.38-2.601.986l-1.672-1.674c2.5-2.055 4.626-4.714 6.171-7.872l-1.796-.88C45.646 37.616 39.093 42 32 42c-7.359 0-14.804-4.704-18.102-11.44l-1.796.88c1.488 3.04 3.69 5.664 6.32 7.725l-1.402 1.402A3.97 3.97 0 0 0 15 40c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.794 4-4c0-.739-.216-1.424-.566-2.019l1.633-1.633c3.269 2.13 7.055 3.422 10.933 3.614v2.18c-1.721.448-3 2-3 3.858 0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.279-3.41-3-3.858v-2.18c3.625-.189 7.09-1.392 10.112-3.435l2.135 2.135c-.15.42-.247.867-.247 1.338 0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4"
      />
    </g>
  </svg>
);
export default AwsTrustedAdvisor;
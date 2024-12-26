import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsDataExchange: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m16.298 27.242-2.035-2.035 2.035-2.035-.707-.707-2.389 2.388a.5.5 0 0 0 0 .707l2.389 2.389zM26.354 14.56a.5.5 0 0 0 0-.707l-2.389-2.388-.707.707 2.035 2.035-2.035 2.035.707.707zM25 26.02h6v-1h-6zm-6 4h15v-1H19zm-10-15h6v-1H9zm-3-4h15v-1H6zM24.265 7a7.6 7.6 0 0 0-3.682.952l.486.874A6.6 6.6 0 0 1 24.265 8a6.59 6.59 0 0 1 6.585 6.585 6.59 6.59 0 0 1-6.585 6.585c-.439 0-.871-.06-1.298-.149l-.345.951a7.5 7.5 0 0 0 1.643.198c4.182 0 7.585-3.403 7.585-7.585S28.447 7 24.265 7m-6.36 9.304a6.7 6.7 0 0 1-.225-1.719c0-.874.168-1.721.499-2.518l-.924-.384a7.613 7.613 0 0 0-.314 4.88zM21.5 32.02h-12a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v8.5h-1v-8H10v11h12v.5c0 .277-.223.5-.5.5"
      />
    </g>
  </svg>
);
export default AwsDataExchange;
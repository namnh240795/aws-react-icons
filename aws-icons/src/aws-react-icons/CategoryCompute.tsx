import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CategoryCompute: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M18 30h12V18H18zm12.5-13h-13a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5m3.5 2v15H14V14h20v5m1-5.5a.5.5 0 0 0-.5-.5H32v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2.5a.5.5 0 0 0-.5.5V16h-3v1h3v2h-3v1h3v2h-3v1h3v2h-3v1h3v2h-3v1h3v2h-3v1h3v2.5a.5.5 0 0 0 .5.5H16v3h1v-3h2v3h1v-3h2v3h1v-3h2v3h1v-3h2v3h1v-3h2v3h1v-3h2.5a.5.5 0 0 0 .5-.5V32h3v-1h-3v-2h3v-1h-3v-2h3v-1h-3v-2h3v-1h-3v-2h3v-1h-3v-2h3v-1h-3z"
      />
    </g>
  </svg>
);
export default CategoryCompute;

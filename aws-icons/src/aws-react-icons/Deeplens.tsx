import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Deeplens: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M19.004 32.001h1.999v-.999h-1.999zm0-1.998h1.999v-1h-1.999zm0-1.999h1.999v-.999h-1.999zm.5-14.988h1v-1h-1zm.5-3.014a2.5 2.5 0 0 0-2.5 2.498 2.5 2.5 0 0 0 2.5 2.498 2.5 2.5 0 0 0 2.498-2.498 2.5 2.5 0 0 0-2.499-2.498m0-1a3.5 3.5 0 0 1 3.498 3.498 3.5 3.5 0 0 1-3.499 3.498 3.5 3.5 0 0 1-3.498-3.498 3.5 3.5 0 0 1 3.498-3.497M21.002 7h1V6h-1zM23.96 34h.999v-6.995h-1zm-8.975 0h1v-4.996h-1zm0-6.995h1v-1.998h-1zm11.037-6.78c-.504-.236-1.114-.225-1.626-.236h-1.394v.999h1.417c.413 0 .878 0 1.178.142.12.057.403.19.403.879v1h-3.998v.998H26V34h1V22.009c0-.878-.329-1.478-.978-1.784m-6.019 3.792v-.999H14V22.01c0-.697.261-.827.375-.882.282-.14.725-.14 1.159-.138h1.471v-1H15.52c-.513.01-1.096 0-1.586.241-.62.304-.934.904-.934 1.779l.007 5.995h1L14 24.016zM27 7.002v11.01c0 .319 0 .572-.2.778-.204.211-.462.215-.76.215h-4.044v2.005h-1v-2.005h-1.999v2.005h-1v-2.005h-3.99c-.782 0-1.007-.223-1.007-.993V7.02c0-.353 0-.607.215-.816C13.424 6 13.68 6 14.006 6h5.997v1H14v11.006h12V7h-2.998V6H26c.326 0 .583 0 .794.212.206.21.206.465.206.79"
      />
    </g>
  </svg>
);
export default Deeplens;
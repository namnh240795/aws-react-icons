import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonVpcRouter: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M42.828 23v2H29.311l2.638 2.638-1.414 1.414-4.345-4.345a1 1 0 0 1 0-1.414l4.345-4.345 1.414 1.414L29.311 23zM21.81 24.707l-4.344 4.345-1.414-1.414L18.69 25H5.173v-2H18.69l-2.637-2.638 1.414-1.414 4.344 4.345a1 1 0 0 1 0 1.414m5.828 11.621 1.414 1.414-4.345 4.345a.997.997 0 0 1-1.414 0l-4.345-4.345 1.414-1.414L23 38.966V9.325l-2.585 3.016-1.52-1.301 4.345-5.069c.381-.444 1.14-.444 1.52 0l4.344 5.069-1.519 1.301L25 9.325v29.641zM24 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20m0-42C11.87 2 2 11.869 2 24s9.87 22 22 22 22-9.869 22-22S36.131 2 24 2"
    />
  </svg>
);
export default AmazonVpcRouter;

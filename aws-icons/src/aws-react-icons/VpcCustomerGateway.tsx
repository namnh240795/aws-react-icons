import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const VpcCustomerGateway: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="m42.208 24.707-4.375 4.375-1.414-1.414L39.087 25H25v14.086l2.668-2.668 1.414 1.414-4.375 4.375a.997.997 0 0 1-1.414 0l-4.375-4.375 1.414-1.414L23 39.086V25H8.915l2.668 2.668-1.414 1.414-4.375-4.375a1 1 0 0 1 0-1.414l4.375-4.376 1.414 1.414L8.915 23H23V8.913l-2.668 2.668-1.414-1.414 4.375-4.375a1 1 0 0 1 1.414 0l4.375 4.375-1.414 1.414L25 8.913V23h14.087l-2.668-2.669 1.414-1.414 4.375 4.376a1 1 0 0 1 0 1.414M24 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20m0-42C11.87 2 2 11.869 2 24s9.87 22 22 22 22-9.869 22-22S36.131 2 24 2"
    />
  </svg>
);
export default VpcCustomerGateway;

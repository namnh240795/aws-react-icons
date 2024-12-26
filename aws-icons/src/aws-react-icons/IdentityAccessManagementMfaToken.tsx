import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IdentityAccessManagementMfaToken: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="m32.626 24.794 1.752-5.121 1.768 5.121zm2.855-6.881H33.37l-4.057 11.088h1.953l.895-2.783h4.433l.928 2.783h1.953zm-10.616 4.769h3.92v1.567h-3.92v4.752h-1.952V17.913h6.736v1.568h-4.784zm-6.657-4.769h2.113v11.088h-1.792v-8.305l-2.88 5.522h-1.76l-2.784-5.489v8.272H9.313V17.913h2.176l3.327 6.608zM24 44.002C12.973 44.002 4 35.029 4 24.001S12.973 4 24 4c11.03 0 20.003 8.973 20.003 20.001S35.03 44.002 24 44.002M24 2C11.869 2 2 11.869 2 24.001s9.869 22.001 22 22.001c12.133 0 22.003-9.869 22.003-22.001S36.133 2 24 2"
    />
  </svg>
);
export default IdentityAccessManagementMfaToken;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const BraketSimulator3: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M9 39h30V9H9zm32-26v4h5v2h-5v4h5v2h-5v4h5v2h-5v4h5v2h-5v3a1 1 0 0 1-1 1h-3v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5H8a1 1 0 0 1-1-1v-3H2v-2h5v-4H2v-2h5v-4H2v-2h5v-4H2v-2h5v-4H2v-2h5V8a1 1 0 0 1 1-1h3V2h2v5h4V2h2v5h4V2h2v5h4V2h2v5h4V2h2v5h3a1 1 0 0 1 1 1v3h5v2zm-30.598 1.914v-2c4.042 0 5.777 5.638 7.613 11.608 1.505 4.894 3.211 10.44 5.923 10.44 2.716 0 4.425-5.516 5.932-10.382 1.859-6 3.614-11.666 7.728-11.666v2c-2.64 0-4.327 5.449-5.817 10.257-1.796 5.797-3.652 11.791-7.843 11.791s-6.043-6.025-7.835-11.852c-1.47-4.779-3.136-10.196-5.701-10.196"
    />
  </svg>
);
export default BraketSimulator3;

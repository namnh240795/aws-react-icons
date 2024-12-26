import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonBraketSimulator4: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M9 39h30V9H9zm32-26v4h5v2h-5v4h5v2h-5v4h5v2h-5v4h5v2h-5v3a1 1 0 0 1-1 1h-3v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5h-4v5h-2v-5H8a1 1 0 0 1-1-1v-3H2v-2h5v-4H2v-2h5v-4H2v-2h5v-4H2v-2h5v-4H2v-2h5V8a1 1 0 0 1 1-1h3V2h2v5h4V2h2v5h4V2h2v5h4V2h2v5h4V2h2v5h3a1 1 0 0 1 1 1v3h5v2zM21.845 25H10v-2h11.324l-2.962-2.962 1.414-1.414 4.077 4.076 4.075-4.076 1.414 1.414L26.38 23H37v2H25.969l3.485 3.485-1.414 1.414-4.133-4.133-4.134 4.133-1.414-1.414z"
    />
  </svg>
);
export default AmazonBraketSimulator4;

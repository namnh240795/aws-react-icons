import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonDynamodbStream: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#C925D1"
      fillRule="evenodd"
      d="M2 4h44V2H2zm0 42h44v-2H2zm28.887-12.384 7.724 2.08 5.202-19.312-7.725-2.08zm8.43 4.306a1 1 0 0 1-.259-.034l-9.657-2.601a1.002 1.002 0 0 1-.706-1.226l5.722-21.243a1.003 1.003 0 0 1 1.226-.706l9.655 2.601c.533.144.849.692.706 1.226l-5.721 21.243a1 1 0 0 1-.966.74M17 34h8V14h-8zm9 2H16a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1M4 34h8V14H4zm9 2H3a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1"
    />
  </svg>
);
export default AmazonDynamodbStream;

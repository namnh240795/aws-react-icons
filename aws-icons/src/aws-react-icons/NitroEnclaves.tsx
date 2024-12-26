import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const NitroEnclaves: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M16.771 23H19.4a.502.502 0 0 1 .488.608l-.667 3.002L23.228 21h-2.629a.502.502 0 0 1-.488-.608l.667-3.002zm1.429 6.4a.5.5 0 0 1-.489-.608L18.777 24h-2.978a.499.499 0 0 1-.407-.791l6-8.399a.5.5 0 0 1 .896.398L21.222 20H24.2a.499.499 0 0 1 .407.791l-6 8.399a.5.5 0 0 1-.407.21M12 33h16V13.5a.5.5 0 0 1 .5-.5H30V7h-3v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V7h-4v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V7h-3v6h1.5a.5.5 0 0 1 .5.5zm16.5 1h-17a.5.5 0 0 1-.5-.5V14H9.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V9h3V6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V9h3V6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H29v19.5a.5.5 0 0 1-.5.5"
      />
    </g>
  </svg>
);
export default NitroEnclaves;

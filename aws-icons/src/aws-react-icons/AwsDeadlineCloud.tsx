import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsDeadlineCloud: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m25.051 25.924-2.001 1-2-1 .001-2.507 2-1 2 1zM18.55 19.04l2-1 2 1v2.507l-2 1-2-1zm7.225 3.62-2.225-1.112v-2.817a.5.5 0 0 0-.276-.447l-2.5-1.25a.5.5 0 0 0-.448 0l-2.5 1.25a.5.5 0 0 0-.276.447v3.125a.5.5 0 0 0 .276.447l2.225 1.113-.001 2.816a.5.5 0 0 0 .276.447l2.5 1.25a.5.5 0 0 0 .448 0l2.501-1.25a.5.5 0 0 0 .276-.447v-3.125a.5.5 0 0 0-.276-.447m-5.978-12.645a.5.5 0 0 1 .452 0l8.478 4.312a.5.5 0 0 1 .273.446v9.7a.5.5 0 0 1-.243.43l-1.206.72v-1.165L28 24.19v-9.11l-7.978-4.058L12 15.082v9.108l8.022 4.765.683-.408 1.062.53-1.487.889a.5.5 0 0 1-.512 0l-8.523-5.062a.5.5 0 0 1-.245-.43v-9.7c0-.188.107-.361.275-.446zM31 25.753l-11 6.662-11-6.662v-12.2L20 7.57l11 5.985zm.739-12.935-11.5-6.257a.5.5 0 0 0-.478 0l-11.5 6.257a.5.5 0 0 0-.261.439v12.777c0 .175.092.337.241.428l11.5 6.965a.49.49 0 0 0 .518 0l11.5-6.965a.5.5 0 0 0 .241-.428V13.257c0-.184-.1-.352-.261-.44"
      />
    </g>
  </svg>
);
export default AwsDeadlineCloud;

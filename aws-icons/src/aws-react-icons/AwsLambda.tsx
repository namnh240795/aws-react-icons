import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsLambda: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M14.386 33H8.27l6.763-14.426 3.064 6.44zm1.085-15.798a.49.49 0 0 0-.442-.282h-.002a.49.49 0 0 0-.441.285l-7.538 16.08a.5.5 0 0 0 .028.482c.09.145.247.233.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.5.5 0 0 0-.002-.432zM32.018 33h-5.882l-9.47-20.711a.49.49 0 0 0-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224zm.49-6h-2.4L20.684 6.29a.49.49 0 0 0-.446-.29h-8.353a.496.496 0 0 0-.491.5l-.006 6c0 .132.052.259.144.354a.5.5 0 0 0 .347.146h4.032l9.468 20.711c.08.176.254.289.445.289h6.686a.495.495 0 0 0 .491-.5v-6c0-.276-.219-.5-.491-.5"
      />
    </g>
  </svg>
);
export default AwsLambda;

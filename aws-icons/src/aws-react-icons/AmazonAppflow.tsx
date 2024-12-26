import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonAppflow: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M29.293 9H20.64l-7.531 12.661-.516-1.929-.967.259.77 2.87-.062.104.106.063.139.519.506-.136.108.065.066-.111 2.876-.771-.258-.966-1.886.505L21.208 10h7.507l3.754 6.5-3.754 6.5h-3.911v1h4.489l4.33-7.5zm-3.183 9.38L18.991 31H10.33L6 23.5l4.33-7.5h3.474v1h-2.896l-3.754 6.5 3.754 6.5h7.499l6.851-12.145-1.927.517-.258-.966 2.872-.77.058-.102.104.059.522-.14.138.511.107.061-.062.11.771 2.874-.967.259z"
      />
    </g>
  </svg>
);
export default AmazonAppflow;

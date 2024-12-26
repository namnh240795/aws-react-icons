import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const NiceEnginframe: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M11.575 22.462C12.875 25.147 16.217 27 20 27c4.963 0 9-3.141 9-7s-4.037-7-9-7c-3.783 0-7.125 1.852-8.425 4.537q.21-.037.425-.037h10c1.379 0 2.5 1.121 2.5 2.5 0 1.378-1.121 2.5-2.5 2.5H12q-.215 0-.425-.038M20 28c-4.724 0-8.843-2.681-9.793-6.375a.499.499 0 0 1 .813-.501c.197.171.526.376.98.376h10a1.501 1.501 0 0 0 0-3H12c-.454 0-.783.204-.98.376a.5.5 0 0 1-.591.048.5.5 0 0 1-.222-.55C11.157 14.68 15.276 12 20 12c5.513 0 10 3.588 10 8 0 4.411-4.487 8-10 8m0-19C12.832 9 7 13.934 7 20s5.832 11 13 11 13-4.935 13-11S27.168 9 20 9m0 23c-7.72 0-14-5.384-14-12 0-6.617 6.28-12 14-12s14 5.383 14 12c0 6.616-6.28 12-14 12"
      />
    </g>
  </svg>
);
export default NiceEnginframe;

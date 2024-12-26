import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Appfabric: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M31.98 22.225c2.663-2.663 2.663-6.997 0-9.659a6.79 6.79 0 0 0-4.83-2.001 6.79 6.79 0 0 0-4.829 2.001l-5.819 5.818a6.84 6.84 0 0 0-1.746 6.681l.963-.271a5.84 5.84 0 0 1 1.49-5.703l5.82-5.818a5.8 5.8 0 0 1 4.121-1.708c1.558 0 3.021.607 4.123 1.708a5.84 5.84 0 0 1 0 8.245L19.497 33.294l.707.707zm-19.153 7.372a6.79 6.79 0 0 1-4.83-2.001 6.84 6.84 0 0 1 0-9.659L19.933 6l.707.707L8.704 18.644a5.837 5.837 0 0 0 0 8.245 5.8 5.8 0 0 0 4.123 1.708 5.8 5.8 0 0 0 4.122-1.708l5.818-5.818a5.8 5.8 0 0 0 1.405-5.981l.948-.317a6.8 6.8 0 0 1-1.646 7.005l-5.818 5.818a6.79 6.79 0 0 1-4.829 2.001"
      />
    </g>
  </svg>
);
export default Appfabric;

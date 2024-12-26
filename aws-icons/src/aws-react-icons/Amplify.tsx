import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Amplify: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M29.023 30 19.018 11h2.872l10.003 19zm-6.389-19.733a.5.5 0 0 0-.442-.267H18.19a.5.5 0 0 0-.442.733l10.531 20a.5.5 0 0 0 .442.267h4a.5.5 0 0 0 .443-.733zM22.808 30l-7.237-14.472 1.37-2.451L25.678 30zm-5.405-18.208a.5.5 0 0 0-.437-.271h-.007a.5.5 0 0 0-.437.256l-1.953 3.494a.5.5 0 0 0-.01.468l7.493 14.985A.5.5 0 0 0 22.5 31h4a.5.5 0 0 0 .444-.729zM7.354 30l6.504-11.574 1.075 2.069L11.25 27.3a.5.5 0 0 0 .439.739h7L19.683 30zm12.085-2.688a.5.5 0 0 0-.445-.273h-6.466l3.411-6.301a.5.5 0 0 0 .004-.468l-1.625-3.125a.5.5 0 0 0-.436-.27h-.007a.5.5 0 0 0-.436.255L6.064 30.255A.498.498 0 0 0 6.5 31h14c.173 0 .335-.09.425-.239a.5.5 0 0 0 .02-.488z"
      />
    </g>
  </svg>
);
export default Amplify;

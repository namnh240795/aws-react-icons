import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CloudDigitalInterface: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M7.5 40A2.503 2.503 0 0 1 5 37.5C5 36.122 6.121 35 7.5 35s2.5 1.122 2.5 2.5S8.879 40 7.5 40M44 24c0 11.028-8.972 20-20 20-4.58 0-8.981-1.579-12.525-4.434A4.45 4.45 0 0 0 12 37.5c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 3 37.5C3 39.981 5.019 42 7.5 42a4.46 4.46 0 0 0 2.684-.909A21.94 21.94 0 0 0 24 46c12.131 0 22-9.869 22-22zM40.5 8c1.379 0 2.5 1.122 2.5 2.5S41.879 13 40.5 13a2.503 2.503 0 0 1-2.5-2.5C38 9.122 39.121 8 40.5 8M24 4c4.58 0 8.981 1.579 12.525 4.434A4.45 4.45 0 0 0 36 10.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5S42.981 6 40.5 6a4.46 4.46 0 0 0-2.684.909A21.94 21.94 0 0 0 24 2C11.869 2 2 11.869 2 24h2C4 12.972 12.972 4 24 4m-2 16.772 5.912 3.212L22 27.222zm-1.511-2.541a1 1 0 0 0-.489.86v9.818c0 .353.187.68.49.861a1.01 1.01 0 0 0 .99.016l9-4.928a1 1 0 0 0-.002-1.756l-9-4.89a1 1 0 0 0-.989.019M34 29.774l-10 5.773-10-5.773V18.226l10-5.773 10 5.773zm-9.5-19.342a1 1 0 0 0-1 0l-11 6.351a1 1 0 0 0-.5.866v12.702c0 .357.19.688.5.866l11 6.351a1 1 0 0 0 1 0l11-6.351c.31-.178.5-.509.5-.866V17.649a1 1 0 0 0-.5-.866z"
    />
  </svg>
);
export default CloudDigitalInterface;
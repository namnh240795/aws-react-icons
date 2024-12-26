import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CategoryDatabase: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C925D1" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M24 23.991c-5.304 0-9-1.58-9-2.998V15.81c1.729 1.429 5.442 2.186 9 2.186s7.271-.757 9-2.186v5.183c0 1.418-3.696 2.998-9 2.998m0 6.873c-5.304 0-9-1.58-9-2.998v-5.06c1.729 1.428 5.442 2.185 9 2.185s7.271-.757 9-2.185v5.06c0 1.418-3.696 2.998-9 2.998M24 37c-5.304 0-9-1.579-9-2.997v-4.325c1.729 1.429 5.442 2.186 9 2.186s7.271-.757 9-2.186v4.325C33 35.421 29.304 37 24 37m0-26c5.304 0 9 1.58 9 2.998s-3.696 2.998-9 2.998-9-1.58-9-2.998S18.696 11 24 11m0-1c-4.848 0-10 1.401-10 3.998v20.005C14 36.599 19.152 38 24 38s10-1.401 10-3.997V13.998C34 11.401 28.848 10 24 10"
      />
    </g>
  </svg>
);
export default CategoryDatabase;

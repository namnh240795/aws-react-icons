import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CategoryStorage: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M28 30.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5zm-.5-2.5h-7c-.827 0-1.5.673-1.5 1.5v1c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5M19 20h10v-1H19zm0-6h3v-1h-3zm0 3h3v-1h-3zm16 19.088c0 .503-.497.912-1 .912H13.912a.913.913 0 0 1-.912-.912V26h22zM17 11h8v5.5a.5.5 0 0 0 .5.5H31v8H17zm9 .707L30.293 16H26zM35.412 25H32v-8.5h-.02a.49.49 0 0 0-.126-.354l-6-6a.49.49 0 0 0-.354-.126V10h-9a.5.5 0 0 0-.5.5V25h-3.5a.5.5 0 0 0-.5.5v10.588c0 1.055.857 1.912 1.912 1.912H34a1.913 1.913 0 0 0 1.912-1.912V25.5a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default CategoryStorage;

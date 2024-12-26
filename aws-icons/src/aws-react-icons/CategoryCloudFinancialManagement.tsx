import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CategoryCloudFinancialManagement: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M21 35h3v-1h-3zm-5 0h3v-1h-3zm5-3h3v-1h-3zm-5 0h3v-1h-3zm5-4h3v-1h-3zm-5 0h3v-1h-3zm12 6h3v-6h-3zm3.5-7h-4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M17 24h14v-3H17zm-.5-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM35 37H13V18h6v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.488l.013-.512H35zM19.587 11H25.5c1.208 0 1.639.976 1.639 1.877L27.013 18H20v-5.5c0-.633-.158-1.125-.413-1.5M16 14v-1.5c0-1.036.753-1.5 1.5-1.5.561 0 1.5.195 1.5 1.5V14zm19.5 3h-7.463l.102-4.11c0-1.729-1.061-2.89-2.639-2.89H18v.042c-1.44-.244-3 .601-3 2.458v2a.5.5 0 0 0 .5.5H19v2h-6.5a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.5-.5"
      />
    </g>
  </svg>
);
export default CategoryCloudFinancialManagement;

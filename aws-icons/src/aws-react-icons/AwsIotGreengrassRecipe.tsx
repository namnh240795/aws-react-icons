import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotGreengrassRecipe: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M38 13.106 37.895 13H28a1 1 0 0 1-1-1V4H11.075a.076.076 0 0 0-.075.075v39.85c0 .041.034.075.075.075h26.85a.076.076 0 0 0 .075-.075zm-9-9.024V11h6.899zm11 8.61v31.233A2.08 2.08 0 0 1 37.925 46h-26.85A2.08 2.08 0 0 1 9 43.925V4.075C9 2.931 9.931 2 11.075 2h18.258c.266 0 .521.106.708.294l9.667 9.692c.187.188.292.442.292.706M23 37h11v-2H23zm0-8h11v-2H23zm-8 8h4v-2h-4zm0-8h4v-2h-4zm0-8h4v-2h-4zm8 0h11v-2H23z"
    />
  </svg>
);
export default AwsIotGreengrassRecipe;

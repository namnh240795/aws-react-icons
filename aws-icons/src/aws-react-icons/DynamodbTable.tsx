import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const DynamodbTable: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#C925D1"
      fillRule="evenodd"
      d="M13.355 11.862h32.573V2H13.355zm2-2h28.572V4.001H15.355zM2 11.862h9.861V2H2zm2-2h5.862V4.001H4zm9.355 13.355h32.573v-9.861H13.355zm2-2h28.572v-5.861H15.355zM2 23.217h9.861v-9.861H2zm2-2h5.862v-5.861H4zm9.355 13.355h32.573v-9.861H13.355zm2-2h28.572V26.71H15.355zM2 34.572h9.861v-9.861H2zm2-2h5.862V26.71H4zm9.355 13.355h32.573v-9.861H13.355zm2-1.999h28.572v-5.862H15.355zM2 45.927h9.861v-9.861H2zm2-1.999h5.862v-5.862H4z"
    />
  </svg>
);
export default DynamodbTable;

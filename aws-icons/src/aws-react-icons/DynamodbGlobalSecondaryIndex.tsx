import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const DynamodbGlobalSecondaryIndex: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#C925D1"
      fillRule="evenodd"
      d="M22.901 11.836H45.8V2H22.901zm1.999-2h18.899V3.999H24.9zm-12.45 2h8.967V2H12.45zm2.001-2h4.966V3.999h-4.966zM2 11.836h8.967V2H2zm2-2h4.967V3.999H4zm18.901 13.322H45.8V13.32H22.901zm1.999-2.001h18.899V15.32H24.9zm-12.45 2.001h8.967V13.32H12.45zm2.001-2.001h4.966V15.32h-4.966zM2 23.158h8.967V13.32H2zm2-2.001h4.967V15.32H4zm18.901 13.321H45.8v-9.837H22.901zm1.999-2h18.899v-5.837H24.9zm-12.45 2h8.967v-9.837H12.45zm2.001-2h4.966v-5.837h-4.966zM2 34.478h8.967v-9.837H2zm2-2h4.967v-5.837H4zm18.901 13.321H45.8v-9.838H22.901zm1.999-2h18.899v-5.838H24.9zm-12.45 2h8.967v-9.838H12.45zm2.001-2h4.966v-5.838h-4.966zM2 45.799h8.967v-9.838H2zm2-2h4.967v-5.838H4z"
    />
  </svg>
);
export default DynamodbGlobalSecondaryIndex;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsStorageGatewayFileGateway: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M19.871 4c-5.743 0-9.286 1.666-12.87 3.736V46H5V7.161c0-.355.187-.683.493-.863C9.361 4.033 13.37 2 19.871 2c6.042 0 10.468 2.281 14.024 4.115l.305.157a1 1 0 0 1 .542.889V24.5h-2V7.771C29.262 5.978 25.304 4 19.872 4M41.8 44.1H16.294V26.521h6.325l.856 1.773a1 1 0 0 0 .901.564H41.8zm1-17.242H25.003l-.857-1.772a1 1 0 0 0-.9-.565h-7.952a1 1 0 0 0-1 1V45.1a1 1 0 0 0 1 1H42.8a1 1 0 0 0 1-1V27.858a1 1 0 0 0-1-1"
    />
  </svg>
);
export default AwsStorageGatewayFileGateway;

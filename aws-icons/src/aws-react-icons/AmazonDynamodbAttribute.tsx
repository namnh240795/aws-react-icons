import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonDynamodbAttribute: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#C925D1"
      fillRule="evenodd"
      d="M12.6 17.709a5.115 5.115 0 0 1-5.108-5.11A5.115 5.115 0 0 1 12.6 7.492a5.115 5.115 0 0 1 5.109 5.109 5.115 5.115 0 0 1-5.11 5.109m0-12.218c-3.92 0-7.108 3.189-7.108 7.109s3.188 7.109 7.108 7.109a7.117 7.117 0 0 0 7.109-7.11 7.117 7.117 0 0 0-7.11-7.108m14.09 38.398h17.2v-17.2h-17.2zm-2 2h21.2V24.692h-21.2zM4 43.89h17.199v-17.2h-17.2zm-2 2h21.199V24.692h-21.2zM26.69 21.2h17.2v-17.2h-17.2zm-2 2h21.2v-21.2h-21.2zm-20.69-2h17.199v-17.2h-17.2zm-2 2h21.199v-21.2h-21.2z"
    />
  </svg>
);
export default AmazonDynamodbAttribute;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotSitewiseAssetModel: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M38 26c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m-9 9H19V19h10v10m2-6v-6h-6v-3h-2v3h-6v6h-3v2h3v6h6v3h2v-3h6v-6h3v-2zm-21 3c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m14 16c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m-4 2c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4m4-26c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m4-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m-4 33.5C13.248 43.5 4.5 34.752 4.5 24S13.248 4.5 24 4.5 43.5 13.248 43.5 24 34.752 43.5 24 43.5m0-41C12.145 2.5 2.5 12.145 2.5 24S12.145 45.5 24 45.5 45.5 35.855 45.5 24 35.855 2.5 24 2.5"
    />
  </svg>
);
export default AwsIotSitewiseAssetModel;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotAnalyticsDataset: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M6 40.457h28.888V2H6zm2-2h24.889V4H8zm28.651-32.9v2h2.679V44H12.56v-1.822h-2V46h30.77V5.557zm-8.476 4.619h2.38v-2h-2.38zm-17.925 0h16.338v-2H10.25zm9.082 6.047h11.224v-2H19.332zm-5.252 0h3.853v-2H14.08zm-3.83 0h2.016v-2H10.25zm8.1 6.046h12.206v-2H18.35zm-8.1 0h6.588v-2H10.25zm0 6.046h20.306v-2H10.25zm16.678 5.971h3.628v-2.001h-3.628zm-16.678 0h14.713v-2.001H10.25z"
    />
  </svg>
);
export default IotAnalyticsDataset;

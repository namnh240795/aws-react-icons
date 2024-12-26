import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotHttpProtocol: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M18.861 43.96h25.1V32.85h-25.1zm-2-13.111h29.1V45.96h-29.1zM7.764 1.999A5.77 5.77 0 0 0 2 7.766v32.432a5.77 5.77 0 0 0 5.764 5.764h7.474v-2H7.764A3.77 3.77 0 0 1 4 40.197V7.765A3.77 3.77 0 0 1 7.764 4h32.432a3.77 3.77 0 0 1 3.765 3.765v21.46h2V7.766A5.77 5.77 0 0 0 40.196 2zM40.21 38.71q.492 0 .77-.378.279-.377.278-1.038 0-.672-.278-1.043-.278-.374-.77-.373h-1.038v2.832zm-1.038.808v2.822h-.987v-7.27h2.13q.586 0 1.032.284.446.282.683.787.235.502.235 1.153 0 1.008-.54 1.615-.54.609-1.41.609zm-6.557-3.598h1.804v6.42h1.017v-6.42h1.815v-.85h-4.636zm-5.245 0h1.804v6.42h1.018v-6.42h1.815v-.85H27.37zm-1.95-.85h1.016v7.27h-1.017v-3.305h-2.644v3.305h-1.017v-7.27h1.017v3.137h2.644z"
    />
  </svg>
);
export default AwsIotHttpProtocol;
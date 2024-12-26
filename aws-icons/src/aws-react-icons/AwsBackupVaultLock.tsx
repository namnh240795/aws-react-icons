import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsBackupVaultLock: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M15.863 33.96c6.115 4.557 14.795 3.291 19.354-2.824 4.556-6.114 3.29-14.796-2.824-19.353-5.914-4.407-14.217-3.354-18.88 2.252l2.5.033-.027 2L10.919 16a1 1 0 0 1-.987-1.014l.068-5 2 .028-.037 2.761c5.334-6.431 14.85-7.645 21.626-2.596 6.998 5.217 8.447 15.155 3.231 22.153-3.103 4.163-7.879 6.363-12.712 6.363a15.75 15.75 0 0 1-9.44-3.131c-4.014-2.992-6.335-7.583-6.37-12.596l2-.013c.03 4.38 2.058 8.392 5.565 11.005M35 44h4v-1h-4zM9 44h4v-1H9zM45 2H3a1 1 0 0 0-1 1v8h2V4h40v37H4v-8H2v9a1 1 0 0 0 1 1h4v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h18v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M2 27h2V17H2zm18 1h8v-6h-8zm2-10c0-1.103.897-2 2-2s2 .897 2 2v2h-4zm2-4c-2.206 0-4 1.794-4 4v2h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1v-2c0-2.206-1.794-4-4-4"
    />
  </svg>
);
export default AwsBackupVaultLock;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonSimpleStorageServiceGeneralAccessPoints: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M30.576 21.966a2.49 2.49 0 0 0-2.485 2.485 2.49 2.49 0 0 0 2.485 2.485 2.487 2.487 0 0 0 2.484-2.485 2.487 2.487 0 0 0-2.484-2.485m0-2a4.49 4.49 0 0 1 4.484 4.485 4.49 4.49 0 0 1-4.484 4.485 4.49 4.49 0 0 1-4.485-4.485 4.49 4.49 0 0 1 4.485-4.485m-.37-5.076-2.164-3.957-2.256 3.957zm2.563.52c.17.31.163.686-.016.99-.18.303-.507.49-.86.49h-7.829a1 1 0 0 1-.869-1.495l3.996-7.008c.18-.316.508-.495.878-.505a1 1 0 0 1 .868.52zm-18.912 6.585h4.062v-4.063h-4.062zm5.062-6.063a1 1 0 0 1 1 1v6.063a1 1 0 0 1-1 1h-6.063a1 1 0 0 1-1-1v-6.063a1 1 0 0 1 1-1zm6.09 26.574V30.292h-2v12.294l-3.245-3.244-1.414 1.414 4.912 4.91a.997.997 0 0 0 1.414 0l4.921-4.921-1.414-1.414zm16.793-22.604c0 8.654-6.35 16.06-14.852 17.609v-1.967c7.551-1.376 12.852-7.955 12.852-15.642C39.802 11.134 32.668 4 23.9 4S8 11.134 8 19.902c0 7.648 5.263 14.22 12.767 15.627v1.965C12.317 35.91 6 28.512 6 19.902 6 10.03 14.03 2 23.9 2c9.871 0 17.902 8.03 17.902 17.902"
    />
  </svg>
);
export default AmazonSimpleStorageServiceGeneralAccessPoints;

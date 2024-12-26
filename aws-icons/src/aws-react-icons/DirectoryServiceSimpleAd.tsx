import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const DirectoryServiceSimpleAd: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M43.88 41.26V26.34c-1.846.908-4.707 1.336-7.442 1.336s-5.596-.428-7.442-1.334v14.93c.122.482 2.599 1.78 7.442 1.78s7.32-1.298 7.443-1.791M28.997 23.897c.123.482 2.6 1.78 7.442 1.78 4.828 0 7.305-1.291 7.442-1.787v-.093c-.122-.482-2.6-1.78-7.442-1.78-4.83 0-7.306 1.29-7.442 1.787zm16.884-.102v17.478c0 2.597-4.895 3.78-9.442 3.78s-9.442-1.183-9.442-3.78V23.794c.002-2.595 4.896-3.778 9.442-3.778s9.44 1.183 9.442 3.778M26.095 35.249a1 1 0 0 1-1 1H3a1 1 0 0 1-.866-1.5l18.619-32.25a1.002 1.002 0 0 1 1.732 0l8.872 15.367a1.001 1.001 0 0 1-1.733 1L21.619 5 4.733 34.249h20.362a1 1 0 0 1 1 1"
    />
  </svg>
);
export default DirectoryServiceSimpleAd;

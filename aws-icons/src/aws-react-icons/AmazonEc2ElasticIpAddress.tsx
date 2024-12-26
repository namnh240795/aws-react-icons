import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonEc2ElasticIpAddress: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M43.62 24.058v-.264l.122.132zm-32.694 6.794A6.933 6.933 0 0 1 4 23.926 6.933 6.933 0 0 1 10.926 17a6.933 6.933 0 0 1 6.925 6.926 6.93 6.93 0 0 1-6.925 6.926m34.913-7.606-6.441-6.936-1.465 1.361 4.88 5.255H19.792C19.293 18.474 15.51 15 10.926 15 6.004 15 2 19.004 2 23.926s4.004 8.926 8.926 8.926c4.584 0 8.367-3.474 8.866-7.926h23.021l-4.88 5.255 1.465 1.361 6.441-6.935a1 1 0 0 0 0-1.361"
    />
  </svg>
);
export default AmazonEc2ElasticIpAddress;

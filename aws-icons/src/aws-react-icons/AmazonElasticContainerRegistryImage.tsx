import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonElasticContainerRegistryImage: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M20 15c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0 8c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5M4 44v-9.586l8-8 15.293 15.293 1.414-1.414-7.793-7.793L32 21.414l12 12V44zM44 4v26.586L32.707 19.293a1 1 0 0 0-1.414 0L19.5 31.086l-6.793-6.793a1 1 0 0 0-1.414 0L4 31.586V4zm1-2H3a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    />
  </svg>
);
export default AmazonElasticContainerRegistryImage;

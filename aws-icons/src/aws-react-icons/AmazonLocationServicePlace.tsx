import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonLocationServicePlace: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M24 4C15.729 4 9 9.832 9 17c0 5.726 4.427 10.853 10.766 12.468 1.053.268 1.869 1.113 2.126 2.204L24 40.634l2.108-8.962c.257-1.091 1.073-1.936 2.127-2.204C34.573 27.853 39 22.726 39 17c0-7.168-6.729-13-15-13m0 42c-.464 0-.867-.319-.974-.771L19.944 32.13c-.084-.357-.347-.641-.672-.723C12.046 29.565 7 23.641 7 17 7 8.729 14.626 2 24 2s17 6.729 17 15c0 6.641-5.046 12.564-12.271 14.407-.326.082-.589.366-.673.723l-3.082 13.099c-.107.452-.51.771-.974.771m0-34c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m0 12c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7"
    />
  </svg>
);
export default AmazonLocationServicePlace;

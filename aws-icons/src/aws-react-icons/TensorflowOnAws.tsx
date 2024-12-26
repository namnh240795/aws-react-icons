import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const TensorflowOnAws: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M26.484 24.702v-7.824l-6.017 3.401v7.935zm-13 0 5.983 3.51v-7.934l-5.983-3.398zm.51-8.683 5.974 3.393 6.001-3.393-6.001-3.412zm13.242 9.402-7.017 4.096a.5.5 0 0 1-.505-.001l-6.983-4.096a.5.5 0 0 1-.247-.431V16.02c0-.179.097-.345.252-.434l6.983-3.988a.5.5 0 0 1 .495-.001l7.017 3.99a.5.5 0 0 1 .253.433v8.969a.5.5 0 0 1-.248.432M20 8.001c4.037 0 7.803 2.155 10.077 5.768l.845-.534C28.465 9.331 24.382 7 20 7c-4.385 0-8.468 2.33-10.923 6.236l.845.533C12.194 10.156 15.961 8 20 8m12 12.491c-.136 5.578-4.174 10.425-9.6 11.527l.199.981C28.478 31.807 32.852 26.557 33 20.517zM17.599 32.02 17.4 33C11.521 31.807 7.147 26.557 7 20.517l1-.025c.135 5.578 4.173 10.425 9.599 11.527"
      />
    </g>
  </svg>
);
export default TensorflowOnAws;

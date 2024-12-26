import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const TrustedAdvisorChecklistPerformance: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M40.501 42.375h2V34.5h-2zm-4.375 0h2v-3.5h-2zm-4.375 0h2v-5.25h-2zm-4.375 0h2v-3.5h-2zm5.403-7.567 3.832 2.299A1 1 0 0 0 38 36.735l3.547-6.382.167.813 1.959-.404-.707-3.428a1 1 0 0 0-1.182-.777l-3.428.706.404 1.959 1.273-.262-3.279 5.9-3.489-2.092a.99.99 0 0 0-1.069.025l-5.25 3.5 1.109 1.664zM25.876 44h18.125V25.875H25.876zm20.125-19.125V45a1 1 0 0 1-1 1H24.876a1 1 0 0 1-1-1V24.875a1 1 0 0 1 1-1h20.125a1 1 0 0 1 1 1M6.328 26.68l-1.406 1.422 2.8 2.77a1 1 0 0 0 1.5-.106l4.201-5.542-1.594-1.209-3.511 4.632zm5.501-11.998-3.511 4.632-1.99-1.968-1.406 1.422 2.8 2.771a1 1 0 0 0 1.5-.106l4.201-5.542zm0-9.333L8.318 9.98l-1.99-1.967-1.406 1.422 2.8 2.77a1 1 0 0 0 1.5-.106l4.201-5.541zm3.422 24.026h7v-2h-7zm0-8.75h11.375v-2H15.251zm0-9.625h11.375V9H15.251zM4 34.375h18.251v2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h26.251a1 1 0 0 1 1 1v19.25h-2V4H4z"
    />
  </svg>
);
export default TrustedAdvisorChecklistPerformance;

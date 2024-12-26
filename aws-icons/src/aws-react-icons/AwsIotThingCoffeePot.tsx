import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotThingCoffeePot: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M17.422 36.16c-.128-.052-.401-.499-.353-1.13l.09-1.143q.031-.119.032-.247c0-.552-.461-1-1.014-1h-.378c-.554 0-1.083-.726-1.22-1.728l-2.634-12.548.863-.325 2.966 8.836a1 1 0 0 0 1.942-.214l1.005-9.599h8.776l2.502 17.942c.058.643-.218 1.102-.322 1.152zm7.43-22.613a2.52 2.52 0 0 1 2.308 1.515h-8.132a2.52 2.52 0 0 1 2.308-1.515zM33.52 25.01a3.23 3.23 0 0 1-2.458 3.14l-1.046-7.503c1.983.328 3.504 2.042 3.504 4.117zm.879 9.43h-2.46l-.603-4.32a5.22 5.22 0 0 0 4.184-5.11v-.246c0-3.277-2.564-5.96-5.79-6.166l-.372-2.673q-.003-.01-.006-.018c-.084-2.417-2.064-4.36-4.5-4.36h-.758V9.91h-2v1.637h-.758c-2.446 0-4.432 1.958-4.503 4.387q-.004.011-.007.024l-.62 5.92-1.832-5.458a1 1 0 0 0-1.301-.618l-2.636.993a1 1 0 0 0-.626 1.141l2.8 13.314c.22 1.668 1.22 2.948 2.49 3.297l-.027.328c-.074.992.228 1.96.81 2.586.416.448.954.695 1.515.695h12.278c.563 0 1.104-.25 1.52-.707.255-.276.442-.626.579-1.009h2.623v.716a1 1 0 0 0 1 1h2.635v-2h-1.635V34.64h1.635v-2h-2.635a1 1 0 0 0-1 1zm5.27 4.097c0 .626-.508 1.135-1.134 1.135H9.409a1.135 1.135 0 0 1-1.134-1.135V9.424c0-.626.508-1.136 1.134-1.136h29.126c.626 0 1.135.51 1.135 1.136zm6.277-24.11v-2H41.67V9.423a3.14 3.14 0 0 0-3.135-3.136H35.52V2h-2v4.288h-3.274V2h-2v4.288h-3.273V2h-2v4.288h-3.274V2h-2v4.288h-3.273V2h-2v4.288H9.409a3.14 3.14 0 0 0-3.134 3.136v3.002H2v2h4.275V17.7H2v2h4.275v3.273H2v2h4.275v3.274H2v2h4.275v3.273H2v2h4.275v3.018a3.14 3.14 0 0 0 3.134 3.135h3.017v4.273h2v-4.273h3.273v4.273h2v-4.273h3.274v4.273h2v-4.273h3.273v4.273h2v-4.273h3.274v4.273h2v-4.273h3.015a3.14 3.14 0 0 0 3.135-3.135V35.52h4.276v-2H41.67v-3.273h4.276v-2H41.67v-3.274h4.276v-2H41.67V19.7h4.276v-2H41.67v-3.273z"
    />
  </svg>
);
export default AwsIotThingCoffeePot;

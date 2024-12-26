import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonInteractiveVideoService: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M24 32.912V26.85l5.25 3.031zm-.25-7.36a.502.502 0 0 0-.75.432v7.794a.5.5 0 0 0 .75.433l6.75-3.897a.5.5 0 0 0 0-.866zM33 23.17l-5.25-3.03L33 17.107zm-16 1.947v-9.955l8.622 4.978zm-1-11.689-5.25-3.03L16 7.365zm0 19.486-5.25-3.03L16 26.851zm17.75-17.106a.5.5 0 0 0-.5 0L26.686 19.6 17 14.007V6.5a.502.502 0 0 0-.75-.433L9.5 9.964a.5.5 0 0 0 0 .866l6.5 3.753v11.114L9.5 29.45a.5.5 0 0 0 0 .866l6.75 3.898a.5.5 0 0 0 .5 0 .5.5 0 0 0 .25-.433v-7.509l9.687-5.592 6.563 3.79a.5.5 0 0 0 .5 0 .5.5 0 0 0 .25-.433v-7.795a.5.5 0 0 0-.25-.434M7 23.17v-6.062l5.25 3.031zm6.75-3.03a.5.5 0 0 0-.25-.434l-6.75-3.898a.5.5 0 0 0-.5 0 .5.5 0 0 0-.25.434v7.794a.5.5 0 0 0 .75.433l6.75-3.897a.5.5 0 0 0 .25-.433M24 7.365l5.25 3.031L24 13.428zm-.5 7.428a.5.5 0 0 0 .25-.067l6.75-3.897a.5.5 0 0 0 0-.866l-6.75-3.898A.502.502 0 0 0 23 6.5v7.795a.5.5 0 0 0 .5.5"
      />
    </g>
  </svg>
);
export default AmazonInteractiveVideoService;

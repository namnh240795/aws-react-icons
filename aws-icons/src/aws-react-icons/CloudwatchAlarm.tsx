import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const CloudwatchAlarm: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M41.425 40.668h-6.788V19.83c2.185.695 4.602.695 6.788 0zm.57-23.208a9.27 9.27 0 0 1-7.928 0 1 1 0 0 0-1.43.902v23.306a1 1 0 0 0 1 1h8.788a1 1 0 0 0 1-1V18.361a1 1 0 0 0-1.43-.902M38.03 4a5.157 5.157 0 0 1 5.152 5.152 5.16 5.16 0 0 1-5.152 5.152 5.157 5.157 0 0 1-5.151-5.152A5.157 5.157 0 0 1 38.03 4m0 12.304a7.16 7.16 0 0 0 7.152-7.152C45.183 5.209 41.975 2 38.03 2S30.88 5.209 30.88 9.15c0 3.944 3.208 7.153 7.15 7.153M2 46.183h43.94v-2H2zm18.575-5.517h6.788V27.728h-6.788zm-1 2h8.788a1 1 0 0 0 1-1V26.728a1 1 0 0 0-1-1h-8.788a1 1 0 0 0-1 1v14.94a1 1 0 0 0 1 1m-13.06-2h6.788V23.335H6.516zm-1 2h8.788a1 1 0 0 0 1-1V22.335a1 1 0 0 0-1-1H5.516a1 1 0 0 0-1 1v19.333a1 1 0 0 0 1 1"
    />
  </svg>
);
export default CloudwatchAlarm;

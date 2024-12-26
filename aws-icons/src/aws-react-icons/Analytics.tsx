import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Analytics: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M32 17.44v4.5h-1v-3.293l-6.146 6.147a.5.5 0 0 1-.708 0L21.5 22.147l-4.646 4.647-.708-.708 5-5a.5.5 0 0 1 .708 0l2.646 2.647 5.793-5.793H27v-1h4.5a.5.5 0 0 1 .5.5m2.862 16.5H13.325l-1.716-2h24.837zM13 15.01c0-.557.453-1.07 1.01-1.07h19.98c.557 0 1.01.513 1.01 1.07v15.93H13zm24.952 16.276A.5.5 0 0 0 37.5 31H36V15.01c0-1.109-.9-2.01-2.01-2.01H14.01c-1.109 0-2.01.901-2.01 2.01V31h-1.5a.501.501 0 0 0-.375.831l2.6 2.94a.5.5 0 0 0 .375.169h22c.15 0 .292-.067.387-.184l2.401-2.94a.5.5 0 0 0 .064-.53"
      />
    </g>
  </svg>
);
export default Analytics;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const BusinessApplications: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M35.192 37H12.809l-1.5-3h25.383zM14.5 21.786c0-.433.352-.786.786-.786H17.5v12h-3zM19 19a.5.5 0 0 0 .5-.5V17h2v16h-3V19zm3.5 14h3V14h-3zm6-16v1.5a.5.5 0 0 0 .5.5h.5v14h-3V17zm4.213 4c.434 0 .787.353.787.786V33h-3V21zm5.212 12.237A.5.5 0 0 0 37.5 33h-3V21.786c0-.985-.801-1.786-1.787-1.786H30.5v-1.5a.5.5 0 0 0-.5-.5h-.5v-1.5a.5.5 0 0 0-.5-.5h-2.5v-2.5a.5.5 0 0 0-.5-.5h-1.5v-3h-1v3H22a.5.5 0 0 0-.5.5V16H19a.5.5 0 0 0-.5.5V18H18a.5.5 0 0 0-.5.5V20h-2.214c-.986 0-1.786.801-1.786 1.786V33h-3a.503.503 0 0 0-.448.724l2 4A.5.5 0 0 0 12.5 38h23a.5.5 0 0 0 .447-.276l2-4a.5.5 0 0 0-.022-.487"
      />
    </g>
  </svg>
);
export default BusinessApplications;

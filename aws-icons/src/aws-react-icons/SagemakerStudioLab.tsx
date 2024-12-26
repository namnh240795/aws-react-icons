import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const SagemakerStudioLab: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M24 27.072h9v-14h-9zm-1 0v-14h-2v2h1v1h-1v3h1v1h-1v3h1v1h-1v3zm11-14.5v15a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3.5h-1v-1h1v-3h-1v-1h1v-3h-1v-1h1v-2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5m-14 16.5h1v2.5a.5.5 0 0 1-.276.447l-4 2a.51.51 0 0 1-.472-.013l-7-4A.5.5 0 0 1 9 29.572V24.9l-2.727-1.382A.5.5 0 0 1 6 23.072v-6.5c0-.167.084-.323.223-.416L9 14.304v-4.232c0-.182.1-.35.259-.438l6.486-3.573a.5.5 0 0 1 .45-.016l4.514 2.072c.177.082.291.26.291.455v2.5h-1V8.893L16.007 7.06 15 7.613v4.46h-1V8.163l-4 2.203v3.428l3.478 2.174L16 14.28v-2.207h1v2.473a.5.5 0 0 1-.222.416L14 16.822v2.25h3v1h-3.5a.5.5 0 0 1-.5-.5V16.85L9.879 14.9a.5.5 0 0 1-.102.09L7 16.838v2.74l3.199-2.407.602.8L7 20.83v1.935l2.726 1.382c.021.01.03.032.049.045l2.405-2.004.64.768-2.82 2.35v3.976l2.655 1.517L14 29.7v-5.627h1v4.808l2.684-2.195.632.774-4.731 3.871 2.931 1.675L20 31.263z"
      />
    </g>
  </svg>
);
export default SagemakerStudioLab;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsMainframeModernization: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M33.935 18.164q0 .247-.021.488c-.239 2.825-2.742 5.039-5.698 5.039v-1c2.441 0 4.506-1.812 4.702-4.124q.017-.2.017-.403c0-2.439-1.652-4.279-3.844-4.279a.5.5 0 0 1-.5-.5c0-1.648-.895-3.409-3.41-3.409h-.434a.5.5 0 0 1-.438-.258C23.194 7.703 21.083 6.5 18.664 6.5a6.46 6.46 0 0 0-6.45 6.451.5.5 0 0 1-.5.5A4.72 4.72 0 0 0 7 18.164c0 .465.128 4.541 4.542 4.541v1C7.714 23.705 6 20.922 6 18.164a5.72 5.72 0 0 1 5.23-5.692c.247-3.887 3.487-6.972 7.434-6.972 2.684 0 5.043 1.293 6.371 3.476h.146c2.517 0 4.197 1.527 4.392 3.933 2.518.246 4.362 2.423 4.362 5.255m-6.562 10.033 2.313 1.806-5.086 3.973h-9.233l-5.086-3.973 2.313-1.806.615.788-1.303 1.018 3.804 2.973h8.546l3.805-2.973-1.303-1.018zm0-5 2.313 1.806-5.086 3.973h-9.233l-5.086-3.973 2.313-1.806.615.788-1.303 1.018 3.804 2.973h8.546l3.805-2.973-1.303-1.018zm-11.676-6.221h8.617l3.839 3-3.839 3h-8.617l-3.84-3zm8.961 7 5.12-4-5.12-4h-9.305l-5.121 4 5.121 4z"
      />
    </g>
  </svg>
);
export default AwsMainframeModernization;

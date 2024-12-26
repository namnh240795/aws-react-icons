import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const SecurityIdentityCompliance: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M4 4h40v40H4z" />
      <path stroke="#879196" strokeWidth={2} d="M1 1h46v46H1z" />
      <path
        fill="#FFF"
        d="M31 26.567c-.013 1.229-.382 7.198-6 7.543V14.443l6 2.313zm-13-.722v-9.09l6-2.312v19.662c-5.745-.4-5.992-7.438-6-8.26m6.32-12.597-7 2.698a.5.5 0 0 0-.32.467v9.437c.008.95.289 9.293 7.5 9.293 7.055 0 7.485-7.136 7.5-8.571v-10.16a.5.5 0 0 0-.32-.466l-7-2.698a.5.5 0 0 0-.36 0M34 26.572c0 .026-.014 2.69-1.206 5.33-1.57 3.478-4.361 5.24-8.294 5.24-3.918 0-6.703-1.87-8.278-5.561C15.018 28.76 15 25.886 15 25.858V14.697l9.5-3.661 9.5 3.66zm.68-12.685-10-3.853a.5.5 0 0 0-.36 0l-10 3.853a.5.5 0 0 0-.32.467v11.504c0 .123.12 12.285 10.5 12.285S35 26.688 35 26.572V14.354a.5.5 0 0 0-.32-.467"
      />
    </g>
  </svg>
);
export default SecurityIdentityCompliance;

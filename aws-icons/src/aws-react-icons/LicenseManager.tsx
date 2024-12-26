import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const LicenseManager: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M20 26.015a4.036 4.036 0 0 1-4.031-4.031A4.035 4.035 0 0 1 20 17.953a4.035 4.035 0 0 1 4.031 4.031A4.036 4.036 0 0 1 20 26.015m0-9.062a5.037 5.037 0 0 0-5.031 5.031A5.037 5.037 0 0 0 20 27.015a5.037 5.037 0 0 0 5.031-5.031A5.037 5.037 0 0 0 20 16.953m1.919 3.163.707.707-3.03 3.029a.5.5 0 0 1-.707 0l-1.515-1.515.707-.707 1.161 1.161zM13 14.974h14v-1H13zm0-2h14v-1H13zm0-3h6v-1h-6zm8.977 18.048h1v4.952a.5.5 0 0 1-.854.354L20 31.205l-2.123 2.123a.5.5 0 0 1-.854-.354v-4.952h1v3.745l1.623-1.622a.5.5 0 0 1 .708 0l1.623 1.622zM25 7.702l2.287 2.272H25zm3.853 2.418-4-3.975A.5.5 0 0 0 24.5 6h-13a.5.5 0 0 0-.5.5v23.974a.5.5 0 0 0 .5.5H16v-1h-4V7h12v3.474a.5.5 0 0 0 .5.5H28v19h-4v1h4.5a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.147-.354"
      />
    </g>
  </svg>
);
export default LicenseManager;

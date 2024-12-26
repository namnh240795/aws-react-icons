import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotCertificate: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M29.948 35.041h2V45a1.001 1.001 0 0 1-1.566.824L24.02 41.45l-6.36 4.374A1 1 0 0 1 16.092 45v-9.959h2v8.058l5.361-3.687a1 1 0 0 1 1.133 0l5.361 3.687zM9 19.02C9 10.738 15.738 4 24.02 4s15.021 6.738 15.021 15.02-6.739 15.021-15.02 15.021C15.737 34.041 9 27.303 9 19.02m-2 0c0 9.385 7.635 17.021 17.02 17.021s17.021-7.636 17.021-17.021C41.041 9.636 33.405 2 24.021 2 14.634 2 7 9.636 7 19.02m8.268.433a.846.846 0 1 1 1.692.002.846.846 0 0 1-1.692-.002m-2 0a2.85 2.85 0 0 0 2.846 2.845 2.85 2.85 0 0 0 2.845-2.845 2.85 2.85 0 0 0-2.845-2.845 2.85 2.85 0 0 0-2.846 2.845m21.38.733H23.73a1 1 0 0 0-.957.709c-.655 2.166-2.59 3.62-4.814 3.62a5.07 5.07 0 0 1-5.063-5.062 5.07 5.07 0 0 1 5.063-5.061c2.224 0 4.16 1.455 4.814 3.62a1 1 0 0 0 .957.71h1.871c.278 0 .542-.116.731-.318l.851-.911.85.911c.19.202.454.318.731.318h1.055c.277 0 .542-.116.732-.318l.85-.911.85.911c.188.202.453.318.73.318h1.224l1.017.836zm.55-3.238a1 1 0 0 0-.636-.226h-1.146l-1.284-1.377c-.379-.405-1.084-.405-1.463 0l-1.284 1.377H29.2l-1.284-1.377a.999.999 0 0 0-1.462 0l-1.286 1.377h-.735c-1.096-2.618-3.612-4.33-6.473-4.33-3.895 0-7.063 3.168-7.063 7.061 0 3.894 3.168 7.062 7.063 7.062 2.861 0 5.377-1.711 6.473-4.329H35.09c.281 0 .548-.119.738-.326l1.582-1.732a1.004 1.004 0 0 0-.104-1.448z"
    />
  </svg>
);
export default IotCertificate;
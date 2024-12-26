import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsBackupDatabase: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M24 20.768c-3.722 0-6-1.295-6-2v-.104c0-.558 1.727-1.896 6-1.896s6 1.338 6 1.896v.104c0 .705-2.278 2-6 2m.008 12.994h-.016C21.099 33.74 18 33.028 18 32V21.5c1.541.838 3.778 1.268 6 1.268s4.459-.43 6-1.268V32c0 1.028-3.099 1.74-5.992 1.762M24 14.768c-4.785 0-8 1.566-8 3.896V32c0 3.437 6.106 3.748 7.987 3.762h.035C25.894 35.748 32 35.437 32 32V18.664c0-2.33-3.215-3.896-8-3.896M42 21c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m-7.704 16.03c-.1-.007-.195-.03-.296-.03-1.859 0-3.411 1.28-3.858 3H17.858c-.447-1.72-1.999-3-3.858-3-.101 0-.196.023-.296.03L8.195 22.338A4 4 0 0 0 10 19c0-.49-.101-.953-.262-1.386l12.074-8.272a3.97 3.97 0 0 0 4.376 0l12.074 8.272A4 4 0 0 0 38 19c0 1.395.72 2.622 1.805 3.338zM34 43c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m-20 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2M4 19c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M24 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m18 11a3.96 3.96 0 0 0-2.588.976l-11.88-8.138A3.95 3.95 0 0 0 28 6c0-2.205-1.794-4-4-4s-4 1.795-4 4c0 .666.179 1.285.468 1.838l-11.88 8.138A3.96 3.96 0 0 0 6 15c-2.206 0-4 1.795-4 4s1.794 4 4 4c.101 0 .196-.022.296-.03l5.509 14.693A4 4 0 0 0 10 41c0 2.206 1.794 4 4 4 1.859 0 3.411-1.28 3.858-3h12.284c.447 1.72 1.999 3 3.858 3 2.206 0 4-1.794 4-4 0-1.394-.72-2.621-1.805-3.337l5.509-14.692c.1.007.195.029.296.029 2.206 0 4-1.794 4-4s-1.794-4-4-4"
    />
  </svg>
);
export default AwsBackupDatabase;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const BackupStorage: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M22 31h4v-2h-4zm-5 2.007V27h14v6zM19 17h5v3.933a1 1 0 0 0 1 1h4V25H19zm9.5 3H26v-2.542zm3.493 5H31v-4.754a1 1 0 0 0-.272-.685l-4-4.247A1 1 0 0 0 26 15h-7.528C17.66 15 17 15.66 17 16.472V25h-1a1 1 0 0 0-1 1v7.007c0 1.099.895 1.993 1.993 1.993H31a1.995 1.995 0 0 0 1.993-1.993V26a1 1 0 0 0-1-1M42 21c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m-7.704 16.03c-.1-.008-.195-.03-.296-.03-1.859 0-3.411 1.28-3.858 3H17.858c-.447-1.72-1.999-3-3.858-3-.101 0-.196.022-.296.03L8.195 22.338A4 4 0 0 0 10 19c0-.489-.101-.953-.262-1.387l12.074-8.272A3.97 3.97 0 0 0 24 10a3.97 3.97 0 0 0 2.188-.659l12.074 8.272A4 4 0 0 0 38 19c0 1.395.72 2.622 1.805 3.338zM34 43c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m-20 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2M4 19c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M24 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m18 11a3.96 3.96 0 0 0-2.588.976l-11.88-8.139A3.95 3.95 0 0 0 28 6c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 .666.179 1.284.468 1.837l-11.88 8.139A3.96 3.96 0 0 0 6 15c-2.206 0-4 1.794-4 4s1.794 4 4 4c.101 0 .196-.022.296-.03l5.509 14.692A4 4 0 0 0 10 41c0 2.206 1.794 4 4 4 1.859 0 3.411-1.28 3.858-3h12.284c.447 1.72 1.999 3 3.858 3 2.206 0 4-1.794 4-4 0-1.395-.72-2.622-1.805-3.338l5.509-14.692c.1.008.195.03.296.03 2.206 0 4-1.794 4-4s-1.794-4-4-4"
    />
  </svg>
);
export default BackupStorage;
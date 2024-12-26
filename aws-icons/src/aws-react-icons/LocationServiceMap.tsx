import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const LocationServiceMap: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M42.206 24.752 32.198 22.25l2.669-17.792L44 8.61zM33.995 41.2l-1.776-16.883 9.934 2.484 1.777 16.883zM6.905 24.14l11.079 1.705-1.794 17.944L4.21 41.22zM4.222 4.383l12.895 3.398.89 16.043-11.055-1.7zm25.97 17.75-10.18 1.697-.893-16.06 13.744-3.437zM19.994 25.86l10.198-1.7 1.792 17.027-13.781 2.584zM46.068 8.11a1 1 0 0 0-.58-1.02l-11-5a1 1 0 0 0-.656-.06L18.08 5.966 3.255 2.061a.997.997 0 0 0-1.243 1.12l3.05 19.817-2.975 18.846a1 1 0 0 0 .777 1.134l14 3q.195.04.395.004l15.785-2.959 11.788 2.947a1 1 0 0 0 .898-.216 1 1 0 0 0 .338-.859L44.08 26.002z"
    />
  </svg>
);
export default LocationServiceMap;

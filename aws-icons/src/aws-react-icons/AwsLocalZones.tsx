import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsLocalZones: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M20.5 17.614c-.61 0-1.105-.483-1.105-1.078 0-.593.496-1.077 1.106-1.077s1.105.484 1.105 1.077c0 .595-.496 1.078-1.105 1.078M29.58 7.439l-.754-.66-7.326 7.947a2.14 2.14 0 0 0-.998-.255c-1.168 0-2.12.927-2.12 2.065 0 1.14.952 2.065 2.12 2.065 1.167 0 2.117-.926 2.117-2.065 0-.426-.133-.823-.362-1.153zm-13.752 7.53a4.8 4.8 0 0 0-.203 1.367c0 1.672.858 3.218 2.297 4.134l.554-.827c-1.152-.733-1.838-1.97-1.838-3.307 0-.106.012-.21.02-.313a.8.8 0 0 1-.048-.205zm8.751.85a.8.8 0 0 1-.047.204c.008.103.021.208.021.313 0 1.337-.688 2.574-1.838 3.307l.553.827c1.439-.916 2.298-2.462 2.298-4.134 0-.464-.072-.924-.203-1.367zm-1.166-6.125a7.65 7.65 0 0 0-2.907-.563c-4.194 0-7.597 3.318-7.597 7.407 0 2.509 1.287 4.83 3.444 6.203l.547-.83c-1.864-1.185-2.978-3.2-2.978-5.373 0-3.545 2.948-6.42 6.584-6.42a6.5 6.5 0 0 1 2.177.366zm3.757 3.308a7.23 7.23 0 0 1 .932 3.536c0 2.509-1.296 4.83-3.454 6.203l-.547-.83c1.865-1.195 2.988-3.2 2.988-5.373 0-.948-.223-1.896-.648-2.745zm-2.198-5.007c-1.244-.593-2.653-.938-4.173-1.007h-.616c-5.552.266-9.41 4.197-9.157 9.353.263 5.313 7.687 14.31 9.48 16.395 1.782-2.084 9.207-11.092 9.47-16.395.091-1.798-.345-3.526-1.256-5.008l.547-.602.192-.119c1.105 1.7 1.631 3.694 1.53 5.778-.314 6.34-9.703 16.988-10.109 17.442a.5.5 0 0 1-.374.168.5.5 0 0 1-.385-.168c-.405-.454-9.795-11.101-10.107-17.442C9.738 10.662 14.003 6.296 20.15 6h.669c1.792.089 3.414.504 4.851 1.244z"
      />
    </g>
  </svg>
);
export default AwsLocalZones;
import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotThingCar: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M37.035 28.246h-.955c-.442-1.61-1.905-2.805-3.654-2.805s-3.212 1.194-3.655 2.805h-8.175c-.443-1.61-1.906-2.805-3.655-2.805s-3.212 1.194-3.654 2.805h-.619v-2.894c0-.154.104-.27.198-.278a1 1 0 0 0 .214-.04l6.3-1.969a1.72 1.72 0 0 0 1.083-1.248l1.248-3.79a.12.12 0 0 1 .113-.086h9.452c.155 0 .295.085.342.166l2.342 5.071a1 1 0 0 0 .713.561c1.633.326 2.362 1.282 2.362 3.1zm-6.414 1c0-.995.81-1.805 1.805-1.805s1.804.81 1.804 1.805-.809 1.805-1.804 1.805-1.805-.81-1.805-1.805m-15.484 0c0-.995.81-1.805 1.804-1.805.995 0 1.805.81 1.805 1.805s-.81 1.805-1.805 1.805-1.804-.81-1.804-1.805m18.266-12.038a2.43 2.43 0 0 0-2.127-1.267h-9.452c-.917 0-1.726.587-2.014 1.461l-1.259 3.828-5.979 1.866c-1.077.156-1.904 1.123-1.904 2.256v2.015H9.031v2h1.778c.24.518.757.88 1.361.88h1.117c.442 1.61 1.905 2.804 3.654 2.804 1.75 0 3.212-1.194 3.655-2.805h8.175c.443 1.611 1.906 2.805 3.655 2.805 1.75 0 3.212-1.194 3.654-2.805h1.462c.823 0 1.493-.678 1.493-1.51v-1.898c0-2.564-1.224-4.298-3.462-4.937zm6.268 21.33c0 .625-.51 1.134-1.136 1.134H9.41a1.136 1.136 0 0 1-1.135-1.135V9.423c0-.626.51-1.135 1.135-1.135h29.126c.626 0 1.135.51 1.135 1.135zm6.274-24.112v-2h-4.274V9.423a3.14 3.14 0 0 0-3.135-3.135H35.52V2h-2v4.288h-3.273V2h-2v4.288h-3.274V2h-2v4.288H19.7V2h-2v4.288h-3.273V2h-2v4.288H9.41a3.14 3.14 0 0 0-3.135 3.135v3.003H2v2h4.275V17.7H2v2h4.275v3.274H2v2h4.275v3.273H2v2h4.275v3.273H2v2h4.275v3.018a3.14 3.14 0 0 0 3.135 3.135h3.016v4.273h2v-4.273H17.7v4.273h2v-4.273h3.273v4.273h2v-4.273h3.274v4.273h2v-4.273h3.273v4.273h2v-4.273h3.016a3.14 3.14 0 0 0 3.136-3.135V35.52h4.274v-2h-4.274v-3.273h4.274v-2h-4.274v-3.273h4.274v-2h-4.274V19.7h4.274v-2h-4.274v-3.273z"
    />
  </svg>
);
export default IotThingCar;
import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IotGreengrassDeployment: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M31.5 24c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m-9 9c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.826 0 1.499.673 1.499 1.5S23.326 33 22.5 33M34 22.5a2.5 2.5 0 0 0-1.925-2.427 9.7 9.7 0 0 0-.791-1.91l-.873.488c.249.446.443.917.609 1.397A2.5 2.5 0 0 0 29 22.5c0 1.292.988 2.346 2.247 2.475a8.7 8.7 0 0 1-6.263 6.379A2.496 2.496 0 0 0 22.5 29a2.497 2.497 0 0 0-2.471 2.205 8.6 8.6 0 0 1-1.635-.709l-.5.866c.705.408 1.462.697 2.243.916A2.49 2.49 0 0 0 22.5 34a2.5 2.5 0 0 0 2.312-1.557 9.72 9.72 0 0 0 7.506-7.592A2.5 2.5 0 0 0 34 22.5M17.5 28c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m7.499-10.5c0-.827.673-1.5 1.501-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5a1.5 1.5 0 0 1-1.501-1.5m-5.002 9.029a9.79 9.79 0 0 0 6.636-6.543A2.495 2.495 0 0 0 29 17.5a2.496 2.496 0 0 0-2.179-2.468 9.74 9.74 0 0 0-2.064-4.187l-.762.646a8.8 8.8 0 0 1 1.818 3.617 2.5 2.5 0 0 0-1.814 2.392c0 1.073.684 1.982 1.636 2.336a8.79 8.79 0 0 1-5.826 5.708A2.5 2.5 0 0 0 17.5 24a2.49 2.49 0 0 0-2.344 1.66 8.7 8.7 0 0 1-2.396-.997l-.52.855c.866.525 1.799.9 2.776 1.134A2.495 2.495 0 0 0 17.5 29a2.5 2.5 0 0 0 2.497-2.471M10 17.5c0 .827-.673 1.5-1.5 1.5S7 18.327 7 17.5 7.673 16 8.5 16s1.5.673 1.5 1.5M17.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 9.327 16 8.5 16.673 7 17.5 7m-2.48 1.697A2.494 2.494 0 0 0 17.5 11a2.495 2.495 0 0 0 2.467-2.171 8.7 8.7 0 0 1 1.856.814l.516-.856a9.7 9.7 0 0 0-2.467-1.037A2.495 2.495 0 0 0 17.5 6a2.5 2.5 0 0 0-2.336 1.632c-3.69.831-6.624 3.799-7.414 7.495A2.495 2.495 0 0 0 6 17.5a2.5 2.5 0 0 0 1.94 2.432 9.7 9.7 0 0 0 1.814 3.43l.771-.636a8.7 8.7 0 0 1-1.527-2.776A2.504 2.504 0 0 0 11 17.5a2.495 2.495 0 0 0-2.199-2.47 8.85 8.85 0 0 1 6.219-6.333"
      />
    </g>
  </svg>
);
export default IotGreengrassDeployment;
import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonElasticTranscoder: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M7.435 17.022a5 5 0 0 1-.008-.278c0-2.81 1.894-3.878 3.05-4.27a6 6 0 0 1-.009-.34c0-2.326 1.58-4.74 3.675-5.615 2.455-1.025 5.053-.513 6.953 1.363a7 7 0 0 1 1.395 2.008 2.78 2.78 0 0 1 2.471-.477c1.215.35 2.033 1.437 2.23 2.941.63.152 1.554.489 2.321 1.19-.082-.004-.163-.012-.245-.012-.444 0-.875.054-1.29.149a5 5 0 0 0-1.345-.436.49.49 0 0 1-.409-.558c-.083-1.181-.66-2.074-1.542-2.328-.72-.207-1.491.069-1.967.702a.505.505 0 0 1-.874-.128c-.339-.944-.828-1.736-1.454-2.355-.768-.759-2.88-2.393-5.853-1.151-1.719.717-3.066 2.785-3.066 4.707q.001.325.038.64a.49.49 0 0 1-.372.535c-1.011.255-2.707 1.039-2.707 3.435q0 .117.006.232c.016.31.085.605.181.892H7.569a4.2 4.2 0 0 1-.134-.846m21.47 13.253v-2.078l1.651 1.04zm-.231-3.393a.51.51 0 0 0-.51-.017.49.49 0 0 0-.259.433v3.877c0 .179.099.345.259.431a.51.51 0 0 0 .51-.016l3.08-1.939a.49.49 0 0 0 0-.83zm.594 6.133c-2.058 0-3.732-1.65-3.732-3.678s1.674-3.679 3.732-3.679S33 27.308 33 29.337s-1.674 3.678-3.732 3.678M7 28.708h10v-8.87H7zm22.268-13.205c2.058 0 3.732 1.65 3.732 3.678s-1.674 3.678-3.732 3.678-3.732-1.65-3.732-3.678 1.674-3.678 3.732-3.678m0 9.17a4.7 4.7 0 0 0-4.668 4.04L18 26.318V23.68l6.858-2.845a4.73 4.73 0 0 0 4.41 3.01c2.609 0 4.732-2.091 4.732-4.663s-2.123-4.664-4.732-4.664-4.732 2.092-4.732 4.664c0 .235.036.46.07.687L18 22.61v-3.263a.496.496 0 0 0-.5-.493h-11c-.276 0-.5.221-.5.493v9.855c0 .273.224.493.5.493h11c.277 0 .5-.22.5-.493v-1.832l6.579 2.387C24.797 32.129 26.804 34 29.268 34 31.877 34 34 31.908 34 29.337s-2.123-4.664-4.732-4.664M29 18.243l1.577 1.023L29 20.29zm-.737 3.396a.52.52 0 0 0 .513-.022l2.984-1.94a.488.488 0 0 0 0-.823l-2.984-1.938a.51.51 0 0 0-.513-.023.49.49 0 0 0-.263.435v3.877c0 .181.101.348.263.434m-17.33 1.448 2.475 1.193-2.475 1.228zm-.5 3.714a.5.5 0 0 0 .225-.052l4.098-2.035a.49.49 0 0 0 .276-.443.49.49 0 0 0-.281-.44l-4.098-1.977a.51.51 0 0 0-.485.025.5.5 0 0 0-.235.419v4.01a.49.49 0 0 0 .5.493"
      />
    </g>
  </svg>
);
export default AmazonElasticTranscoder;
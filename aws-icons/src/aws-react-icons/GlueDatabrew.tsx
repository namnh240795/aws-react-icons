import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const GlueDatabrew: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M9 20a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0m-3 0c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2M34 7.972v24.056A1.975 1.975 0 0 1 32.027 34H7.973A1.975 1.975 0 0 1 6 32.028V23h1v9.028c0 .536.437.972.973.972h24.054a.974.974 0 0 0 .973-.972V7.972A.974.974 0 0 0 32.027 7H7.973A.974.974 0 0 0 7 7.972V17H6V7.972C6 6.885 6.885 6 7.973 6h24.054C33.115 6 34 6.885 34 7.972M8 28h2.693c2.854 0 6.129-1.874 7.455-4.267l.875.485C17.512 26.944 13.931 29 10.693 29H8zm20.063-17.499h2.068l-1.074-1.075.707-.707 2.065 2.066a.5.5 0 0 1 0 .707l-2.065 2.065-.707-.707 1.349-1.349h-2.255c-2.606 0-5.884 1.379-7.53 4.46l-.883-.471c1.595-2.984 4.94-4.989 8.325-4.989m-8.184 9.663C19.966 24.484 23.555 28 27.88 28h2.375l-1.198-1.199.707-.707 2.065 2.066a.5.5 0 0 1 0 .707l-2.065 2.066-.707-.707L30.282 29h-2.316c-4.951 0-8.989-3.955-9.087-8.816-.091-4.589-3.606-8.184-8-8.184H8v-1h2.879c4.944 0 8.897 4.025 9 9.164M12 17a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m0-3c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m3.149 7.988-.661 1.454-1.455-.661.661-1.454zm-3.44 1.289 3.275 1.49 1.49-3.275-3.276-1.49zM29 16h2.016l-.015 6h-2.008zm-1.008 7h4.007l.019-8h-4.017zm-4.993-6h2.017l-.015 5h-2.007zm-1.007 6h4.007l.019-7h-4.017z"
      />
    </g>
  </svg>
);
export default GlueDatabrew;
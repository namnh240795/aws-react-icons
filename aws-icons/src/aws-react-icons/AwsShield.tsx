import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsShield: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M18.005 29.476V11.631l-6 2.217v10.649c.011.174.344 4.727 6 4.979m6.958-6.77v-8.858l-5.958-2.215v17.848c.912-.064 1.447-.3 2.048-.662q.078.522.247 1.009c-.734.406-1.508.672-2.816.672-7.103 0-7.475-5.919-7.478-5.979V13.5a.5.5 0 0 1 .326-.469l7-2.587a.5.5 0 0 1 .347.001l6.958 2.586a.5.5 0 0 1 .326.469v9.008a5.4 5.4 0 0 0-1 .198m2.042 2.791h-1v2h-2v1h2v2h1v-2h2v-1h-2zm3.047 2.515a3.537 3.537 0 0 0-3.532-3.533 3.537 3.537 0 0 0-3.533 3.533 3.537 3.537 0 0 0 3.533 3.532 3.537 3.537 0 0 0 3.532-3.532m1 0a4.537 4.537 0 0 1-4.532 4.532 4.54 4.54 0 0 1-4.533-4.532 4.54 4.54 0 0 1 4.533-4.533 4.54 4.54 0 0 1 4.532 4.533m-8.533 3.81q.39.41.853.734c-1.398.651-3.025.988-4.867.988-3.238 0-5.803-.968-7.62-2.878-3.086-3.242-2.89-7.99-2.879-8.19V11.5c0-.205.123-.388.313-.464l10-4a.5.5 0 0 1 .372 0l10 4c.19.076.314.259.314.464v11s.008.223-.002.575a5.5 5.5 0 0 0-.994-.387l-.003-.165V11.838l-9.5-3.799-9.5 3.799V22.5c-.004.069-.183 4.556 2.608 7.482 1.621 1.7 3.94 2.562 6.891 2.562 1.508 0 2.843-.254 4.014-.722"
      />
    </g>
  </svg>
);
export default AwsShield;

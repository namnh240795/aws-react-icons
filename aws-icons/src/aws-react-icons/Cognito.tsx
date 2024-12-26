import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Cognito: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M9 17h6v-1H9zm22-4V9.3c0-.717-.465-1.3-1.037-1.3H8.037C7.475 8 7 8.596 7 9.3V13h11V9.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V13zm-9 1c0 1.104.897 2 2 2s2-.896 2-2c0-1.103-.897-2-2-2s-2 .897-2 2m9 0h-1v5h-1v-9H19v8.696a5.52 5.52 0 0 1 3.097-2.396A2.98 2.98 0 0 1 21 14c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .966-.467 1.817-1.177 2.366 1.219.421 2.285 1.243 2.958 2.354l-.855.518a4.6 4.6 0 0 0-2.633-2.02 3.37 3.37 0 0 1-2.836 0A4.54 4.54 0 0 0 19.216 21H23v1h-4.5a.5.5 0 0 1-.5-.5V14H7v9.701C7 24.405 7.475 25 8.037 25H21v1H8.037C6.914 26 6 24.969 6 23.701V9.3C6 8.032 6.914 7 8.037 7h21.926C31.086 7 32 8.032 32 9.3V21h-.999zm2 14c0 2.757-2.243 5-5 5s-5-2.243-5-5c0-2.756 2.243-5 5-5s5 2.244 5 5m1 0c0-3.308-2.691-6-6-6s-6 2.692-6 6c0 3.309 2.691 6 6 6s6-2.691 6-6m-6.138 1.862 3.714-3.713-.707-.707-3.36 3.36-1.514-1.514-.707.707 1.867 1.867a.5.5 0 0 0 .707 0M14 20h2v-1h-2zm-5 0h4v-1H9z"
      />
    </g>
  </svg>
);
export default Cognito;
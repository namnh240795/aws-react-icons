import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const IdentityAndAccessManagement: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M7 30h26V11H7zm27-19.5v20a.5.5 0 0 1-.5.5h-27a.5.5 0 0 1-.5-.5v-20a.5.5 0 0 1 .5-.5h27a.5.5 0 0 1 .5.5M22 24h8v-1h-8zm6-3h3v-1h-3zm-6 0h4v-1h-4zm-7 2.5a.5.5 0 1 0-1.002.002A.5.5 0 0 0 15 23.5m1 0c0 .651-.419 1.201-1 1.408V26h-1v-1.092c-.581-.207-1-.757-1-1.408 0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5m-6 3.496 8.997.004.001-2H17v-1h1.998l.001-1H17v-1h1.999L19 20.004 10.003 20zM11 19l6.998.003v-3.426c0-.818-.666-1.414-1.063-1.696a4.36 4.36 0 0 0-2.435-.78h-.001c-1.765 0-3.497 1.225-3.498 2.474zm-2 8.496.003-7.996c0-.133.053-.26.146-.354A.5.5 0 0 1 9.503 19H10l.001-3.425c.001-1.989 2.375-3.474 4.498-3.474h.001a5.33 5.33 0 0 1 3.014.964c.958.681 1.485 1.573 1.484 2.513v3.426h.502a.5.5 0 0 1 .5.5l-.003 7.996c0 .133-.053.26-.146.354a.5.5 0 0 1-.354.146L9.5 27.996a.5.5 0 0 1-.5-.5M29 18h2v-1h-2zm-7 0h6v-1h-6z"
      />
    </g>
  </svg>
);
export default IdentityAndAccessManagement;

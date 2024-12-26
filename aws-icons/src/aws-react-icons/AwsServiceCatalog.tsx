import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsServiceCatalog: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M31.921 15.838a1.673 1.673 0 0 1-2.256-1.563c0-.585.3-1.117.806-1.425.26-.162.552-.245.864-.245.921 0 1.67.75 1.67 1.67 0 .692-.434 1.318-1.084 1.563m-.586-4.227c-.34 0-.664.086-.972.21-.27-.346-.553-.68-.853-.984A12.45 12.45 0 0 0 20.472 7a12.48 12.48 0 0 0-9.014 3.808l.713.693a11.5 11.5 0 0 1 8.301-3.507c3.17 0 6.126 1.255 8.325 3.537.253.255.477.544.704.83a2.63 2.63 0 0 0-.83 1.914 2.67 2.67 0 0 0 2.664 2.664A2.674 2.674 0 0 0 34 14.274a2.667 2.667 0 0 0-2.665-2.663M22.14 31.44a1.673 1.673 0 0 1-1.667 1.566 1.67 1.67 0 0 1-1.664-1.566c-.001-.012-.003-.093-.005-.105 0-.92.75-1.67 1.67-1.67s1.67.75 1.67 1.67zm9.804-13.463a11.555 11.555 0 0 1-8.854 12.888 2.664 2.664 0 0 0-2.617-2.194 2.667 2.667 0 0 0-2.657 2.83A2.667 2.667 0 0 0 20.472 34a2.66 2.66 0 0 0 2.6-2.115c.464-.096.916-.21 1.33-.354a12.545 12.545 0 0 0 8.65-11.952c0-.597-.041-1.184-.124-1.747zm-22.28-5.372c.295 0 .584.079.84.231.52.301.831.84.831 1.439a1.673 1.673 0 0 1-2.296 1.55 1.67 1.67 0 0 1 .626-3.22m-.775 6.974c0-.559.038-1.104.113-1.622.051-.364.143-.71.227-1.06.142.024.287.042.436.042a2.667 2.667 0 0 0 2.664-2.664c0-.944-.508-1.825-1.321-2.297a2.63 2.63 0 0 0-1.343-.367A2.667 2.667 0 0 0 7 14.275c0 .941.49 1.79 1.274 2.27-.106.415-.195.84-.257 1.272a12 12 0 0 0-.123 1.762 12.54 12.54 0 0 0 8.648 11.952l.31-.944a11.55 11.55 0 0 1-7.964-11.008m8.243 6.185v-3.236l2.872-1.627v3.236zM13.265 20.9l2.872 1.628v3.236l-2.872-1.627zm3.37-2.47 2.856 1.618-2.857 1.618-2.857-1.618zm.496-4.098 2.872 1.627v3.236L17.13 17.57zm3.369-2.471 2.856 1.618-2.856 1.619-2.856-1.619zm3.368 5.708-2.87 1.626V15.96l2.87-1.627zm3.354 2.48-2.857 1.617-2.857-1.618 2.857-1.618zm.512 4.088-2.872 1.627v-3.236l2.872-1.627zm-3.866 1.627-2.87-1.627v-3.236l2.87 1.627zm.252 1.285a.5.5 0 0 0 .49 0l3.866-2.189a.5.5 0 0 0 .252-.432v-4.38a.5.5 0 0 0-.252-.432l-3.614-2.047v-4.09a.5.5 0 0 0-.253-.432l-3.864-2.19a.5.5 0 0 0-.49 0l-3.865 2.19a.5.5 0 0 0-.253.432v4.09l-3.614 2.047a.5.5 0 0 0-.252.432v4.38c0 .179.096.344.252.432l3.867 2.19a.5.5 0 0 0 .489 0l3.621-2.052z"
      />
    </g>
  </svg>
);
export default AwsServiceCatalog;
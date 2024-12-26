import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonEksDistro: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M27.271 27.418a1.845 1.845 0 0 1-2.602.05 1.83 1.83 0 0 1-.564-1.29 1.83 1.83 0 0 1 .514-1.31c.34-.354.798-.554 1.29-.564l.037-.001a1.84 1.84 0 0 1 1.325 3.115m-1.382-4.114a2.82 2.82 0 0 0-1.991.87 2.82 2.82 0 0 0-.793 2.025c.016.758.324 1.466.871 1.99a2.83 2.83 0 0 0 1.968.792 2.833 2.833 0 0 0 2.84-2.894 2.83 2.83 0 0 0-.871-1.991c-.547-.525-1.259-.782-2.024-.792m5.863 6.73-2.277-.455a.5.5 0 0 0-.393.087l-.962.703a.5.5 0 0 0-.203.345l-.268 2.298-3.596-.004-.265-2.282a.5.5 0 0 0-.2-.344l-.972-.72a.5.5 0 0 0-.396-.088l-2.262.452-1.11-3.42 2.116-.971a.5.5 0 0 0 .268-.3l.365-1.12a.5.5 0 0 0-.04-.4l-1.139-2.027 2.912-2.111 1.564 1.699a.5.5 0 0 0 .368.16h.003l1.21-.006a.5.5 0 0 0 .364-.161l1.557-1.688 2.908 2.115-1.135 2.019a.5.5 0 0 0-.041.397l.361 1.133a.5.5 0 0 0 .267.302l2.11.969zm-13.756 2.383L7 26.68V12.28l9-4.935v4.52l-4.746 2.684a.5.5 0 0 0-.254.435v9c0 .182.1.35.259.438l6.5 3.578a.5.5 0 0 0 .483 0l.007-.003.894 2.76a.5.5 0 0 0 .573.337l1.113-.222zM20 11.84V7.309l10 4.984v7.319l-1.375-1.002a.5.5 0 0 0-.662.066l-1.711 1.855-.252.002v-5.55a.5.5 0 0 0-.287-.451zm13.688 14.053-2.313-1.062-.228-.715 1.246-2.217a.5.5 0 0 0-.142-.65L31 20.34v-8.355a.5.5 0 0 0-.277-.447l-11-5.484A.5.5 0 0 0 19 6.5v5.656a.5.5 0 0 0 .288.452L25 15.3v4.714l-1.236-1.343a.5.5 0 0 0-.662-.066l-3.338 2.42-1.3-1.641 3.253-4.077h-1.444l-2.869 3.37v-3.37h-1.287v8.36h1.287v-3.86l2.626 3.329.549.977-.23.703-2.321 1.065a.5.5 0 0 0-.268.609l.146.448L12 23.689v-8.414l4.747-2.683a.5.5 0 0 0 .253-.435V6.5a.498.498 0 0 0-.74-.44l-10 5.484a.5.5 0 0 0-.26.439v15a.5.5 0 0 0 .269.443l11.5 6a.5.5 0 0 0 .471-.004l4.476-2.442.103.076.292 2.509a.5.5 0 0 0 .497.442l4.485.004h.001a.5.5 0 0 0 .497-.442l.295-2.523.608-.444 2.498.5a.497.497 0 0 0 .574-.335l1.389-4.266a.5.5 0 0 0-.267-.61"
      />
    </g>
  </svg>
);
export default AmazonEksDistro;

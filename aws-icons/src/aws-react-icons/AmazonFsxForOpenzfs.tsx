import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonFsxForOpenzfs: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M28 21.993v-1h-5v1h3.747l-3.747 5v1h5v-1h-3.75zm-10.001.185h1.308l1.821-2.66.038-.054-.598-.844zm-2.07-4.931-1.429-.548c-.462-.175-.823-.34-1.073-.493q-.358-.22-.515-.488-.154-.266-.154-.707c0-.527.168-.92.514-1.202.345-.283.855-.426 1.516-.426.688 0 1.491.159 2.384.475l.126.044v-.875l-.056-.025a6.4 6.4 0 0 0-1.24-.4 6 6 0 0 0-1.255-.142c-.882 0-1.606.239-2.151.711-.549.475-.828 1.103-.828 1.866 0 .564.17 1.046.504 1.431.329.379.849.709 1.547.981l1.548.6q.782.302 1.127.671c.223.239.335.532.335.871 0 .571-.204 1.01-.625 1.341-.421.332-.996.501-1.71.501-.77 0-1.626-.169-2.546-.501l-.126-.046v.873l.054.026c.784.379 1.687.571 2.684.571.97 0 1.767-.255 2.364-.757.603-.506.909-1.177.909-1.995 0-.562-.156-1.038-.462-1.415-.303-.371-.788-.688-1.442-.942M6 22.129h.976v-4.3h3.725v-.896H6.976v-3.35h4.407v-.896H6zm16.202-2.136h1.352l-1.348-1.917 2.635-3.674h-1.293l-2.055 2.935-.581.807zm-.967-3.241-1.646-2.35h-1.35l2.312 3.26zM29 21.993h3v-1h-3zm0 6h3v-1h-3zm0-3h5v-1h-5z"
      />
    </g>
  </svg>
);
export default AmazonFsxForOpenzfs;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonKendra: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M7.004 16.02h24.033v-1.002H7.004zM18.02 8.007h13.018V7.005H18.02zm-5.007 0h2.003V7.005h-2.003zm-3.004 0h2.003V7.005h-2.003zm-3.004 0h2.003V7.005H7.004zm21.53 17.027a3.474 3.474 0 0 1-3.511 3.512 3.474 3.474 0 0 1-3.51-3.512 3.474 3.474 0 0 1 3.51-3.512 3.474 3.474 0 0 1 3.51 3.512m1.001 0c0-2.53-1.982-4.513-4.512-4.513s-4.512 1.982-4.512 4.513 1.982 4.514 4.512 4.514 4.512-1.983 4.512-4.514m5.295 8.338-3.86-3.758c-.391.505-.843.958-1.348 1.35l3.763 3.861a.59.59 0 0 0 .52.167c.237-.03.488-.166.703-.383.364-.362.555-.904.222-1.237m-9.801-1.827a6.517 6.517 0 0 0 6.509-6.51c0-3.59-2.92-6.511-6.51-6.511a6.517 6.517 0 0 0-6.508 6.51c0 3.59 2.92 6.51 6.509 6.51m10.287 3.773c-.372.372-.83.609-1.286.668q-.112.014-.222.014c-.432 0-.828-.163-1.135-.47l-3.9-3.993a7.45 7.45 0 0 1-3.744 1.01c-4.142 0-7.51-3.37-7.51-7.513s3.368-7.512 7.51-7.512 7.51 3.37 7.51 7.512c0 1.36-.368 2.632-1.002 3.734l3.996 3.89c.698.699.603 1.84-.217 2.66M5.001 10.01H33.04V5.502c0-.276-.225-.5-.5-.5H5.501c-.275 0-.5.224-.5.5v4.507M19.92 33.047H4.5a.5.5 0 0 1-.501-.5V5.501C4 4.674 4.674 4 5.502 4H32.54c.828 0 1.502.674 1.502 1.502v16.509a9.5 9.5 0 0 0-1.001-2.088V11.01H5v21.035h13.62q.605.556 1.298 1.001M7.004 20.026h9.952a9 9 0 0 1 .706-1.002H7.004zm8.728 3.005a10 10 0 0 0-.162 1.002H7.004V23.03z"
      />
    </g>
  </svg>
);
export default AmazonKendra;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsSimspaceWeaver: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M30 29.96v-4.184l3-1.734v4.306zm2.511 3.064h-7.212l-.974-4h.872c.024.02.038.048.067.063l4 2.15a.5.5 0 0 0 .472 0l1.413-.76zM8.856 30.48l1.408.756a.5.5 0 0 0 .472 0l4-2.149c.029-.015.043-.044.067-.064h1.085l-1.273 4.001H7.438zM7 24.29l3 1.686v3.984l-3-1.612zm3.5-2.559 2.849 1.531-3.024 1.75-2.898-1.63zm4.979-2.913 3.123 1.678-1.123 3.527H15v-.71a.5.5 0 0 0-.264-.44l-1.393-.749zm-.411-8.832-.068.12v-.083zM20.5 7.068l4.758 2.556-4.605 2.662L15.9 9.54zm.5 13.044v-6.87l5-2.89v7.073zm5.711 1.957.01.02-1.457.784a.5.5 0 0 0-.264.44v.71h-1.891l-.841-3.457 2.788-1.498zM26 28.023V24.3l3 1.686v3.974l-3-1.612zm-5.736-6.634a.5.5 0 0 0 .472 0l.623-.334.722 2.968h-3.552l.969-3.045zM15 17.425v-7.25l5 2.89v7.047zm0 7.598h2.161l-.954 3H15zm-1 3.325-3 1.612v-4.184l3-1.734v4.306m9.297.675.973 4.001h-8.605l1.273-4zm-6.041-1 .955-3h4.113l.73 3zm6.826 0-.729-3H25v3zm5.418-6.292 2.849 1.531-3.033 1.754-2.898-1.629zm4.236 1.142-4-2.15a.5.5 0 0 0-.472 0l-1.67.898-1.658-3.026.8-.43a.5.5 0 0 0 .264-.44v-8a.5.5 0 0 0-.264-.44l-6-3.226a.5.5 0 0 0-.472 0l-6 3.225a.5.5 0 0 0-.264.44v8c0 .184.102.354.264.441l.331.178-2.136 3.306-1.723-.926a.5.5 0 0 0-.472 0l-4 2.15a.5.5 0 0 0-.264.44v5.334a.5.5 0 0 0 .264.44l1.712.92-1.824 3.267a.5.5 0 0 0 .003.492.5.5 0 0 0 .423.252l26.581.006h.187a.5.5 0 0 0 .439-.737l-1.756-3.283 1.707-.917a.5.5 0 0 0 .264-.44v-5.334a.5.5 0 0 0-.264-.44"
      />
    </g>
  </svg>
);
export default AwsSimspaceWeaver;

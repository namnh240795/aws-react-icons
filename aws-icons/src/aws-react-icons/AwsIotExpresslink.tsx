import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotExpresslink: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M31.409 14.095a7.5 7.5 0 0 0-2.183-.898c-.214-1.682-1.136-2.916-2.51-3.332a3.26 3.26 0 0 0-2.997.586 7.9 7.9 0 0 0-1.684-2.378c-2.214-2.118-5.242-2.691-8.099-1.54-2.448.989-4.294 3.724-4.294 6.362q0 .216.013.429c-1.339.424-3.605 1.62-3.605 4.84 0 2.92 1.355 4.169 2.164 4.653.424.255 1.515.71 2.177.712h.804v-1h-.804c-.369-.001-1.25-.321-1.664-.57-.765-.458-1.677-1.49-1.677-3.795 0-2.777 2.043-3.688 3.26-3.984a.5.5 0 0 0 .378-.55 6 6 0 0 1-.046-.735c0-2.217 1.612-4.603 3.669-5.433 2.48-1.005 5.112-.504 7.033 1.333.748.716 1.331 1.629 1.734 2.715a.5.5 0 0 0 .864.132c.6-.775 1.574-1.096 2.484-.82 1.049.318 1.735 1.355 1.833 2.705a.497.497 0 0 0 .412.578 6.4 6.4 0 0 1 2.215.843c1.856 1.137 2.071 2.319 2.071 3.109 0 4.256-3.854 4.465-4.018 4.472l.037.999c.05-.001 4.981-.24 4.981-5.471 0-1.615-.834-2.911-2.548-3.962m-5.423 2.847a.92.92 0 0 0-.92-.92h-.08v-2h-1v2h-2v-2h-1v2h-2v-2h-1v2h-2v-2h-1v2h-.08a.92.92 0 0 0-.92.92v.08h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v.08c0 .508.413.92.92.92h2.08v-1h-2v-10h10v10h-5v1h5.08a.92.92 0 0 0 .92-.92v-.08h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2zm-2 15.08h1v-3h-1zm-3 1h1v-3h-1zm-3-1h1v-7h-1zm-3 2h1v-5h-1z"
      />
    </g>
  </svg>
);
export default AwsIotExpresslink;

import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const EventbridgePipes: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#E7157B"
      fillRule="evenodd"
      d="M18.033 37h8v2h-8c-4.411 0-8-3.589-8-8s3.589-8 8-8h12c3.309 0 6-2.691 6-6s-2.691-6-6-6h-8V9h8c4.411 0 8 3.589 8 8s-3.589 8-8 8h-12c-3.309 0-6 2.691-6 6s2.691 6 6 6m22.387 7h-6.84l-3.429-6 3.429-6h6.84l3.428 6zm5.448-6.496-4-7A1 1 0 0 0 41 30h-8a1 1 0 0 0-.868.504l-4 7a1 1 0 0 0 0 .992l4 7A1 1 0 0 0 33 46h8a1 1 0 0 0 .868-.504l4-7a1 1 0 0 0 0-.992M7.58 16l-3.429-6L7.58 4h6.84l3.428 6-3.428 6zm8.288 1.496 4-7a1 1 0 0 0 0-.992l-4-7A1 1 0 0 0 15 2H7a1 1 0 0 0-.868.504l-4 7a1 1 0 0 0 0 .992l4 7A1 1 0 0 0 7 18h8a1 1 0 0 0 .868-.504"
    />
  </svg>
);
export default EventbridgePipes;

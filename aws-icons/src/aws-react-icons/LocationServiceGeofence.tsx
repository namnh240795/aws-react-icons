import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const LocationServiceGeofence: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="m42.083 24.04-8.615.376-3.51-11.701a1.01 1.01 0 0 0-1.087-.705l-7.25.946.336-7.03 21.939-1.83zm-20.558-9.055 6.76-.882 3.122 10.402-10.356.45zm12.324 17.658-14.12 11.295L4.102 41.18l2.802-24.288 12.607-1.645L19 25.955A1 1 0 0 0 20 27.002l.043-.001L32 26.48zm11.86-30.346a.98.98 0 0 0-.792-.292l-24 2c-.5.042-.892.448-.916.95l-.394 8.264-13.736 1.79a1 1 0 0 0-.864.878l-3 26a1 1 0 0 0 .819 1.1l17 3q.087.015.174.015a1 1 0 0 0 .625-.22l15-12c.318-.254.45-.677.333-1.067l-1.897-6.323L43.043 26a1 1 0 0 0 .953-.91l2-22a1 1 0 0 0-.286-.794"
    />
  </svg>
);
export default LocationServiceGeofence;

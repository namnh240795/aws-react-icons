import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsBudgets: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23.971 13.969v-2.342l-3.412 3.412a.5.5 0 0 1-.666.036l-2.02-1.616-3.001 3.001-.707-.707 3.318-3.317a.5.5 0 0 1 .666-.037l2.019 1.616 3.096-3.095h-2.245v-1h3.452a.5.5 0 0 1 .5.5v3.549zm-10.921 7h-1V6.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v14.469h-1V7h-14zM8 32.131V20.914l6.184 4.206zm12.019-3.146a.5.5 0 0 0 .281-.087l4.661-3.171 6.459 7.226H8.608l6.409-7.266 4.721 3.211a.5.5 0 0 0 .281.087m5.777-3.825 6.241-4.246v11.229zm7.066-5.571-3.519-3-.648.76 3.019 2.575-11.695 7.956-11.695-7.956 3.019-2.575-.648-.76-3.519 3a.5.5 0 0 0-.176.38v13.484a.5.5 0 0 0 .5.5h25.037c.277 0 .5-.223.5-.5V19.969a.5.5 0 0 0-.175-.38"
      />
    </g>
  </svg>
);
export default AwsBudgets;

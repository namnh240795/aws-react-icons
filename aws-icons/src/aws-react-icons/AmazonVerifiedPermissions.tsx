import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonVerifiedPermissions: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#DD344C" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M25 24h4v1h-4v2h4v1h-4v2h-1v-8h1zm8 2.961-.716-.041a.51.51 0 0 0-.515.39 5.9 5.9 0 0 1-.764 1.843.5.5 0 0 0 .09.64l.535.477-1.36 1.359-.475-.532a.5.5 0 0 0-.641-.09 5.8 5.8 0 0 1-1.844.764.5.5 0 0 0-.389.517l.04.712h-1.922l.04-.713a.5.5 0 0 0-.389-.516 5.9 5.9 0 0 1-1.843-.766.5.5 0 0 0-.641.091l-.476.533-1.36-1.359.534-.476a.5.5 0 0 0 .09-.64 5.9 5.9 0 0 1-.764-1.845.5.5 0 0 0-.515-.389l-.715.041v-1.922l.718.041a.494.494 0 0 0 .515-.389 5.9 5.9 0 0 1 .765-1.841.5.5 0 0 0-.09-.641l-.538-.479 1.36-1.359.479.536a.5.5 0 0 0 .64.091 5.9 5.9 0 0 1 1.841-.763.5.5 0 0 0 .389-.516l-.04-.719h1.922l-.04.72a.5.5 0 0 0 .389.516 5.9 5.9 0 0 1 1.839.763.5.5 0 0 0 .64-.09l.481-.539 1.36 1.36-.537.478a.5.5 0 0 0-.09.641 5.9 5.9 0 0 1 .765 1.842c.053.239.28.406.515.389l.717-.041zm.844-2.815a.5.5 0 0 0-.372-.136l-.836.048a7 7 0 0 0-.571-1.377l.625-.557a.497.497 0 0 0 .021-.727l-2.108-2.108a.497.497 0 0 0-.727.021l-.56.627a6.8 6.8 0 0 0-1.374-.569l.047-.84A.5.5 0 0 0 27.49 18h-2.98a.5.5 0 0 0-.499.528l.047.838q-.718.21-1.375.57l-.559-.626a.5.5 0 0 0-.358-.167.54.54 0 0 0-.369.146l-2.108 2.108a.497.497 0 0 0 .021.727l.627.559a6.8 6.8 0 0 0-.572 1.375l-.837-.048a.52.52 0 0 0-.372.136.5.5 0 0 0-.156.363v2.982c0 .137.057.269.156.363a.53.53 0 0 0 .372.136l.834-.048q.21.721.571 1.379l-.623.555a.497.497 0 0 0-.021.727l2.108 2.108a.499.499 0 0 0 .727-.021l.555-.623q.658.362 1.379.573l-.047.832a.5.5 0 0 0 .499.528h2.98a.5.5 0 0 0 .499-.528l-.047-.831a7 7 0 0 0 1.38-.572l.554.621a.5.5 0 0 0 .358.167.45.45 0 0 0 .369-.146l2.108-2.108a.497.497 0 0 0-.021-.727l-.624-.556q.362-.66.571-1.378l.835.048a.502.502 0 0 0 .528-.499v-2.982a.5.5 0 0 0-.156-.363M15.52 17.767l-3.788 3.787a.5.5 0 0 1-.707 0l-1.892-1.893.707-.707 1.539 1.539 3.433-3.433zm0-7.223-3.788 3.787a.5.5 0 0 1-.707 0l-1.892-1.894.707-.707 1.539 1.54 3.433-3.433zm-.948 15.322-1.776 1.777 1.776 1.776-.707.707-1.776-1.776-1.777 1.776-.707-.707 1.777-1.776-1.777-1.777.707-.707 1.777 1.777 1.776-1.777zM24.927 10H22V7.383zM7 7h14v3.5a.5.5 0 0 0 .5.5H26v6h1v-6.265a.5.5 0 0 0-.167-.372l-4.737-4.236c-.029-.025-.063-.04-.096-.058V6H6.5a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5H20v-1H7z"
      />
    </g>
  </svg>
);
export default AmazonVerifiedPermissions;
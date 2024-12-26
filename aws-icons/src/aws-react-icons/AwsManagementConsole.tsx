import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsManagementConsole: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M14 9h2V8h-2zm-3 0h2V8h-2zM8 9h2V8H8zm-1 1h26V7H7zm26.5-4h-27a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5H24v-1H7V11h26v22h-3v1h3.5a.5.5 0 0 0 .5-.5v-27a.5.5 0 0 0-.5-.5M20 24.696a2.703 2.703 0 0 1-2.7-2.7c0-1.489 1.211-2.7 2.7-2.7s2.7 1.211 2.7 2.7-1.211 2.7-2.7 2.7m0-6.4c-2.04 0-3.7 1.66-3.7 3.7s1.66 3.7 3.7 3.7 3.7-1.66 3.7-3.7-1.66-3.7-3.7-3.7m7.5 4.761-.799-.046a.485.485 0 0 0-.515.389 6.3 6.3 0 0 1-.82 1.977.5.5 0 0 0 .09.64l.598.533-1.5 1.499-.531-.594a.5.5 0 0 0-.639-.09 6.3 6.3 0 0 1-1.98.82.5.5 0 0 0-.388.516l.045.795h-2.122l.045-.796a.5.5 0 0 0-.388-.516 6.3 6.3 0 0 1-1.977-.821.5.5 0 0 0-.64.091l-.532.595-1.501-1.5.596-.531a.5.5 0 0 0 .09-.64 6.3 6.3 0 0 1-.819-1.978c-.053-.237-.245-.392-.515-.389l-.798.046v-2.122l.801.046a.494.494 0 0 0 .515-.389c.16-.7.435-1.364.821-1.974a.5.5 0 0 0-.09-.64l-.601-.535 1.501-1.5.534.599a.5.5 0 0 0 .64.09 6.3 6.3 0 0 1 1.975-.818.5.5 0 0 0 .388-.516l-.045-.802h2.122l-.045.803a.5.5 0 0 0 .388.516c.7.159 1.365.434 1.974.818a.5.5 0 0 0 .64-.09l.535-.6 1.501 1.5-.599.534a.5.5 0 0 0-.09.64c.385.609.66 1.274.82 1.975.053.239.277.4.515.389l.8-.046zm.472-3.15-.918.052a7.4 7.4 0 0 0-.626-1.51l.686-.613a.497.497 0 0 0 .021-.726l-2.249-2.249a.53.53 0 0 0-.368-.146.5.5 0 0 0-.359.167l-.614.689a7.3 7.3 0 0 0-1.508-.625l.052-.922a.5.5 0 0 0-.499-.528h-3.18a.5.5 0 0 0-.499.528l.052.921a7.3 7.3 0 0 0-1.509.625l-.613-.688a.5.5 0 0 0-.359-.167.58.58 0 0 0-.368.146l-2.249 2.249a.5.5 0 0 0 .021.726l.688.614a7.4 7.4 0 0 0-.627 1.509l-.919-.052a.55.55 0 0 0-.372.135.5.5 0 0 0-.156.364v3.18a.5.5 0 0 0 .528.499l.916-.052q.228.792.625 1.512l-.683.611a.5.5 0 0 0-.021.726l2.249 2.249a.5.5 0 0 0 .727-.021l.61-.684q.722.4 1.512.628l-.052.914a.5.5 0 0 0 .499.528h3.18a.5.5 0 0 0 .499-.528l-.052-.914a7.3 7.3 0 0 0 1.514-.627l.608.683a.5.5 0 0 0 .359.167.45.45 0 0 0 .368-.146l2.249-2.249a.5.5 0 0 0-.021-.726l-.685-.612a7.3 7.3 0 0 0 .626-1.511l.917.052a.5.5 0 0 0 .528-.499v-3.18a.5.5 0 0 0-.156-.364.54.54 0 0 0-.372-.135"
      />
    </g>
  </svg>
);
export default AwsManagementConsole;
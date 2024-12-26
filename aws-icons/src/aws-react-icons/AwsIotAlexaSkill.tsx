import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotAlexaSkill: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M26.734 36.476c4.469-2.848 7.381-7.561 7.381-12.543 0-5.798-4.717-10.516-10.516-10.516s-10.517 4.718-10.517 10.516c0 4.229 2.521 8.031 6.421 9.687.551.233.907.755.907 1.327v1.521a12.5 12.5 0 0 1-1.858-.602 12.95 12.95 0 0 1-7.909-11.933c0-7.143 5.812-12.956 12.956-12.956s12.956 5.813 12.956 12.956c0 4.709-2.571 9.058-6.711 11.348a12.7 12.7 0 0 1-3.11 1.195M15.082 23.933c0-4.696 3.821-8.516 8.517-8.516s8.516 3.82 8.516 8.516c0 5.4-4.011 10.452-9.705 12.434v-1.42c0-1.377-.835-2.621-2.126-3.169a8.51 8.51 0 0 1-5.202-7.845m-6.439 0a14.95 14.95 0 0 0 9.127 13.773c1.124.477 2.294.794 3.49.983.051.007.099.025.15.025l.008-.001c.718.105 1.444.176 2.181.176 2.522 0 5.016-.642 7.214-1.858a14.99 14.99 0 0 0 7.742-13.098c0-8.247-6.709-14.956-14.956-14.956S8.643 15.686 8.643 23.933M43.868 39.42a4.45 4.45 0 0 1-4.447 4.448H8.448A4.453 4.453 0 0 1 4 39.42V8.448A4.453 4.453 0 0 1 8.448 4h30.973a4.45 4.45 0 0 1 4.447 4.448zM8.448 2A6.455 6.455 0 0 0 2 8.448V39.42a6.456 6.456 0 0 0 6.448 6.448h30.973a6.455 6.455 0 0 0 6.447-6.448V8.448A6.454 6.454 0 0 0 39.421 2z"
    />
  </svg>
);
export default AwsIotAlexaSkill;

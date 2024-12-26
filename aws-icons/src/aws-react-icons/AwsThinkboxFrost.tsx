import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsThinkboxFrost: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m25.032 29.566-5-3.333v-2.424l2.494-1.247 2.506 1.318zm-11 0V23.88l2.506-1.318 2.494 1.247v2.424zM8.524 20l5.092-2.97 2.416 1.272v3.396l-2.416 1.272zm5.508-9.566 5 3.334v2.423l-2.494 1.247-2.506-1.318zm5.5 12.507-2.5-1.25v-3.382l2.5-1.25 2.5 1.25v3.382zm5.5-12.507v5.686l-2.506 1.318-2.494-1.247v-2.423zM30.54 20l-5.092 2.97-2.416-1.272v-3.396l2.416-1.272zm1.714 4.448-.444-.896-2.713 1.339-2.605-1.371 5.292-3.088a.502.502 0 0 0 0-.864l-5.292-3.087 2.605-1.372 2.713 1.339.444-.896-2.063-1.018 2.073-1.092-.464-.884-2.097 1.103.252-2.214-.994-.113-.329 2.891-2.6 1.368V9.5a.502.502 0 0 0-.777-.416l-5.223 3.482V9.741l2.312-1.85-.625-.782-1.687 1.351V6h-1v2.46l-1.687-1.351-.626.782 2.313 1.85v2.825l-5.223-3.482a.502.502 0 0 0-.777.416v6.093l-2.6-1.368-.329-2.891-.994.113.252 2.214-2.097-1.103-.464.884 2.073 1.092-2.063 1.018.444.896 2.713-1.339 2.605 1.372-5.292 3.087a.502.502 0 0 0 0 .864l5.292 3.088-2.605 1.371-2.713-1.339-.444.896 2.063 1.018L6.8 26.558l.464.884 2.097-1.103-.252 2.214.994.113.329-2.891 2.6-1.368V30.5a.5.5 0 0 0 .777.416l5.223-3.481v2.824l-2.313 1.85.626.782 1.687-1.351V34h1v-2.46l1.687 1.351.625-.782-2.312-1.85v-2.824l5.223 3.481a.5.5 0 0 0 .513.025.5.5 0 0 0 .264-.441v-6.093l2.6 1.368.329 2.891.994-.113-.252-2.214 2.097 1.103.464-.884-2.073-1.092z"
      />
    </g>
  </svg>
);
export default AwsThinkboxFrost;

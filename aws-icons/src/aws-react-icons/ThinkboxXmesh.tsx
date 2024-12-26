import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ThinkboxXmesh: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m25.715 20.58-2.157 1.271 6.199 3.72c.15.09.242.252.243.427v2.617l2-1.377v-2.952zm-5.961 2.652L29 28.689l.001-2.405-6.572-3.944a.5.5 0 0 1-.298-.228.52.52 0 0 1 .069-.625.54.54 0 0 1 .247-.142l9.113-5.371-2.074-1.383L9.757 26.429a.5.5 0 0 1-.534-.013L7 24.934v2.304l2.507 1.736 9.739-5.742a.5.5 0 0 1 .508 0m-6.469-3.813 2.157-1.271-6.199-3.719A.5.5 0 0 1 9 14.002l-.011-2.617L7 12.762v2.952zm5.961-2.652L9.989 11.31l.01 2.406 6.678 4.008a.498.498 0 0 1-.003.859l-9.233 5.443 2.073 1.383 19.729-11.838a.5.5 0 0 1 .534.013L32 15.066v-2.304l-2.507-1.736-9.739 5.741a.5.5 0 0 1-.508 0m13.508-.336L26.699 20l6.055 3.569c.152.09.246.254.246.431v3.5c0 .164-.08.318-.216.411l-2.985 2.067a.5.5 0 0 1-.538.019L19.5 24.244l-9.761 5.753a.5.5 0 0 1-.538-.019l-2.985-2.067A.5.5 0 0 1 6 27.5V24c0-.177.094-.341.246-.431L12.301 20l-6.055-3.569A.5.5 0 0 1 6 16v-3.5c0-.164.08-.318.216-.411l2.985-2.067a.5.5 0 0 1 .538-.02l9.761 5.754 9.761-5.754a.5.5 0 0 1 .538.02l2.985 2.067A.5.5 0 0 1 33 12.5V16a.5.5 0 0 1-.246.431M22 31.232l-2.5 1.667-2.098-1.399 2.376-1.584A.5.5 0 0 0 20 29.5V26h-1v3.232l-2 1.334V28h-1v3.5c0 .167.084.323.223.416l3 2a.5.5 0 0 0 .555 0l2.999-2A.5.5 0 0 0 23 31.5V28h-1zM17 12h-1V8.5c0-.167.084-.323.223-.416l3-2a.5.5 0 0 1 .555 0l2.999 2A.5.5 0 0 1 23 8.5V12h-1V9.434l-2 1.333V14h-1v-3.5c0-.167.084-.323.223-.416L21.599 8.5 19.5 7.101 17 8.767z"
      />
    </g>
  </svg>
);
export default ThinkboxXmesh;
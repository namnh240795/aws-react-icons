import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsThinkboxKrakatoa: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M19 7.384V10h1V7.384l2.131 1.281.515-.857-2.888-1.737a.5.5 0 0 0-.516 0l-2.888 1.737.515.857zM24.326 33 19.5 29.835 14.674 33zM19 26.394c-.308-5.69-5.317-10.467-12-11.504V17H6v-2.684c0-.143.062-.28.169-.375.023-.02.053-.029.079-.044l-.006-.01 2.889-1.737.515.858L7.93 14.04c5.147 1.03 9.256 4.187 11.07 8.267V20c0-4.203-2.102-7.94-5.253-9.39l-1.506.828-.482-.876 1.722-.948a.5.5 0 0 1 .435-.022c2.704 1.135 4.703 3.63 5.584 6.754.881-3.125 2.88-5.619 5.584-6.754.14-.06.3-.05.435.022l1.722.948-.482.876-1.506-.828C22.102 12.058 20 15.796 20 20v2.32c1.814-4.093 5.923-7.252 11.07-8.28l-1.716-1.032.515-.858 2.889 1.737-.006.01c.026.015.056.024.079.044a.5.5 0 0 1 .17.375V17H32v-2.11c-6.679 1.036-11.687 5.808-12 11.522v2.555l2 1.311V27.79c.154-3.519 2.662-5.856 6.09-5.71a5.1 5.1 0 0 1 3.56 1.652 5.06 5.06 0 0 1 1.345 3.675c-.099 2.245-1.965 4.005-4.2 4.005q-.093.001-.186-.004a3.45 3.45 0 0 1-2.403-1.114 3.42 3.42 0 0 1-.909-2.483c.068-1.566 1.32-2.69 2.938-2.627l-.043 1c-1.06-.059-1.851.656-1.895 1.671-.029.654.2 1.28.644 1.761a2.45 2.45 0 0 0 1.711.793 3.174 3.174 0 0 0 3.343-3.046 4.07 4.07 0 0 0-1.08-2.954 4.12 4.12 0 0 0-2.868-1.33c-2.897-.136-4.918 1.777-5.047 4.733v3.122l3.274 2.148A.5.5 0 0 1 26 34H13a.5.5 0 0 1-.274-.918L16 30.934V27.79c-.129-2.934-2.151-4.845-5.047-4.71a4.12 4.12 0 0 0-2.868 1.33 4.07 4.07 0 0 0-1.08 2.953 3.19 3.19 0 0 0 3.343 3.046 2.45 2.45 0 0 0 1.711-.793 2.42 2.42 0 0 0 .644-1.76c-.043-1.016-.858-1.73-1.895-1.673l-.043-.999c1.614-.062 2.87 1.061 2.938 2.627a3.42 3.42 0 0 1-.909 2.483 3.45 3.45 0 0 1-2.589 1.118c-2.236.001-4.101-1.759-4.2-4.005a5.06 5.06 0 0 1 1.345-3.675 5.1 5.1 0 0 1 3.56-1.652c3.439-.15 5.936 2.19 6.09 5.688v2.51l2-1.31zM32 22h1v-3h-1zM6 22h1v-3H6z"
      />
    </g>
  </svg>
);
export default AwsThinkboxKrakatoa;

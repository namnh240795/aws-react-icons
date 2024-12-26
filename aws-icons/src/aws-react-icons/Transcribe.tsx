import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Transcribe: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M20.285 15.849h2.952v-.983h-2.952zm0-2.934h4.92v-.983h-4.92zm3.936 5.835h5.905v-.983H24.22zm.984-2.901h4.92v-.983h-4.92zm7.81 11.694h-7.81v.983h8.303c.272 0 .492-.22.492-.491V19.75h-.984zm-.864-15.611-4.062-3.39v3.39zm1.849.491v4.379h-.984v-3.887h-5.42a.49.49 0 0 1-.492-.492v-4.44l-7.82.002v6.665h-.983V7.494c0-.272.22-.492.492-.492L27.596 7a.5.5 0 0 1 .316.114l5.91 4.932a.49.49 0 0 1 .178.377m-23.556 14.21h.984v-3.932h-.984zm1.968.984h.984v-6.883h-.984zm1.998-.983h.985v-4.916h-.985zm1.892.983h.984v-6.883h-.984zm1.983-.983h.984v-4.916h-.984zm1.984.983h.984v-6.883h-.984zm1.938-1.966h.984v-3.933h-.984zm.62 2.678.82.543c-1.645 2.486-4.149 3.914-6.869 3.914-1.477 0-3.142-.436-4.42-1.148l-4.437 2.294A.7.7 0 0 1 7.63 34a.631.631 0 0 1-.556-.924l2.298-4.409c-.594-.963-1.425-2.642-1.425-4.47 0-4.683 3.806-8.213 8.854-8.213 1.747 0 3.004.552 4.356 1.382l-.515.838c-1.21-.743-2.326-1.237-3.841-1.237-3.814 0-7.87 2.534-7.87 7.23 0 1.27.518 2.794 1.42 4.178a.49.49 0 0 1 .024.496l-1.917 3.678 3.69-1.908a.49.49 0 0 1 .482.017c1.158.706 2.747 1.145 4.15 1.145 2.418 0 4.566-1.234 6.048-3.474"
      />
    </g>
  </svg>
);
export default Transcribe;
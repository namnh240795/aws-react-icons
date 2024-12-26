import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const Healthscribe: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M17.533 26.996c-.514-.525-1.423-.885-2.539-.969v-2.291l1.453-1.19a.56.56 0 0 1 .581.108c.24.219.492.493.758.783.827.898 1.846 2.006 3.092 2.101-.619.549-2.213 1.438-3.345 1.458M14.494 29c-1.527 0-2.5-.593-2.5-1s.973-1 2.5-1c1.526 0 2.5.592 2.5 1 0 .407-.974 1-2.5 1m1.667 1.299c0 .37-.729.801-1.667.801s-1.667-.431-1.667-.801c0-.144.123-.305.326-.443.41.091.86.144 1.341.144.48 0 .93-.053 1.34-.144.203.138.327.299.327.443m-4.707-3.303c-1.119-.02-2.778-.908-3.455-1.464 1.22-.123 2.222-1.212 3.036-2.097.265-.288.517-.563.757-.781.172-.158.418-.193.549-.135l1.653 1.232v2.276c-1.116.084-2.026.444-2.54.969m1.54-8.496a1.501 1.501 0 0 1 3 0c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5m8.712 6.168c-.167-.083-.382-.124-.657-.124-.885 0-1.757-.948-2.527-1.784a14 14 0 0 0-.82-.845 1.55 1.55 0 0 0-1.745-.244.5.5 0 0 0-.093.06l-.87.713v-1.495c1.14-.232 2-1.242 2-2.449 0-1.379-1.121-2.5-2.5-2.5a2.5 2.5 0 0 0-2.5 2.5c0 1.207.86 2.217 2 2.449v1.558l-1.13-.836a1.55 1.55 0 0 0-1.746.244c-.259.235-.533.531-.819.843-.77.837-1.642 1.786-2.528 1.786-.267 0-.476.039-.638.117a.7.7 0 0 0-.413.633c0 .988 2.576 2.407 4.281 2.662-.001.015-.007.028-.007.044 0 .603.429 1.123 1.121 1.483a1.38 1.38 0 0 0-.288.816c0 .894.919 1.613 2.167 1.768V34h1v-1.933c1.247-.155 2.167-.874 2.167-1.768 0-.29-.106-.567-.289-.816.692-.36 1.122-.88 1.122-1.483 0-.016-.007-.031-.008-.046 1.652-.26 4.132-1.666 4.132-2.645a.71.71 0 0 0-.412-.641M21.994 18h3v-1h-3zm0-6h4v-1h-4zm0 3h9v-1h-9zm3 6h6v-1h-6zm2-3h4v-1h-4zm2-10.31L32.366 11h-3.372zm4.85 3.359-5-4.906a.5.5 0 0 0-.35-.143h-9c-.277 0-.5.223-.5.5V20h1V7h8v4.5a.5.5 0 0 0 .5.5h4.5v15h-8v1h8.5a.5.5 0 0 0 .5-.5V11.406a.5.5 0 0 0-.15-.357"
      />
    </g>
  </svg>
);
export default Healthscribe;
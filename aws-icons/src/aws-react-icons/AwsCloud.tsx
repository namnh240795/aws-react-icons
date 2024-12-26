import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsCloud: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#242F3E" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m28.993 27.995-17.506-.019c-2.366-.002-4.333-1.847-4.475-4.2A6 6 0 0 1 7 23.396c0-3.098 2.091-4.11 3.337-4.438a.5.5 0 0 0 .37-.54 7 7 0 0 1-.048-.823c0-2.464 1.649-5.114 3.756-6.033.944-.413 1.817-.577 2.608-.577 2.253 0 3.844 1.33 4.538 2.047.768.793 1.366 1.805 1.779 3.01a.498.498 0 0 0 .879.128c.588-.82 1.547-1.189 2.44-.932 1.123.321 1.857 1.488 1.961 3.068a.5.5 0 0 0 .407.57C30.222 19.09 33 19.957 33 23.44c0 4.15-3.886 4.542-4.007 4.555m.601-10.02c-.215-1.908-1.194-3.279-2.66-3.697-1.035-.296-2.123-.033-2.945.672-.436-1.014-1.01-1.89-1.709-2.612-2.257-2.333-5.347-2.966-8.266-1.692-2.483 1.084-4.355 4.072-4.355 6.95q0 .261.017.518C8.319 18.574 6 19.875 6 23.397q0 .229.014.441c.174 2.878 2.579 5.135 5.472 5.138l17.548.017C29.084 28.99 34 28.52 34 23.44c0-3.938-2.997-5.126-4.406-5.466"
      />
    </g>
  </svg>
);
export default AwsCloud;

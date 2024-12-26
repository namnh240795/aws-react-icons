import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsMigrationHub: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m15.259 16.785 4-4a.5.5 0 0 1 .707 0l4 4-.707.707-3.646-3.646-3.647 3.646zm4.707 2 4 4-.707.707-3.646-3.646-3.647 3.646-.707-.707 4-4a.5.5 0 0 1 .707 0m4 1-.707.707-3.646-3.646-3.647 3.646-.707-.707 4-4a.5.5 0 0 1 .707 0zm2.762 8.025a1.26 1.26 0 1 1-1.782-1.782 1.26 1.26 0 0 1 1.782 1.782m-6.224 4.022a1.263 1.263 0 0 1-1.783 0 1.25 1.25 0 0 1-.369-.891 1.256 1.256 0 0 1 1.261-1.26c.323 0 .645.123.891.369.238.237.369.554.369.891s-.131.653-.369.891m-8.072-4.019a1.262 1.262 0 0 1 .891-2.151 1.262 1.262 0 0 1 .891 2.151 1.26 1.26 0 0 1-1.782 0m11.806-2.492a2.26 2.26 0 0 0-.332 2.76l-2.566 1.418c-.044-.051-.08-.108-.129-.156a2.26 2.26 0 0 0-3.197 0c-.039.039-.068.085-.105.127l-2.573-1.543a2.26 2.26 0 0 0-.415-2.603 2.264 2.264 0 0 0-3.196 0 2.263 2.263 0 0 0 0 3.196 2.25 2.25 0 0 0 1.597.661c.486 0 .967-.165 1.371-.475l2.746 1.647a2.3 2.3 0 0 0-.087.588c0 .603.235 1.171.662 1.598a2.25 2.25 0 0 0 1.599.661 2.25 2.25 0 0 0 1.598-.661c.427-.427.662-.995.662-1.598 0-.19-.031-.373-.076-.552l2.831-1.564a2.255 2.255 0 0 0 2.807-.308 2.26 2.26 0 0 0-3.197-3.196m5.434-1.665a1.26 1.26 0 0 1-1.261-1.26c0-.695.566-1.261 1.261-1.261.694 0 1.26.566 1.26 1.261s-.566 1.26-1.26 1.26m-.968-9.81c0-.696.566-1.261 1.26-1.261s1.261.565 1.261 1.261c0 .694-.566 1.26-1.261 1.26-.694 0-1.26-.566-1.26-1.26m-5.897-3.249a1.263 1.263 0 0 1-1.261-1.261c0-.695.566-1.26 1.261-1.26.694 0 1.26.565 1.26 1.26s-.566 1.261-1.26 1.261m7.806 9.75V16a2.26 2.26 0 0 0 1.612-2.154 2.264 2.264 0 0 0-2.261-2.261c-.582 0-1.107.227-1.508.589l-3.509-2.149c.072-.218.12-.447.12-.689a2.263 2.263 0 0 0-2.26-2.26 2.264 2.264 0 0 0-2.261 2.26 2.264 2.264 0 0 0 2.261 2.261c.644 0 1.223-.275 1.636-.709l3.431 2.102a2.3 2.3 0 0 0-.17.856c0 1.125.83 2.054 1.909 2.224v4.071a2.26 2.26 0 0 0-2.202 2.255 2.264 2.264 0 0 0 2.261 2.26 2.263 2.263 0 0 0 2.26-2.26c0-.91-.543-1.691-1.319-2.049m-21.06 3.309c-.694 0-1.26-.565-1.26-1.26s.566-1.261 1.26-1.261 1.261.566 1.261 1.261-.566 1.26-1.261 1.26M8 13.846c0-.696.566-1.261 1.261-1.261.694 0 1.26.565 1.26 1.261 0 .694-.566 1.26-1.26 1.26A1.263 1.263 0 0 1 8 13.846M16.397 8c.695 0 1.26.566 1.26 1.261 0 .694-.565 1.26-1.26 1.26s-1.26-.566-1.26-1.26S15.702 8 16.397 8m-4.583 14.396a2.26 2.26 0 0 0-2.201-2.255V16.07a2.26 2.26 0 0 0 1.908-2.224c0-.303-.063-.592-.17-.856l3.455-2.126c.409.405.971.657 1.591.657a2.263 2.263 0 0 0 2.26-2.26A2.263 2.263 0 0 0 16.397 7a2.263 2.263 0 0 0-2.26 2.261c0 .266.055.518.14.755l-3.508 2.158a2.24 2.24 0 0 0-1.508-.589A2.264 2.264 0 0 0 7 13.846c0 1.019.684 1.873 1.613 2.154v4.347a2.26 2.26 0 0 0-1.32 2.049 2.263 2.263 0 0 0 2.26 2.26 2.264 2.264 0 0 0 2.261-2.26"
      />
    </g>
  </svg>
);
export default AwsMigrationHub;
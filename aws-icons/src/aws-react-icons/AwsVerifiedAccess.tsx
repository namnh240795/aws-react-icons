import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsVerifiedAccess: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m16.173 31.531-.346.938c-3.318-1.226-5.976-3.882-7.294-7.289l.934-.36c1.213 3.139 3.658 5.585 6.706 6.711M9.467 16.18l-.934-.36c1.318-3.406 3.976-6.063 7.294-7.289l.346.938c-3.048 1.127-5.493 3.573-6.706 6.711m22.066 8.64.934.36c-1.317 3.407-3.976 6.063-7.294 7.289l-.346-.938c3.048-1.126 5.493-3.572 6.706-6.711M20.5 33c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m0-4a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-1.378-1.121-2.5-2.5-2.5m-12-7c-.827 0-1.5-.673-1.5-1.5S7.673 19 8.5 19s1.5.673 1.5 1.5S9.327 22 8.5 22m2.5-1.5c0-1.378-1.121-2.5-2.5-2.5A2.503 2.503 0 0 0 6 20.5C6 21.879 7.121 23 8.5 23s2.5-1.121 2.5-2.5M24.827 9.469l.346-.938c3.318 1.226 5.977 3.883 7.294 7.289l-.934.36c-1.213-3.138-3.658-5.584-6.706-6.711M20.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S19 9.327 19 8.5 19.673 7 20.5 7m0 4c1.379 0 2.5-1.121 2.5-2.5C23 7.122 21.879 6 20.5 6A2.503 2.503 0 0 0 18 8.5c0 1.379 1.121 2.5 2.5 2.5m11 11c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5m0-4a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-1.378-1.121-2.5-2.5-2.5m-12.288 5.666-2.114-1.989.685-.729 1.474 1.387 3.426-2.816.635.772zM17 15.269c0-.699.747-1.269 1.666-1.269h2.668c.919 0 1.666.57 1.666 1.269V17h-6zm8 2.786v6.891c0 .03-.024.054-.055.054L15 24.946 15.055 18zM16 17h-.945c-.582 0-1.055.473-1.055 1.055v6.891c0 .581.473 1.054 1.055 1.054h9.89c.582 0 1.055-.473 1.055-1.054v-6.891c0-.582-.473-1.055-1.055-1.055H24v-1.731C24 14.018 22.804 13 21.334 13h-2.668C17.196 13 16 14.018 16 15.269z"
      />
    </g>
  </svg>
);
export default AwsVerifiedAccess;

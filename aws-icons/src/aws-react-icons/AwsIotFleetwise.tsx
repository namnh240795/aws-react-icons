import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotFleetwise: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M20.99 31.032v-3.265c0-.98.666-1.777 1.484-1.777h3.318a6.81 6.81 0 0 1-4.802 5.042m-3.014.144v-3.409c0-1.53-1.374-2.777-3.062-2.777h-2.519c-.012-.166-.025-.33-.025-.5s.013-.334.025-.5h2.171c1.1 0 2.112-.468 2.709-1.25a2.5 2.5 0 0 1 2-.99c.791 0 1.52.361 2 .991.598.782 1.611 1.25 2.709 1.25h1.955c.012.165.026.33.026.5 0 .168-.014.333-.026.5h-3.465c-1.37 0-2.484 1.245-2.484 2.776v3.466c-.27.032-.543.054-.822.054-.407 0-.804-.042-1.192-.11m-5.434-5.187h2.372c1.138 0 2.062.797 2.062 1.777v3.151a6.82 6.82 0 0 1-4.434-4.928m6.626-8.297c3.232 0 5.939 2.27 6.624 5.297h-1.808c-.789 0-1.505-.32-1.914-.856a3.49 3.49 0 0 0-2.795-1.384 3.49 3.49 0 0 0-2.795 1.384c-.409.535-1.125.855-1.914.856h-2.024c.686-3.028 3.394-5.297 6.626-5.297m0-1c-4.3 0-7.798 3.498-7.798 7.797 0 4.3 3.498 7.797 7.798 7.797s7.797-3.498 7.797-7.797-3.498-7.797-7.797-7.797m10.07 7.297h-.214c-.263-5.217-4.576-9.382-9.856-9.382-5.025 0-9.178 3.772-9.795 8.632-1.124-.806-1.912-2.199-2.049-3.689a6 6 0 0 1-.024-.558c0-1.425 1.021-3.427 2.94-3.48a.5.5 0 0 0 .484-.452l.052-.54a.5.5 0 0 0-.002-.107 7 7 0 0 1-.048-.82c0-2.463 1.666-5.112 3.792-6.03 3.673-1.588 6.274.5 7.223 1.47.774.792 1.378 1.804 1.794 3.008a.502.502 0 0 0 .878.13c.598-.828 1.572-1.19 2.48-.932 1.13.325 1.868 1.491 1.972 3.066a.5.5 0 0 0 .408.57c1.206.211 4.013 1.078 4.013 4.56 0 4.148-3.925 4.541-4.048 4.554m-10.07 9.382c-4.899 0-8.883-3.984-8.883-8.882s3.984-8.882 8.883-8.882c4.897 0 8.882 3.984 8.882 8.882s-3.985 8.882-8.882 8.882m10.67-19.4c-.215-1.9-1.198-3.27-2.668-3.692-1.047-.3-2.152-.039-2.986.673-.442-1.016-1.021-1.894-1.728-2.617-2.275-2.33-5.392-2.964-8.334-1.69-2.506 1.082-4.396 4.07-4.396 6.948q0 .45.049.884l-.007.074C7.614 14.87 6.3 17.023 6.3 18.993q0 .336.028.65c.185 2.013 1.32 3.821 2.963 4.73-.001.04-.006.078-.006.117 0 5.45 4.434 9.882 9.883 9.882 5.281 0 9.595-4.167 9.856-9.384l.253.001c.051-.005 5.009-.475 5.009-5.553 0-3.94-3.027-5.126-4.448-5.465"
      />
    </g>
  </svg>
);
export default AwsIotFleetwise;
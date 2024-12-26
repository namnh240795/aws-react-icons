import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsRobomakerSimulation: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#DD344C"
      fillRule="evenodd"
      d="M43.408 15.907a.333.333 0 1 0-.666.002.333.333 0 0 0 .666-.002m1.948 0a2.283 2.283 0 0 1-2.282 2.281 2.283 2.283 0 0 1-2.28-2.28 2.283 2.283 0 0 1 2.28-2.282 2.283 2.283 0 0 1 2.282 2.281m-19.45 7.418a.54.54 0 1 0 1.081 0 .54.54 0 0 0-1.08 0m.54-2.54c1.4 0 2.54 1.14 2.54 2.54s-1.14 2.54-2.54 2.54-2.54-1.14-2.54-2.54a2.544 2.544 0 0 1 2.54-2.54m16.641 2.47a.51.51 0 1 0-.001-1.023.51.51 0 0 0 .002 1.022m0 1c-.832 0-1.51-.679-1.51-1.51 0-.833.678-1.51 1.51-1.51.833 0 1.51.677 1.51 1.51 0 .831-.677 1.51-1.51 1.51m-16.64-5.419a.537.537 0 1 0-.002-1.073.537.537 0 0 0 .002 1.073m0 .75a1.288 1.288 0 0 1 0-2.573 1.288 1.288 0 0 1 0 2.573m12.677.81a.708.708 0 1 0-.707.707.71.71 0 0 0 .707-.708m2 0a2.71 2.71 0 0 1-2.708 2.706 2.71 2.71 0 0 1-2.706-2.707 2.71 2.71 0 0 1 2.706-2.707 2.71 2.71 0 0 1 2.708 2.707m-14.478 8.761a.19.19 0 0 0-.38 0c0 .21.38.21.38 0m1.95 0a2.14 2.14 0 0 1-2.14 2.14 2.14 2.14 0 0 1-2.139-2.14 2.14 2.14 0 0 1 2.14-2.139 2.14 2.14 0 0 1 2.139 2.14m3.44.543a.536.536 0 1 0 0-1.072.536.536 0 0 0 0 1.072m0 .75a1.29 1.29 0 0 1-1.287-1.286 1.288 1.288 0 0 1 2.572 0c0 .71-.576 1.286-1.285 1.286m9.926-.209a.708.708 0 1 0 1.415-.001.708.708 0 0 0-1.416.001m.706-2.707a2.71 2.71 0 0 1 2.708 2.707 2.71 2.71 0 0 1-2.707 2.707 2.71 2.71 0 0 1-2.707-2.707 2.71 2.71 0 0 1 2.706-2.707m-23.197-1.41c1.08-.034 1.24-1.118 1.3-1.526.081-.55.159-.907.54-1.18.45-.325.933-.524 1.433-.59l-.267-1.984a5.2 5.2 0 0 0-2.335.95c-1.024.738-1.235 1.767-1.331 2.39-1.8.297-4.027 1.698-4.027 4.803 0 1.608.477 2.883 1.417 3.788 1.285 1.237 3 1.304 3.334 1.304h13.237c.075 0 1.886-.01 3.337-.882 1.962-1.178 3.174-4.299 1.805-7.482-.767-1.784-2.205-2.22-3.257-2.538-.253-.078-.496-.152-.713-.237-.036-.454-.144-1.22-.87-2.31-1.808-2.712-4.506-2.287-4.617-2.268l.322 1.973c.066-.005 1.56-.2 2.63 1.404.5.751.527 1.143.549 1.457.022.334.068 1.028.836 1.418.425.216.86.35 1.284.477 1.021.31 1.618.528 1.999 1.413 1.02 2.376.009 4.375-.997 4.978-.97.581-2.297.596-2.308.596h-13.21c-.02 0-1.19.021-1.986-.755-.524-.514-.791-1.3-.791-2.336 0-2.747 2.576-2.86 2.686-2.864M4 12.135h7.356V8H4zm0 20.71h7.356v-5.368H4zM4 18.84h7.356v-4.704H4zm0 6.638h7.356V20.84H4zM45.99 6v2H13.357v33.203a1 1 0 0 1-1 1H3.002v-2h8.356v-5.358H4v4.047H2V7a1 1 0 0 1 1-1zM14.68 42.165h31.312v-2H14.68zM5.413 11.03h1.54v-2h-1.54zm9.267 0h31.312v-2H14.68z"
    />
  </svg>
);
export default AwsRobomakerSimulation;
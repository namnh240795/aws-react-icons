import * as React from "react";
import type { SVGProps } from "react";
const SvgElasticFabricAdapter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m9.819 15.295-.93-.368C10.65 10.484 15.116 7.5 20 7.5c4.883 0 9.349 2.984 11.11 7.427l-.93.368C28.569 11.231 24.477 8.5 20 8.5c-4.478 0-8.57 2.731-10.181 6.795m20.357 7.938.938.348C29.355 28.318 24.888 31.5 20 31.5s-9.356-3.182-11.115-7.919l.938-.348C11.437 27.58 15.527 30.5 20 30.5s8.562-2.92 10.176-7.267M33 20.776a.227.227 0 0 1-.224.224h-3.553a.226.226 0 0 1-.223-.224v-3.552c0-.121.102-.224.223-.224h3.553c.121 0 .224.103.224.224zM32.776 16h-3.553c-.675 0-1.223.549-1.223 1.224v3.552c0 .675.548 1.224 1.223 1.224h3.553c.675 0 1.224-.549 1.224-1.224v-3.552c0-.675-.549-1.224-1.224-1.224M7 20.776v-3.552c0-.121.102-.224.223-.224h3.553c.121 0 .224.103.224.224v3.552a.227.227 0 0 1-.224.224H7.223A.226.226 0 0 1 7 20.776m5 0v-3.552c0-.675-.549-1.224-1.224-1.224H7.223C6.548 16 6 16.549 6 17.224v3.552C6 21.451 6.548 22 7.223 22h3.553c.675 0 1.224-.549 1.224-1.224M21 19h2v-1h-2zm-4 0h3v-1h-3zm-1 1h8v-3h-8zm3 2v1h-4v-1h-1v-7h12v7h-2v1h-2v-1zm6 2v-1h2v-9H13v9h1v1h6v-1h1v1z"
      />
    </g>
  </svg>
);
export default SvgElasticFabricAdapter;

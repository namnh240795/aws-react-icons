import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const DevopsGuruInsights: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#01A88D"
      fillRule="evenodd"
      d="M25.439 46.165c.343-.168.561-.517.561-.898V38h16.067A3.934 3.934 0 0 0 46 34.074v-7.229h-2v7.229A1.93 1.93 0 0 1 42.067 36H25a1 1 0 0 0-1 1v6.223l-9.02-7.012a1 1 0 0 0-.614-.211H5.973C4.885 36 4 35.158 4 34.123V13.878C4 12.843 4.885 12 5.973 12h10.612v-2H5.973C3.782 10 2 11.74 2 13.878v20.245C2 36.261 3.782 38 5.973 38h8.05l10.363 8.056a1 1 0 0 0 1.053.109M6 17h7v-2H6zm0 8h11v-2H6zm0 4h11v-2H6zm0 4h17v-2H6zm23.943-5.177a1 1 0 0 0-.778-1.032 10.5 10.5 0 0 1-3.289-1.365 1 1 0 0 0-1.28.18l-.787.882-2.297-2.297.882-.786a1 1 0 0 0 .18-1.28 10.5 10.5 0 0 1-1.361-3.289 1 1 0 0 0-1.032-.779L19 18.125v-3.249l1.185.068a.99.99 0 0 0 1.032-.778 10.5 10.5 0 0 1 1.363-3.282 1 1 0 0 0-.179-1.281l-.889-.793 2.297-2.297.793.888a1 1 0 0 0 1.279.18 10.5 10.5 0 0 1 3.284-1.359 1 1 0 0 0 .778-1.033L29.875 4h3.249l-.068 1.191a1 1 0 0 0 .778 1.032c1.164.263 2.268.721 3.281 1.36a1 1 0 0 0 1.28-.18l.794-.89 2.298 2.297-.886.791a1 1 0 0 0-.18 1.28 10.5 10.5 0 0 1 1.362 3.285.99.99 0 0 0 1.032.778L44 14.876v3.249l-1.183-.068a.996.996 0 0 0-1.033.779 10.4 10.4 0 0 1-1.361 3.287 1 1 0 0 0 .181 1.279l.883.789-2.297 2.297-.785-.88a.996.996 0 0 0-1.28-.179 10.5 10.5 0 0 1-3.29 1.362 1 1 0 0 0-.779 1.033L33.124 29h-3.248zm4.967 2.864a1 1 0 0 0 .271-.744l-.081-1.417a12.4 12.4 0 0 0 2.357-.976l.945 1.059a1 1 0 0 0 .718.334c.266.01.541-.098.736-.292l3.794-3.795c.195-.194.3-.46.292-.735a1 1 0 0 0-.334-.718l-1.063-.949c.405-.75.731-1.538.975-2.353l1.422.081c.27.008.544-.082.744-.271s.314-.453.314-.727v-5.367a1 1 0 0 0-1.058-.998l-1.424.081a12.6 12.6 0 0 0-.975-2.351l1.065-.951a.999.999 0 0 0 .042-1.454l-3.794-3.793a.97.97 0 0 0-.736-.293 1 1 0 0 0-.718.334l-.955 1.07a12.5 12.5 0 0 0-2.347-.974l.081-1.431A1 1 0 0 0 34.183 2h-5.367a1.003 1.003 0 0 0-.998 1.057l.081 1.43c-.814.243-1.6.569-2.349.972l-.953-1.067a1 1 0 0 0-.718-.334.95.95 0 0 0-.735.293l-3.795 3.793a1.003 1.003 0 0 0 .041 1.454l1.069.953a12.4 12.4 0 0 0-.976 2.349l-1.426-.081a1 1 0 0 0-1.057.998v5.367a1 1 0 0 0 1.057.998l1.421-.081q.365 1.227.974 2.356l-1.061.946a1 1 0 0 0-.334.718 1 1 0 0 0 .292.735l3.795 3.795a1 1 0 0 0 .735.292 1 1 0 0 0 .718-.334l.947-1.061c.751.406 1.539.733 2.355.977l-.081 1.418A1 1 0 0 0 28.816 31h5.367a1 1 0 0 0 .727-.313m-4.065-10.939 5.081-5.081-1.414-1.414-4.374 4.374-1.651-1.651-1.414 1.414 2.358 2.358a1 1 0 0 0 1.414 0m10.469-4.108-1.116.596c-.127-4.203-3.287-7.823-7.588-8.377a8.695 8.695 0 0 0-8.952 4.84l1.8.872a6.7 6.7 0 0 1 6.898-3.728c3.083.396 5.405 2.841 5.792 5.788l-.441-.436-1.405 1.424 2.607 2.572 3.347-1.787zm-1.973 4.661a8.7 8.7 0 0 1-8.952 4.841c-4.301-.554-7.461-4.174-7.588-8.377l-1.116.596-.942-1.764 3.347-1.787 2.607 2.572-1.404 1.424-.442-.436c.387 2.947 2.709 5.392 5.793 5.788a6.7 6.7 0 0 0 6.898-3.729z"
    />
  </svg>
);
export default DevopsGuruInsights;
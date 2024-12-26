import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonLex: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#01A88D" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23.744 23.452a.77.77 0 0 0 .229.55.79.79 0 0 0 1.099.002v-.001a.778.778 0 0 0-.55-1.333.778.778 0 0 0-.778.782m-.479 1.262a1.78 1.78 0 0 1-.521-1.262c0-.477.186-.926.521-1.263a1.78 1.78 0 0 1 3.036 1.263c0 .476-.186.924-.522 1.262a1.76 1.76 0 0 1-1.257.523c-.474 0-.921-.186-1.257-.523m-2.191-1.46.232 1.475 1.022-.043a.46.46 0 0 1 .374.147l.441.444c.099.1.152.236.147.375l-.042 1.027 1.469.235.273-.98a.5.5 0 0 1 .258-.314l.573-.287a.5.5 0 0 1 .398-.021l.946.351.676-1.331-.847-.564a.5.5 0 0 1-.216-.337l-.101-.626a.5.5 0 0 1 .1-.392l.634-.806-1.052-1.055-.8.636a.5.5 0 0 1-.39.102l-.622-.102a.5.5 0 0 1-.336-.217l-.565-.85-1.325.676.351.948a.5.5 0 0 1-.023.4l-.288.576a.5.5 0 0 1-.311.258zm-.686 2.074-.372-2.357a.504.504 0 0 1 .36-.563l1.191-.336.091-.182-.43-1.162a.503.503 0 0 1 .243-.623l2.118-1.083a.5.5 0 0 1 .642.17l.691 1.04.189.031.977-.776a.5.5 0 0 1 .664.04l1.68 1.687c.18.18.197.466.04.665l-.773.983.03.191 1.036.692c.211.14.284.418.168.645l-1.08 2.127a.496.496 0 0 1-.619.242l-1.16-.431-.181.091-.334 1.196a.5.5 0 0 1-.559.36l-2.348-.374a.5.5 0 0 1-.422-.516l.051-1.254-.131-.132-1.248.052a.487.487 0 0 1-.514-.423M33 18.065l-16.985-.022-.015.015v11.014l8 .015c.262 0 .49.096.697.295L28 32.69v-2.585c0-.562.456-1.02 1.015-1.02h3.963zm1 0v11c0 .613-.41 1.026-1.022 1.026h-3.963L29 33.189c0 .327-.19.62-.484.747a.772.772 0 0 1-.841-.153l-3.676-3.682-7.984-.01A1.02 1.02 0 0 1 15 29.07V18.059c0-.562.456-1.019 1.015-1.019h16.963c.612.002 1.022.414 1.022 1.026m-16-3.033h2v-1.004h-2zm-9 0h8v-1.004H9zm7-2.008h5V12.02h-5zm-7 0h5V12.02H9zm10-2.008h2v-1.004h-2zm-10 0h9v-1.004H9zm3.744 7.535.725.692-3.103 3.27a.92.92 0 0 1-.61.252A.753.753 0 0 1 9 22v-2.954H7c-.589 0-1-.412-1-1.004V8.003C6 7.414 6.411 7 7 7h15.984C23.544 7 24 7.457 24 8.019v7.013h-1V8.019L7 8.004v10.04h2c.589 0 1 .412 1 1.003v2.399z"
      />
    </g>
  </svg>
);
export default AmazonLex;
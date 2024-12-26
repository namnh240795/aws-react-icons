import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonElasticContainerService: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m32 24.25-4-2.357v-6.068a.49.49 0 0 0-.287-.444L22 12.736V8.285l10 4.897zm.722-11.811-11-5.387a.5.5 0 0 0-.485.022.49.49 0 0 0-.237.417v5.557c0 .19.111.363.287.444L27 16.136v6.035c0 .172.091.332.243.42l5 2.947a.5.5 0 0 0 .757-.42v-12.24a.49.49 0 0 0-.278-.44M19.995 32.952 9 27.317V13.169l9-4.849v4.442l-4.746 2.636a.49.49 0 0 0-.254.427v8.842a.49.49 0 0 0 .258.43l6.5 3.515a.51.51 0 0 0 .482.001l6.25-3.371 3.546 2.33zm6.799-8.693a.51.51 0 0 0-.519-.022L20 27.622l-6-3.245v-8.265l4.746-2.637a.49.49 0 0 0 .254-.427V7.49a.49.49 0 0 0-.245-.422.51.51 0 0 0-.496-.01l-10 5.388a.49.49 0 0 0-.259.43v14.737c0 .184.103.35.268.436l11.5 5.895a.52.52 0 0 0 .471-.005l11-5.895a.486.486 0 0 0 .039-.839z"
      />
    </g>
  </svg>
);
export default AmazonElasticContainerService;

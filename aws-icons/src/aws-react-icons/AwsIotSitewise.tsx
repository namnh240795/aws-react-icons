import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotSitewise: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="m28.434 25.462-2.98-1.585.966-.516a2.47 2.47 0 0 0 2.01 1.048c.826 0 1.553-.413 2.007-1.044l.993.548zm1.492-3.588c0 .84-.67 1.521-1.495 1.521s-1.496-.681-1.496-1.52c0-.84.671-1.522 1.496-1.522.824 0 1.495.683 1.495 1.521m-9.459-4.554c-1.981 0-3.592-1.639-3.592-3.653s1.611-3.653 3.592-3.653c1.98 0 3.591 1.639 3.591 3.653s-1.61 3.653-3.59 3.653m1.548 8.494c0 .868-.695 1.572-1.548 1.572s-1.546-.704-1.546-1.572c0-.867.693-1.573 1.546-1.573s1.548.706 1.548 1.573m-1.549 4.096-2.478-1.435 1.007-.56a2.5 2.5 0 0 0 1.472.485c.55 0 1.054-.181 1.47-.483l.992.556zm-6.012-6.016-2.971 1.567-2.92-1.562.934-.507a2.47 2.47 0 0 0 1.984 1.017c.825 0 1.554-.414 2.008-1.045zm-2.973-3.54c.824 0 1.495.682 1.495 1.52 0 .84-.67 1.521-1.495 1.521s-1.496-.681-1.496-1.52c0-.84.671-1.522 1.496-1.522m21.258 3.127-1.884-1.039c.041-.183.068-.371.068-.568 0-1.397-1.118-2.535-2.492-2.535-.264 0-.512.054-.75.13l-3.486-3.102c.537-.763.86-1.692.86-2.7 0-2.573-2.057-4.667-4.588-4.667-2.53 0-4.59 2.094-4.59 4.667 0 .86.247 1.656.648 2.35l-4.276 3.458a2.5 2.5 0 0 0-.768-.136c-1.375 0-2.493 1.138-2.493 2.535 0 .21.032.409.079.603l-1.803.978a.51.51 0 0 0-.264.45c.001.187.103.36.267.446l3.982 2.13a.49.49 0 0 0 .462 0l4.04-2.129a.51.51 0 0 0 .007-.896l-1.852-1.015c.041-.182.067-.371.067-.567 0-.73-.31-1.387-.8-1.85l3.943-3.191a4.53 4.53 0 0 0 2.853 1.449v4.997a2.58 2.58 0 0 0-2.045 2.535c0 .49.142.943.376 1.334l-1.574.872a.51.51 0 0 0-.008.886l3.503 2.028a.5.5 0 0 0 .494 0l3.477-2.029a.51.51 0 0 0-.007-.883l-1.55-.872a2.58 2.58 0 0 0-1.67-3.872v-4.996a4.5 4.5 0 0 0 2.561-1.162l3.24 2.883a2.54 2.54 0 0 0-.828 1.871c0 .195.026.382.066.563l-1.856.992a.51.51 0 0 0-.266.449c0 .19.103.362.267.45L28.2 26.48a.49.49 0 0 0 .457.003l4.07-2.104a.51.51 0 0 0 .012-.899"
      />
    </g>
  </svg>
);
export default AwsIotSitewise;

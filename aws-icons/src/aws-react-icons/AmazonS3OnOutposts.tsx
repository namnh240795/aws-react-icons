import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonS3OnOutposts: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7AA116" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M32.831 25.8c-.115-.118-.339-.301-.735-.551l-.059.432c.394.092.643.117.794.119m-.887-6.984c-.047-.591-2.817-1.947-7.163-1.947-4.384 0-7.164 1.38-7.164 1.962l.017.091c.166.619 3.042 1.604 7.147 1.604s6.982-.985 7.159-1.663zm-.186 1.449c-1.535.837-4.32 1.261-6.977 1.261s-5.442-.424-6.973-1.24l.728 5.413c.501.172.973.461 1.385.867q.383.38.656.877a1.68 1.68 0 0 1 1.278-.133c.681.201 1.151.78 1.301 1.576.301.092.605.229.87.398.833.527 1.255 1.213 1.255 2.039 0 .674-.183 1.231-.525 1.677h.025c1.276 0 2.551-.133 3.591-.373.4-.092.756-.199 1.056-.317.587-.233.763-.439.779-.493l.725-5.398c-2.47-.693-4.259-1.242-5.335-1.638A.98.98 0 0 1 25 25a1.001 1.001 0 0 1 0-2c.5 0 .896.374.971.853 1.02.374 2.751.905 5.095 1.566zm-7.477 11.058c0-.323-.09-.751-.79-1.194a2.5 2.5 0 0 0-.878-.346.5.5 0 0 1-.409-.575c-.039-.448-.274-.833-.632-.939a.72.72 0 0 0-.78.28.501.501 0 0 1-.871-.131 3 3 0 0 0-.703-1.14c-.273-.27-.898-.768-1.783-.768-.311 0-.654.061-1.025.216-.803.335-1.456 1.338-1.456 2.236q0 .155.019.305a.5.5 0 0 1-.374.546c-.564.141-1.236.527-1.236 1.559 0 .845.472 1.303.866 1.539a.66.66 0 0 0 .343.089l8.073.008c.274-.001 1.636-.088 1.636-1.685m-10.327-2.352v-.009c0-1.308.891-2.666 2.071-3.159.491-.204.99-.294 1.479-.284l-.86-6.389.016-.002-.005-.013-.033-.216c-.002-.874.955-1.599 2.378-2.122V7.781A.78.78 0 0 0 18.219 7H7.781C7.351 7 7 7.35 7 7.781v22.437c0 .431.351.782.781.782h4.633c.119-.94.654-1.674 1.54-2.029M22.644 34h-.003l-8.07-.009a1.66 1.66 0 0 1-.853-.221A2.72 2.72 0 0 1 12.435 32H10v2H9v-2H7.781C6.799 32 6 31.2 6 30.218V7.781C6 6.799 6.799 6 7.781 6h10.438C19.201 6 20 6.799 20 7.781v8.681c1.421-.38 3.124-.593 4.781-.593 3.943 0 8.164 1.19 8.164 2.962a1 1 0 0 1-.005.068l-.021.157c-.006.024-.021.047-.028.07l.028.004-.679 5.04c1.092.628 1.611 1.119 1.702 1.612a.8.8 0 0 1-.177.677c-.191.227-.485.341-.918.341-.256 0-.581-.055-.943-.133l-.703 5.226c.005.501-.47.976-1.406 1.346a8.5 8.5 0 0 1-1.198.363c-1.112.256-2.466.389-3.816.389zM10 15h7v-1h-7zm0 3h5v-1h-5zm0-6h7v-1h-7z"
      />
    </g>
  </svg>
);
export default AmazonS3OnOutposts;

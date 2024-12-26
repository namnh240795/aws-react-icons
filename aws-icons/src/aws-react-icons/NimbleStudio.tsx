import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const NimbleStudio: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#ED7100" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23.905 30.457c-.768-.409-2.05-1.093-3.247-2.452-1.104-1.255-1.635-2.5-2.024-3.408a15.6 15.6 0 0 1-.979-3.229.5.5 0 0 0-.934-.14 19 19 0 0 0-.78 1.692c-.517 1.286-2.1 5.574-1.79 9.048h-2.086c-.568-2.113-1.197-3.827-3.655-7.652a45 45 0 0 1-.57-.917c-.24-.394-.472-.772-.685-1.083l2.871-3.818q.25.459.47.935c.388.856.564 1.481.993 2.991l.218.763c.15.529.391 1.371.703 2.422a.49.49 0 0 0 .54.355.5.5 0 0 0 .438-.474c.17-3.763.958-7.249 2.348-10.361 1.005-2.253 2.305-4.214 3.658-5.523a15 15 0 0 1 1.667-1.391l2.857 4.641a10 10 0 0 0-1.455 1.378 10.3 10.3 0 0 0-1.568 2.483c-.355.793-.95 2.448-.943 4.621.003.59.01 1.973.591 3.621.277.784 1.135 2.792 3.124 4.513 1.945 1.684 3.988 2.254 5.038 2.487-2.346-.193-4.06-1.107-4.8-1.502M20.025 33a12.9 12.9 0 0 1-4.853-.954c-.374-3.363 1.337-7.86 1.696-8.754l.135-.326c.193.689.431 1.366.712 2.023.391.917.983 2.302 2.193 3.677 1.315 1.495 2.7 2.232 3.526 2.674.322.171.822.434 1.464.7-1.543.627-3.174.96-4.873.96m-13-13c0-7.168 5.832-13 13-13 .338 0 .67.026 1 .051-.03.012-.063.018-.092.037A16 16 0 0 0 18.7 8.887c-1.443 1.395-2.82 3.467-3.877 5.835-1.1 2.466-1.838 5.155-2.202 8.022l-.169-.593c-.43-1.516-.626-2.207-1.046-3.132a15 15 0 0 0-.902-1.687.5.5 0 0 0-.825-.036l-2.669 3.55.005-.213c.006-.241.011-.462.011-.633m26 0c0 4.203-2.044 8.146-5.466 10.586a10.1 10.1 0 0 1-3.238-1.87c-1.807-1.564-2.585-3.381-2.835-4.09-.525-1.489-.53-2.707-.534-3.293-.008-1.984.533-3.487.855-4.207a9.4 9.4 0 0 1 1.413-2.24 9 9 0 0 1 1.651-1.491.5.5 0 0 0 .14-.671l-3.375-5.482a.5.5 0 0 0-.156-.155c6.485.726 11.545 6.237 11.545 12.913m-.22 11.266c-.693.04-1.979.113-3.542-.21a20 20 0 0 1-.537-.12c3.323-2.649 5.3-6.661 5.3-10.936 0-7.719-6.28-14-14-14s-14 6.281-14 14c0 .165-.006.377-.012.609-.014.622-.032 1.327.024 1.765l.015-.002c.012.086.03.173.086.246.238.304.534.789.847 1.303.187.305.382.624.582.936 2.573 4.002 3.056 5.548 3.63 7.738a.5.5 0 0 0 .482.373h3.037c.015 0 .03-.008.043-.01A13.9 13.9 0 0 0 20.025 34c2.17 0 4.32-.518 6.247-1.48.731.21 1.562.381 2.49.447q.42.03.833.029c1.96 0 3.788-.456 4.144-.827a.59.59 0 0 0 .154-.433c-.054-.529-.558-.499-1.089-.47"
      />
    </g>
  </svg>
);
export default NimbleStudio;
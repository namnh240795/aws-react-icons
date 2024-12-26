import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsBackintAgent: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#E7157B" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M11.176 28.487h4.588v1h-4.588c-2.678 0-4.785-1.648-5.124-4.007a5.036 5.036 0 0 1 4.539-5.761 6 6 0 0 1-.057-.828 6.38 6.38 0 0 1 3.592-5.718l.434.9a5.38 5.38 0 0 0-3.026 4.818c0 .39.048.796.142 1.204a.5.5 0 0 1-.1.429.52.52 0 0 1-.4.183l-.13-.467-.012.003v.456c-1.17 0-2.283.509-3.05 1.395a4 4 0 0 0-.942 3.243c.267 1.855 1.966 3.15 4.134 3.15m23.695-4.43a5.67 5.67 0 0 1-3.205 5.129l-.439-.898a4.68 4.68 0 0 0 2.644-4.231 4.71 4.71 0 0 0-5.674-4.605.5.5 0 0 1-.56-.288c-.21-.48-.619-.84-1.12-.988a.5.5 0 0 1-.359-.445 3.666 3.666 0 0 0-3.646-3.406c-.608 0-1.21.153-1.742.44a.5.5 0 0 1-.552-.05 5.3 5.3 0 0 0-2.852-1.157l.09-.996a6.3 6.3 0 0 1 3.132 1.179 4.7 4.7 0 0 1 1.924-.416 4.67 4.67 0 0 1 4.61 4.009 2.76 2.76 0 0 1 1.244 1.074 5.7 5.7 0 0 1 2.395.174c.99-1.74 1.285-3.688.85-5.585a7.67 7.67 0 0 0-3.429-4.816 7.67 7.67 0 0 0-5.829-.982 7.67 7.67 0 0 0-4.816 3.427 7.75 7.75 0 0 0-.348 7.564l1.365-2.244.853.52-2.283 3.752-3.752-2.283.52-.855 2.346 1.428c-1.29-2.688-1.136-5.876.452-8.413a8.67 8.67 0 0 1 5.44-3.871 8.67 8.67 0 0 1 6.583 1.109 8.67 8.67 0 0 1 3.872 5.44 8.65 8.65 0 0 1-.883 6.18 5.71 5.71 0 0 1 3.17 5.104m-6.273 6.479-.64-.232a.775.775 0 0 0-.88.262q-.24.317-.539.59a.77.77 0 0 0-.18.896l.287.618-1.454.679-.288-.616a.78.78 0 0 0-.805-.436q-.396.054-.799.035a.77.77 0 0 0-.764.505l-.233.64-1.51-.548.236-.648a.77.77 0 0 0-.258-.876 4.4 4.4 0 0 1-.585-.537.77.77 0 0 0-.898-.183l-.628.293-.679-1.455.64-.3a.77.77 0 0 0 .435-.8 4.5 4.5 0 0 1-.033-.781.77.77 0 0 0-.504-.765l-.667-.242.548-1.51.674.245a.77.77 0 0 0 .876-.26q.234-.305.523-.57a.77.77 0 0 0 .182-.896l-.304-.651 1.456-.68.304.65a.77.77 0 0 0 .803.437c.258-.035.52-.045.777-.036a.79.79 0 0 0 .758-.505l.246-.675 1.51.549-.243.665a.77.77 0 0 0 .262.878q.317.242.581.528c.23.249.59.319.892.179l.64-.3.68 1.456-.629.294a.77.77 0 0 0-.435.806q.055.394.037.793a.77.77 0 0 0 .506.759l.65.236zm1.106-2.371-.71-.257a5 5 0 0 0-.03-.641l.686-.32a.773.773 0 0 0 .371-1.023l-.876-1.873a.76.76 0 0 0-.434-.397.76.76 0 0 0-.588.025l-.698.327a6 6 0 0 0-.466-.424l.264-.725a.767.767 0 0 0-.46-.986l-1.944-.705a.767.767 0 0 0-.986.46l-.266.735a5 5 0 0 0-.62.028l-.312-.666a.82.82 0 0 0-1.086-.394l-1.832.856a.77.77 0 0 0-.37 1.022l.332.709q-.225.218-.42.458l-.734-.267a.766.766 0 0 0-.986.46l-.706 1.944a.76.76 0 0 0 .026.587.77.77 0 0 0 .434.399l.726.263q-.004.314.026.629l-.699.327a.76.76 0 0 0-.397.436.76.76 0 0 0 .028.585l.876 1.876a.77.77 0 0 0 1.021.369l.686-.32q.223.231.471.434l-.256.709a.76.76 0 0 0 .026.589.76.76 0 0 0 .434.397l1.944.705a.75.75 0 0 0 .59-.026.76.76 0 0 0 .394-.433l.255-.701c.226.002.437-.006.651-.028l.314.673a.764.764 0 0 0 1.022.372l1.875-.876a.76.76 0 0 0 .397-.435.76.76 0 0 0-.027-.586l-.315-.675q.235-.229.438-.48l.7.254a.77.77 0 0 0 .985-.46l.706-1.944a.766.766 0 0 0-.46-.986m-4.476.308c-.257.707-1.03 1.433-2.372 1.17-1.199-.66-1.326-1.713-1.07-2.42.258-.71 1.043-1.443 2.345-1.184 1.223.658 1.355 1.723 1.097 2.434m-.615-3.31-.224-.083c-1.86-.384-3.118.63-3.543 1.803-.426 1.17-.107 2.756 1.561 3.655v-.001l.217.08c.272.056.531.08.776.08 1.432 0 2.405-.882 2.767-1.882.426-1.172.108-2.757-1.554-3.652"
      />
    </g>
  </svg>
);
export default AwsBackintAgent;
import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonRdsMultiAz: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#C925D1"
      fillRule="evenodd"
      d="M38.19 30.446c-4.084 0-6.189-1.156-6.189-1.649V26.21c1.695.698 3.976.983 5.961.983 2.558 0 4.634-.404 6.039-1.11v2.714c0 .576-1.997 1.649-5.811 1.649m0-14.199c3.869 0 5.811 1.133 5.811 1.768s-1.942 1.768-5.811 1.768c-4.084 0-6.189-1.239-6.189-1.768s2.105-1.768 6.189-1.768m-6.189 4.344c1.601.808 3.943 1.192 6.189 1.192 2.428 0 4.436-.412 5.811-1.121v2.811c-.006.619-2.022 1.72-6.039 1.72-2.846 0-5.021-.58-5.961-1.214zm-19.757 17.79c-5.355 0-8.243-1.439-8.243-2.794v-4.55c2.087 1.205 5.505 1.773 8.768 1.773 3.571 0 6.443-.614 8.232-1.669v4.446c0 1.171-3.043 2.794-8.757 2.794M12.77 9.7c5.316 0 8.255 1.537 8.255 2.6 0 .015-.007.031-.008.046h-.016v.099c-.249 1.052-3.152 2.454-8.231 2.454-5.353 0-8.769-1.54-8.769-2.599s3.416-2.6 8.769-2.6M4.001 20.017v-4.899c2.087 1.209 5.505 1.781 8.769 1.781 3.563 0 6.439-.627 8.231-1.689v4.949c-.226 1.017-2.914 2.453-8.232 2.453-5.345 0-8.758-1.535-8.768-2.595m8.768 4.595c3.575 0 6.444-.617 8.232-1.676v5.444c-.233 1.007-2.929 2.43-8.232 2.43-5.345 0-8.758-1.523-8.768-2.575v-5.404c2.087 1.21 5.505 1.781 8.768 1.781m33.233-1.142h-.001v-5.124h-.03c.016-.109.03-.218.03-.331 0-2.254-3.139-3.768-7.811-3.768-3.944 0-8.189 1.179-8.189 3.768 0 .114.018.223.034.331h-.034v3.695h-7v-1.704c.002-.017.008-.033.009-.05l-.009-.001v-7.728c.008-.086.024-.171.024-.258 0-2.751-4.121-4.6-10.255-4.6-5.186 0-10.769 1.44-10.769 4.6q.002.023.005.046h-.005v7.666H2l.001.009v8.209H2l.001.008v7.349c0 2.957 3.924 4.794 10.243 4.794 6.433 0 10.757-1.927 10.757-4.794v-7.021l.005-.028h-.005v-4.497h7v4.756c0 2.521 4.113 3.649 8.189 3.649 4.745 0 7.811-1.432 7.811-3.649v-5.316z"
    />
  </svg>
);
export default AmazonRdsMultiAz;

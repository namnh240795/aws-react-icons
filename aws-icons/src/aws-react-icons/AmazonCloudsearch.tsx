import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AmazonCloudsearch: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#8C4FFF" d="M0 0h40v40H0z" />
      <path
        fill="#FFF"
        d="M23.435 14.432v1.012c-.343 0-.667.126-.913.355a.49.49 0 0 1-.45.12.5.5 0 0 1-.35-.309c-.497-1.296-1.786-2.167-3.205-2.167-.98 0-1.913.41-2.561 1.126a3.28 3.28 0 0 0-.862 2.206c0 .22-.141.42-.35.487a2.4 2.4 0 0 0-1.636 1.811q-.039.214-.04.445c0 1.31 1.094 2.377 2.443 2.377h5.682v1.011H15.51c-1.896 0-3.44-1.52-3.44-3.388 0-.217.021-.424.06-.63a3.4 3.4 0 0 1 1.983-2.465 4.3 4.3 0 0 1 1.11-2.539 4.453 4.453 0 0 1 7.16.797 2.3 2.3 0 0 1 1.05-.249m10.02 18.996a1.876 1.876 0 0 1-2.678 0L24.62 27.18a11.8 11.8 0 0 0 2.625-2.8l6.21 6.334c.735.75.734 1.967-.002 2.715M6.996 17.794c0-5.946 4.763-10.783 10.618-10.783s10.619 4.837 10.619 10.783c0 5.947-4.763 10.784-10.619 10.784S6.996 23.74 6.996 17.794M34.16 30l-6.383-6.51c.922-1.69 1.45-3.63 1.45-5.695C29.229 11.291 24.019 6 17.615 6 11.211 6 6 11.291 6 17.794S11.211 29.59 17.614 29.59c2.271 0 4.385-.675 6.175-1.823l6.283 6.378a2.86 2.86 0 0 0 4.085-.001 2.973 2.973 0 0 0 .004-4.144m-16.547-4.186c-4.354 0-7.895-3.597-7.895-8.019 0-4.421 3.541-8.018 7.895-8.018s7.897 3.597 7.897 8.018-3.543 8.02-7.897 8.02m0-17.049c-4.903 0-8.89 4.05-8.89 9.03s3.987 9.03 8.89 9.03 8.893-4.051 8.893-9.03c0-4.98-3.99-9.03-8.893-9.03"
      />
    </g>
  </svg>
);
export default AmazonCloudsearch;
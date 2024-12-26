import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotTopic: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M11 39.954V14.329c2.77 1.666 8.001 2.319 12.998 2.319 4.809 0 10.17-.676 12.998-2.407v25.713c0 1.614-5.063 3.96-12.998 3.96S11 41.568 11 39.954M38.97 11.32c-.012-.151-.019-.305-.054-.444-.338-1.403-1.698-2.597-4.045-3.545l-.75 1.854c1.617.654 2.683 1.46 2.853 2.166q.003.024.005.049c-.166 1.296-4.381 3.077-11.919 3.233h-2.138c-7.691-.15-11.818-1.877-11.912-3.167.004-.04.005-.08.015-.123.167-.698 1.233-1.504 2.85-2.158l-.75-1.854c-2.347.948-3.707 2.142-4.042 3.536a2.7 2.7 0 0 0-.068.553H9c0 .02.007.038.008.057-.001.021-.008.041-.008.061v28.416c0 3.871 7.727 5.96 14.998 5.96s14.998-2.089 14.998-5.96V11.538c0-.038-.012-.074-.014-.113.002-.035.014-.069.014-.105zM23.998 9.001 18.656 4H29.34zm-6.874-3.694 6.19 5.794a1.005 1.005 0 0 0 1.368 0l6.19-5.794v7.229h2V3a1 1 0 0 0-1-1H16.124a1 1 0 0 0-1 1v9.536h2z"
    />
  </svg>
);
export default AwsIotTopic;

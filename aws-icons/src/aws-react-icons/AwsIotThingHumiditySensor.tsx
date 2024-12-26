import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotThingHumiditySensor: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M30.115 22a2.464 2.464 0 0 1-2.461-2.462c0-1.477 1.418-3.632 2.461-4.972 1.044 1.34 2.462 3.495 2.462 4.972A2.465 2.465 0 0 1 30.115 22m-.743-9.67c-.381.424-3.718 4.219-3.718 7.208A4.466 4.466 0 0 0 30.115 24a4.467 4.467 0 0 0 4.462-4.462c0-2.99-3.338-6.784-3.719-7.207-.379-.422-1.107-.421-1.486 0M16.423 23A1.424 1.424 0 0 1 15 21.576c0-.796.711-2.018 1.421-2.983.682.93 1.424 2.174 1.424 2.983 0 .785-.638 1.424-1.422 1.424m3.422-1.424c0-2.204-2.405-4.94-2.679-5.245-.379-.422-1.108-.422-1.487 0-.274.305-2.679 3.041-2.679 5.246a3.427 3.427 0 0 0 3.423 3.422 3.427 3.427 0 0 0 3.422-3.422M23.5 34c-1.93 0-3.5-1.57-3.5-3.5 0-2.115 2.107-5.205 3.5-6.947 1.392 1.742 3.5 4.832 3.5 6.948 0 1.93-1.571 3.5-3.5 3.5m-.743-12.669C22.562 21.548 18 26.66 18 30.5c0 3.032 2.468 5.5 5.5 5.5s5.5-2.468 5.5-5.5c0-3.84-4.563-8.953-4.757-9.17-.379-.421-1.107-.421-1.486 0M39 37.867c0 .624-.509 1.133-1.135 1.133h-27.73A1.136 1.136 0 0 1 9 37.866v-27.73c0-.626.509-1.136 1.135-1.136h27.73C38.491 9 39 9.51 39 10.135zm7-22.867v-2h-5v-2.865A3.14 3.14 0 0 0 37.865 7H35V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-3V2h-2v5h-2.865A3.14 3.14 0 0 0 7 10.134V13H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v3H2v2h5v2.866A3.14 3.14 0 0 0 10.135 41H13v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h3v5h2v-5h2.865A3.14 3.14 0 0 0 41 37.866V35h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3h5v-2h-5v-3z"
    />
  </svg>
);
export default AwsIotThingHumiditySensor;

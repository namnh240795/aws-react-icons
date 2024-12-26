import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsIotThingCamera: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#7AA116"
      fillRule="evenodd"
      d="M16.939 20.83c0 .277-.246.503-.55.503h-2.416c-.304 0-.55-.226-.55-.503v-.752c0-.277.246-.503.55-.503h2.416c.304 0 .55.226.55.503zm5.029 4.386a3.187 3.187 0 0 1 3.183-3.184 3.187 3.187 0 0 1 3.184 3.184 3.186 3.186 0 0 1-3.184 3.182 3.186 3.186 0 0 1-3.183-3.182m-2 0a5.19 5.19 0 0 0 5.183 5.182 5.19 5.19 0 0 0 5.184-5.182 5.19 5.19 0 0 0-5.184-5.184 5.19 5.19 0 0 0-5.183 5.184m-.797 0a5.987 5.987 0 0 1 5.98-5.98 5.986 5.986 0 0 1 5.979 5.98 5.986 5.986 0 0 1-5.979 5.979 5.986 5.986 0 0 1-5.98-5.979m-2 0c0 4.4 3.58 7.979 7.98 7.979s7.979-3.579 7.979-7.979-3.579-7.98-7.979-7.98-7.98 3.579-7.98 7.98m18.979 7.663c0 .35-.285.636-.636.636H12.405a.637.637 0 0 1-.636-.636V18.562c0-.349.285-.634.636-.634h.961c.019.001.037.011.057.011h3.516c.021 0 .038-.01.059-.011h3.493a1 1 0 0 0 .978-.796l.455-2.178c.041-.196.178-.429.274-.53h6.037c.096.101.232.334.273.531l.456 2.178a1 1 0 0 0 .979.795h5.571c.351 0 .636.285.636.634zM14.423 15.385a1 1 0 0 1 .006-.082h1.504a1 1 0 0 1 .006.082v.543h-1.516zm16.332.543-.29-1.382c-.171-.821-.893-2.122-2.104-2.122h-6.289c-1.211 0-1.934 1.301-2.105 2.122l-.289 1.382h-1.739v-.543c0-1.168-.763-2.082-1.737-2.082h-2.041c-.975 0-1.738.914-1.738 2.082v.543h-.018a2.64 2.64 0 0 0-2.636 2.634v14.317a2.64 2.64 0 0 0 2.636 2.636h23.109a2.64 2.64 0 0 0 2.636-2.636V18.562a2.64 2.64 0 0 0-2.636-2.634zm8.909 22.602c0 .626-.509 1.135-1.135 1.135H9.409a1.136 1.136 0 0 1-1.135-1.135V9.423c0-.626.509-1.135 1.135-1.135h29.12c.626 0 1.135.509 1.135 1.135zm6.273-24.106v-2h-4.273V9.423a3.14 3.14 0 0 0-3.135-3.135h-3.016V2h-2v4.288h-3.272V2h-2v4.288h-3.273V2h-2v4.288h-3.272V2h-2v4.288h-3.273V2h-2v4.288H9.409a3.14 3.14 0 0 0-3.135 3.135v3.001H2v2h4.274v3.272H2v2h4.274v3.273H2v2h4.274v3.272H2v2h4.274v3.274H2v2h4.274v3.015a3.14 3.14 0 0 0 3.135 3.135h3.014v4.272h2v-4.272h3.273v4.272h2v-4.272h3.272v4.272h2v-4.272h3.273v4.272h2v-4.272h3.272v4.272h2v-4.272h3.016a3.14 3.14 0 0 0 3.135-3.135v-3.015h4.273v-2h-4.273v-3.274h4.273v-2h-4.273v-3.272h4.273v-2h-4.273v-3.273h4.273v-2h-4.273v-3.272z"
    />
  </svg>
);
export default AwsIotThingCamera;

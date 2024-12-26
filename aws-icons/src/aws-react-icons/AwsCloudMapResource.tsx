import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const AwsCloudMapResource: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#8C4FFF"
      fillRule="evenodd"
      d="M36.356 34.828a1.67 1.67 0 0 0-1.187-.49c-.43 0-.86.163-1.186.49a1.68 1.68 0 0 0 0 2.374 1.68 1.68 0 0 0 2.373 0 1.68 1.68 0 0 0 0-2.374m-9.702 6.384-.056-.088a2 2 0 0 0-.233-.287 2.01 2.01 0 0 0-1.43-.591c-.517 0-1.034.197-1.428.59a2.023 2.023 0 0 0 0 2.857 2.025 2.025 0 0 0 2.857 0 2.02 2.02 0 0 0 .29-2.481m-3.148-9.194a1.782 1.782 0 1 0 2.52-2.52 1.782 1.782 0 0 0-2.52 2.52m0-11.68a1.98 1.98 0 0 0 2.796 0c.77-.771.77-2.025 0-2.794a1.97 1.97 0 0 0-1.398-.578 1.974 1.974 0 0 0-1.398 3.372m10.004 2.539a1.615 1.615 0 0 0 2.754 1.14 1.615 1.615 0 0 0 0-2.281 1.6 1.6 0 0 0-1.14-.472c-.433 0-.837.168-1.142.472a1.6 1.6 0 0 0-.472 1.14M14.192 39.274c.348-.348.54-.811.54-1.304s-.191-.956-.54-1.305a1.84 1.84 0 0 0-1.306-.54c-.47 0-.943.18-1.302.54a1.847 1.847 0 0 0 0 2.609c.719.72 1.89.718 2.608 0m-2.608-12.494a1.671 1.671 0 0 0 2.85-1.18c0-.447-.175-.866-.49-1.181a1.66 1.66 0 0 0-1.18-.49 1.67 1.67 0 0 0-1.18 2.85m26.186 6.636a3.68 3.68 0 0 1 0 5.202 3.67 3.67 0 0 1-2.602 1.075 3.66 3.66 0 0 1-2.326-.852l-4.008 2.498a4.01 4.01 0 0 1-1.055 3.77 4 4 0 0 1-2.843 1.176 3.98 3.98 0 0 1-3.963-3.444l-5.195-2.361c-.06.069-.109.145-.173.209a3.83 3.83 0 0 1-2.718 1.124 3.83 3.83 0 0 1-2.719-1.124 3.85 3.85 0 0 1 0-5.437 3.8 3.8 0 0 1 1.83-1.008v-5.06a3.63 3.63 0 0 1-1.83-.99A3.64 3.64 0 0 1 9.096 25.6c0-.981.38-1.903 1.073-2.595 1.386-1.387 3.804-1.387 5.19 0a3.65 3.65 0 0 1 1.075 2.595c0 .98-.381 1.902-1.075 2.594a3.64 3.64 0 0 1-1.36.849v5.265a3.8 3.8 0 0 1 1.608.943 3.82 3.82 0 0 1 1.057 3.434l4.547 2.067a3.988 3.988 0 0 1 2.787-2.381v-3.915a3.74 3.74 0 0 1-1.904-1.023 3.785 3.785 0 0 1 0-5.347 3.76 3.76 0 0 1 1.904-1.024v-4.262a3.94 3.94 0 0 1-1.904-1.047 3.98 3.98 0 0 1 0-5.622 3.98 3.98 0 0 1 5.622 0 3.98 3.98 0 0 1 0 5.622 3.93 3.93 0 0 1-1.718.992v4.454q.558.193 1.046.563l4.708-3.61a3.6 3.6 0 0 1-.242-1.274c0-.966.377-1.873 1.06-2.555 1.362-1.364 3.743-1.366 5.108 0a3.62 3.62 0 0 1 0 5.11 3.6 3.6 0 0 1-2.554 1.055 3.6 3.6 0 0 1-2.167-.74l-4.685 3.592a3.79 3.79 0 0 1-.83 4.093c-.42.42-.918.706-1.444.887v4.088c.651.178 1.27.505 1.782 1.016.044.045.075.096.116.142l3.807-2.371a3.67 3.67 0 0 1 .866-3.78 3.68 3.68 0 0 1 5.202 0m8.225-10.876c0 6.322-5.246 8.375-8.02 8.577l-.074-.997-.076-.997c.252-.02 6.17-.557 6.17-6.583 0-5.054-4.255-6.331-6.085-6.647a1 1 0 0 1-.82-1.132c.002-2.197-.923-3.796-2.537-4.327-1.423-.466-2.984.05-3.892 1.285a1 1 0 0 1-1.749-.26c-.63-1.784-1.537-3.281-2.701-4.451-1.425-1.434-5.34-4.517-10.853-2.172-3.187 1.353-5.683 5.255-5.683 8.88l.076 1.268a1 1 0 0 1-.75 1.028c-1.867.479-5 1.956-5 6.464 0 3.389 1.832 5.256 3.37 6.227l-1.068 1.69c-1.606-1.013-4.302-3.39-4.302-7.917 0-5.354 3.53-7.406 5.709-8.162l-.032-.54c-.002-4.5 2.965-9.108 6.898-10.78 4.604-1.957 9.487-.983 13.052 2.604 1.044 1.049 1.912 2.31 2.585 3.76a5.45 5.45 0 0 1 4.965-.824c2.257.742 3.675 2.794 3.887 5.56 3.486.864 6.93 3.464 6.93 8.446"
    />
  </svg>
);
export default AwsCloudMapResource;

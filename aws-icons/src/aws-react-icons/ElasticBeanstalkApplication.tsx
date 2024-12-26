import * as React from "react";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const ElasticBeanstalkApplication: React.FC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path
      fill="#ED7100"
      fillRule="evenodd"
      d="M30.356 22.792c-4.63 4.729-12.113 5.428-16.173 5.424 3.76-2.876 7.61-6.297 11.265-10.027 3.819-3.9 7.306-8.02 10.22-12.052.015 4.158-.648 11.893-5.312 16.655M18.343 8.506c.115-.095.234-.182.35-.274a14.4 14.4 0 0 1 1.902-1.276q.214-.124.43-.241.416-.22.84-.416c.12-.057.239-.117.359-.171q.598-.265 1.204-.487c.108-.04.215-.073.322-.11q.458-.162.919-.302.244-.073.489-.14a24 24 0 0 1 2.01-.477c.165-.032.33-.066.495-.094.268-.05.533-.09.797-.13.13-.02.264-.042.393-.06q.559-.077 1.097-.131c.159-.016.31-.028.468-.042.21-.018.422-.037.627-.051q.25-.017.49-.03.278-.017.544-.026a25 25 0 0 1 .963-.027c.136 0 .276-.003.405-.003q.376-.002.713.005l.306.008.249.008c-2.981 4.243-6.651 8.62-10.697 12.75-3.89 3.972-8.003 7.59-11.976 10.544l-.007-.212-.013-.472c-.002-.12-.002-.254-.003-.382-.001-.163-.003-.324-.003-.498 0-.163.006-.34.01-.51.003-.167.004-.327.01-.502q.015-.5.048-1.04c.007-.131.02-.272.03-.407.017-.25.035-.497.058-.755.015-.162.036-.331.053-.497.027-.242.052-.483.083-.731.023-.177.052-.36.077-.54q.053-.366.115-.737c.03-.188.068-.376.103-.566q.07-.37.149-.745.064-.29.134-.582a27 27 0 0 1 .357-1.335q.11-.375.235-.75.096-.29.2-.58c.09-.25.19-.498.29-.746q.113-.284.235-.564c.11-.25.23-.495.35-.741.089-.178.175-.36.27-.536.136-.252.283-.498.43-.744.098-.16.19-.323.292-.481.174-.267.365-.524.555-.781.095-.126.18-.258.279-.382.298-.374.613-.738.952-1.083.323-.33.663-.636 1.012-.928M37.527 3.04q-.003-.012-.006-.022a1 1 0 0 0-.078-.278l-.007-.011c-.01-.02-.021-.033-.031-.05a1 1 0 0 0-.14-.197q-.032-.034-.067-.063a1 1 0 0 0-.173-.125q-.039-.023-.08-.043a1 1 0 0 0-.29-.087c-.546-.07-13.486-1.55-20.753 5.869-5.795 5.915-6.038 15.505-5.867 19.418h-.027V45.99h2V30.147c.596.04 1.378.08 2.332.08 4.503 0 12.35-.833 17.445-6.036 7.258-7.408 5.807-20.592 5.742-21.15"
    />
  </svg>
);
export default ElasticBeanstalkApplication;
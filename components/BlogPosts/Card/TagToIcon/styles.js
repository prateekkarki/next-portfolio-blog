import tw from 'twin.macro';

export const iconStyle = tw`
  h-64 w-full mx-auto origin-center
  transition-all duration-500 ease-out transform hover:scale-125
`;

export const IconContainer = tw.div`
  w-full h-64 text-center
  bg-mainLight-400 dark:bg-mainDark-400 
  text-mainLight-800 dark:text-mainDark-800 
  rounded-t-md overflow-hidden
`;

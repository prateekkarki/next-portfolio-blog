import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const ActiveLink = (props) => {
  const router = useRouter();
  const { as, children } = props;

  const NavLink = styled.a(({ isActive }) => [
    isActive
      ? tw`text-primary`
      : tw`text-light-600 dark:text-dark-600 hover:(text-primary dark:text-dark-800)`,
    tw`font-medium p-3 uppercase h-20 flex items-center text-base`,
  ]);

  return (
    <Link {...props} passHref>
      <NavLink isActive={router.asPath === as}>{children}</NavLink>
    </Link>
  );
};
export default ActiveLink;

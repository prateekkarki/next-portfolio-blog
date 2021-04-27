import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const ActiveLink = (props) => {
  const router = useRouter();
  const { as, children } = props;

  const NavLink = styled.a(({ isActive }) => [
    isActive
      ? tw`text-primary`
      : tw`text-mainLight-600 dark:text-mainDark-600 hover:(text-mainLight-800 dark:text-mainDark-800)`,
    tw`font-medium p-3 uppercase text-base`,
  ]);

  return (
    <Link {...props} passHref>
      <NavLink isActive={router.asPath === as}>{children}</NavLink>
    </Link>
  );
};
export default ActiveLink;

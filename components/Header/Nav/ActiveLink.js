import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const ActiveLink = (props) => {
  const router = useRouter();
  const { as, children } = props;

  const NavLink = styled.a(({ isActive }) => [
    tw`font-medium hover:text-primary py-3 uppercase text-base ml-4`,
    isActive ? tw`text-primary` : tw`text-light`,
  ]);

  return (
    <Link {...props} passHref>
      <NavLink isActive={router.asPath === as}>{children}</NavLink>
    </Link>
  );
};

ActiveLink.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ActiveLink;

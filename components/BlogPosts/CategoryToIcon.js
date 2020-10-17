import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { DiSass, DiReact, DiJavascript1, DiDatabase } from 'react-icons/di';
import { CgCodeSlash } from 'react-icons/cg';
import tw from 'twin.macro';

function CategoryToIcon({ category }) {
  const iconStyle = tw`
    h-64 w-full mx-auto origin-center
    transition-all duration-500 ease-out transform hover:scale-125
  `;

  const [icon, setIcon] = useState(<CgCodeSlash css={iconStyle} />);
  useEffect(() => {
    const categoryToIconConfig = {
      react: <DiReact css={iconStyle} />,
      javascript: <DiJavascript1 css={iconStyle} />,
      css: <DiSass css={iconStyle} />,
      backendDevelopment: <DiDatabase css={iconStyle} />,
    };

    if (category && categoryToIconConfig[category.slug]) {
      setIcon(categoryToIconConfig[category.slug]);
    }
  });
  return (
    <div
      css={tw`
        w-full h-64 text-center bg-light rounded-t-md overflow-hidden
      `}
    >
      {icon}
    </div>
  );
}

CategoryToIcon.propTypes = {
  category: PropTypes.PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
  }),
};

CategoryToIcon.defaultProps = {
  category: null,
};

export default CategoryToIcon;

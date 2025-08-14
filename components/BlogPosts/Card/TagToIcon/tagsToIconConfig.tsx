import React from 'react';
import { DiSass, DiReact, DiJavascript1, DiDatabase } from 'react-icons/di';
import { iconStyle } from 'components/BlogPosts/Card/styles';

interface TagsToIconConfig {
  [key: string]: React.ReactElement;
}

const tagsToIconConfig: TagsToIconConfig = {
  react: <DiReact css={iconStyle} />,
  javascript: <DiJavascript1 css={iconStyle} />,
  css: <DiSass css={iconStyle} />,
  database: <DiDatabase css={iconStyle} />,
};

export default tagsToIconConfig;

import { CgCodeSlash } from 'react-icons/cg';
import intersection from 'lodash/intersection';
import { iconStyle, IconContainer } from '../styles';
import tagsToIconConfig from './tagsToIconConfig';

function TagToIcon({ tags }) {
  let icon = <CgCodeSlash css={iconStyle} />;

  const tagSlugs = tags.map((tag) => tag.slug);
  const tagIcons = Object.keys(tagsToIconConfig);
  const matchingTags = intersection(tagSlugs, tagIcons);

  if (matchingTags.length) {
    icon = tagsToIconConfig[matchingTags[0]];
  }

  return <IconContainer>{icon}</IconContainer>;
}

export default TagToIcon;

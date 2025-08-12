import React, { ComponentType, ReactElement } from 'react';
import tw, { theme } from 'twin.macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { MdSchool } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { VscCircleFilled } from 'react-icons/vsc';
import Main from './styles';
import items from './items';

const VTimeline = VerticalTimeline as unknown as ComponentType<any>;
const VTimelineElement =
  VerticalTimelineElement as unknown as ComponentType<any>;

function Timeline(): ReactElement {
  return (
    <Main>
      <VTimeline>
        {items.map((item) => (
          <VTimelineElement
            contentStyle={{
              background: theme`colors.primary`,
              color: theme`colors.white`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${theme`colors.primary`}`,
            }}
            date={item.date}
            icon={item.type === 'school' ? <MdSchool /> : <FaLaptopCode />}
            iconStyle={{
              background: theme`colors.dark.500`,
              color: theme`colors.white`,
            }}
            key={item.id}
          >
            <h3 css={tw`text-xl font-semibold`}>{item.title}</h3>
            <h4 css={tw`text-base font-semibold`}>{item.subtitle}</h4>
            <p css={tw`text-sm font-light`}>{item.description}</p>
          </VTimelineElement>
        ))}
        <VTimelineElement
          iconStyle={{ background: theme`colors.dark.100`, color: '#fff' }}
          icon={<VscCircleFilled />}
        />
      </VTimeline>
    </Main>
  );
}

export default Timeline;

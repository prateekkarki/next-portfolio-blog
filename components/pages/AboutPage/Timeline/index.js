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

function Timeline() {
  return (
    <Main>
      <VerticalTimeline>
        {items.map((item) => (
          <VerticalTimelineElement
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
              background: theme`colors.secondary`,
              color: theme`colors.white`,
            }}
            key={item.id}
          >
            <h3 css={tw`text-xl font-semibold`}>{item.title}</h3>
            <h4 css={tw`text-base font-semibold`}>{item.subtitle}</h4>
            <p css={tw`text-sm font-light`}>{item.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<VscCircleFilled />}
        />
      </VerticalTimeline>
    </Main>
  );
}

export default Timeline;

import React from 'react';

import tw, { theme } from 'twin.macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { MdSchool } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { VscCircleFilled } from 'react-icons/vsc';
import timelineStyles from './Timeline.css';

function Timeline() {
  const items = [
    {
      id: 3,
      date: '2014',
      title: 'Dot Web Technologies LLP',
      subtitle: 'Senior Web Developer',
      description:
        'Developed custom CMS for the clients according to their requirements. Worked with different frameworks like Laravel, OpenCart depending on client requirements to provide the best solutions. Worked with the designing team to get the best designs for the clients. Worked with project manager to provide work progress and get updates on the project.',
      type: 'work',
    },
    {
      id: 4,
      date: '2016',
      title: 'Idea Breed Technology',
      subtitle: 'Solution Architect',
      description:
        'Improved total process of development and deployment by implementing agile development strategies in the team. Supervised the development of a web based Digital signage / Digital notice board systemand launched the product. Effectively reduced the server costs by driving the team towards the use ofCloud computing instead of traditional web hosting. ',
      type: 'work',
    },
    {
      id: 5,
      date: '2017',
      title: 'EBPearls Pty Ltd',
      subtitle: 'Senior Web Developer',
      description:
        'Worked with client and Business Analyst to clearly define the technical requirements for the project. Provided estimates, identified potential problems and recommended alternative solutions. Implemented Agile development principles to create and maintain project tasks and schedules. Designed and coded Magento theme and extensions as per the application requirements. Assisted with the integration of front-end for the designing team. Provided definitive updates on daily meetings to ensure sprints would go according to plan.',
    },
    {
      id: 6,
      date: '2019',
      title: 'Open Learning Exchange',
      subtitle: 'Lead Software Engineer',
      description:
        'Developed interactive educational materials using technologies like ReactJS and GSAP. Provided the content team and design team with ideas for improvement of the office products. Mentored junior developers and helped them in developing high quality products.',
    },
  ];

  return (
    <div css={timelineStyles}>
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
    </div>
  );
}

export default Timeline;

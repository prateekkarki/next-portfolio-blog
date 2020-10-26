import React from 'react';
import tw, { theme } from 'twin.macro';
import Head from 'next/head';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { MdSchool } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { VscCircleFilled } from 'react-icons/vsc';

import TitleBlock from '../components/Common/TitleBlock';

function about() {
  const items = [
    {
      date: '2010',
      title: 'Arniko College BRT',
      subtitle: 'High School, Science',
      type: 'school',
    },
    {
      date: '2012',
      title: 'Kathmandu Engineering College',
      subtitle: "Bachelor's Degree, Computer Engineering",
      type: 'school',
    },
    {
      date: '2014',
      title: 'Dot Web Technologies LLP',
      subtitle: 'Senior Web Developer',
      description: 'Custom CMS development, OpenCart, CodeIgniter',
      type: 'work',
    },
    {
      date: '2016',
      title: 'Idea Breed Technology',
      subtitle: 'Solution Architect',
      description: 'ReactJS, Laravel',
      type: 'work',
    },
    {
      date: '2017',
      title: 'EBPearls Pty Ltd',
      subtitle: 'Senior Web Developer',
      description: 'Magento Ecommerce',
    },
    {
      date: '2019',
      title: 'Open Learning Exchange',
      subtitle: 'Lead Software Engineer',
    },
  ];

  return (
    <>
      <Head>
        <title>About me | Prateek Karki</title>
      </Head>
      <TitleBlock title="About Me" subtitle="Who am I?" />
      <div css={tw`bg-main-light`}>
        <div css={tw`container mx-auto`}>
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
              >
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<VscCircleFilled />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default about;

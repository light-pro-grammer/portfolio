import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import bytebybyteImg from '@/public/bytebybyte-blog.png';
import talknetImg from '@/public/talknet.png';
import wildoasisImg from '@/public/wildoasis.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Bootcamp',
    location: 'Kyiv, UA',
    description: `I graduated from the 'robot_dreams' bootcamp, where I was enrolled in the IT generation program, after 6 months of studying full-stack programming with JavaScript.`,
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Chernihiv, UA',
    description:
      'I worked as a full-stack developer for half a year on three of my major personal projects to learn new technologies. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Front-End Developer',
    location: 'Chernihiv, UA',
    description:
      "I'm now a full-stack developer that gravites more toward the front-end and working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm looking for a full-time position as a front-end developer.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'ByteByByte Blog',
    description:
      'I worked as a full-stack developer on this startup project almost a year. It is a blog about programming.',
    tags: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Bootstrap', 'Redis'],
    imageUrl: bytebybyteImg,
    githubLink: 'https://github.com/yourUsername/bytebybyte',
    deployedLink: 'https://bytebybyte.example.com',
  },
  {
    title: 'TalkNet',
    description: 'A messaging app that has features like sorting, searching, pagination etc.',
    tags: ['Next.js 13', 'TypeScript', 'Clerk Auth', 'Push Notific.', 'Tailwind'],
    imageUrl: talknetImg,
    githubLink: 'https://github.com/light-pro-grammer/TalkNet',
    deployedLink: 'https://talk-net.vercel.app',
  },
  {
    title: 'Wild Oasis',
    description:
      'An internal web app to use by hotel staff for managing operations, including bookings, cabins, and guest details.',
    tags: ['React', 'styled-components', 'React Query', 'Supabase'],
    imageUrl: wildoasisImg,
    githubLink: 'https://github.com/light-pro-grammer/the-wild-oasis',
    deployedLink: 'https://the-wild-oasis-ashen-five.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Git',
  'Node.js',
  'Express',
  'REST API',
  'Tailwind',
  'Bootstrap',
  'Firebase',
  'Supabase',
  'Redis',
  'MongoDB',
  'Framer Motion',
] as const;

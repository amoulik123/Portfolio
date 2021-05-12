import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Awesome Project Title',
      subTitle: 'Subtitle',
      desc:
        "Used Django, HTML, CSS , JavaScript, Git, PostgreSQL, SQLite. This project is hosted on a Digital Ocean's Linux droplet.",
      link: 'https://www.dntandan.ml/',
      linkText: 'Website',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Another Awesome Project Title',
      subTitle: 'Subtitle',
      desc:
        "Used Django, HTML, CSS , JavaScript, Git, PostgreSQL, SQLite. This project is hosted on a Digital Ocean's Linux droplet.",
      link: 'https://www.dntandan.ml/',
      linkText: 'Website',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Projects :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Here's what I have worked on based on my interests...
        </h3>
        <div className="grid gap-4 mb-3">
                   
        </div>
      </Layout>
    </>
  );
}

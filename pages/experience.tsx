import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const internData = {
    RR: {
      title: 'Electrical and Digital Engineering Co-op @ Rolls Royce',
      date: 'Aug 2021 – Present',
      place: 'Indianapolis, Indiana',
      desc:
        'Working on different new technologies (Internship yet to start)',
      //link: 'https://github.com/dntandan/celebmark',
      //linkText: 'Github Repository',
    },
    EY:{
      title: 'Intern @ Ernst & Young',
      date: 'May 2021 – July 2021',
      place: 'Remote',
      desc:
        'Working on different new technologies',
    },
    
  };
  const mentData = {
    techhub: {
      org: 'Research Intern @ Saha Institute of Nuclear Physics',
      date: '2018 - Present',
      place: 'Kolkata, India',
     // desig: 'Community Lead',
      desc:
        "Worked under Professor Satyaki Bhattacharya to develop a JAVA simulation of proton-proton collisions as demonstrated in the CMS experiments in the LHC",
      link: 'https://github.com/amoulik123/PPCollision',
      linkText: 'Github Organization',
    },
    
  };
 

  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Internships</h3>
        <InternshipCard
          title={internData.RR.title}
          date={internData.RR.date}
          place={internData.RR.place}
          desc={internData.RR.desc}
        />
         <InternshipCard
          title={internData.EY.title}
          date={internData.EY.date}
          place={internData.EY.place}
          desc={internData.EY.desc}
        />

        <MentorshipCard
          org={mentData.techhub.org}
          date={mentData.techhub.date}
          place={mentData.techhub.place}
         // desig={mentData.techhub.desig}
          desc={mentData.techhub.desc}
          link={mentData.techhub.link}
          linkText={mentData.techhub.linkText}
        />
        
      </Layout>
    </>
  );
}

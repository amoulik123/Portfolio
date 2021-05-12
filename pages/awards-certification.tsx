import React from 'react';
import Layout from '@/components/Layout';
import AwardCard from '@/components/AwardCard';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

export default function awardsAndCertification() {
  const awardData = {
    ahack: {
      title: ' Deans List (Fall 2020 and Winter 2021) at UMich ',
      date: '2020-2021',
      place: 'Ann Arbor, Mi',
    },
    valp: {
      title: "Founder's Medal for Academic Excellence in ICSE",
      date: '2018',
      place: 'Kolkata, India',
    },
  };
  return (
    <>
      <Head>
        <title>Awards & Certification :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Awards</h3>
        <div className="flex flex-col">
          <AwardCard
            title={awardData.ahack.title}
            date={awardData.ahack.date}
            place={awardData.ahack.place}
           
          />
          <AwardCard
            title={awardData.valp.title}
            date={awardData.valp.date}
            place={awardData.valp.place}
     
          />
         
        </div>
         
        <div className="flex flex-col">
          
        </div>
      </Layout>
    </>
  );
}

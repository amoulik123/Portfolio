import Head from 'next/head';
import {
  IoBasketballOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    
    pbs: {
      title: 'Public Speaking',
      desc:'I have always been a voracious speaker and to build on this passion, I have participated in several Model United Nations (MUN) conferences'
    },
    tvl: {
      title: 'Travelling',
      desc:
        'I love travelling less popular countries and I am planning a trip to Bosnia and Herzegovina, and Montenegro in the near future!'
    },
  };
  return (
    <>
      <Head>
        <title>Home :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I like</h1>
        <div className="">
        
        </div>
        <h1 className="text-lg font-semibold my-4"></h1>
        <div className="grid md:grid-cols-1 gap-y-4 gap-x-2 px-4">
            
              <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoChatbubbleEllipsesOutline className="text-yellow-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoMapOutline className="text-purple-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}

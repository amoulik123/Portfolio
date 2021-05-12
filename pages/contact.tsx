import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoPaperPlane,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact me!</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
        <div className="mt-3">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-lg font-semibold">
              Let's connect!
            </h2>
            <h3 className="text-sm md:text-md">
              Don't like forms? Send me an email at {' '}
              <a
                href="mailto:amoulik@umich.edu"
                className="text-blue-600 hover:underline"
              >
              </a>
              . 👋
            </h3>
            <h4>
              <span className="text-sm md:text-md font-semibold">Email : </span>
              amoulik@umich.edu
            </h4>
         
            <div className="mt-2">
              <div className="text-black text-xl flex gap-5">
                <Link href="https://www.linkedin.com/in/aroosh-moulik-a39a2b106/">
                  <IoLogoLinkedin className="hover:text-pink-600" />
                </Link>
                <Link href="https://github.com/amoulik123/">
                  <IoLogoGithub className="hover:text-pink-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-4">Contact Form</h3>
        <div className="flex flex-col gap-2 px-4">
          <form>
            <div className="grid grid-cols-1 gap-6 md:max-w-md lg:max-w-lg">
              <label className="block">
                <span className="text-black-900">Full Name</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Name"
                  name="Name"
                  id="Name"
                />
              </label>
              <label className="block">
                <span className="text-black-900">Email Address</span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100"
                  placeholder="user@domain.com"
                  name="Email"
                  id="Email"
                />
              </label>
              <label className="block">
                <span className="text-black-900">Subject</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100"
                  placeholder="message."
                  name="Subject"
                  id="Subject"
                />
              </label>

              <label className="block">
                <span className="text-black-900">Message</span>
                <textarea
                  className="form-textarea mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-100"
                  rows={4}
                  placeholder="Great to know about you!"
                  name="Messege"
                  id="Messege"
                ></textarea>
              </label>
              <button
                type="submit"
                className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
              >
                <IoPaperPlaneOutline />
                Send Messege
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

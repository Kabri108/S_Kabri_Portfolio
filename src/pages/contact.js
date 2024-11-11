import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useState } from 'react';
import TransitionEfffect from '@/components/TransitionEfffect';
import TypingEffect from '@/components/TypingEffect';
import Link from 'next/link';
import { IconGithubnav, IconWhatsapp, LinkedInIcon, MailIcon } from '@/components/Icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    // 👇️ Send data to the server here
    let data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json,text/plain,*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Responce recived');
      if (res.status === 200) {
        console.log('Responce succeeded!');
        setSubmited(true);
        setName('');
        setEmail('');
        setBody('');
      }
    });
    // 👇️ Reset the form here
    form.reset();
  };

  return (
    <>
      <Head>
        <title>Skabri | Contact Page</title>
        <meta name="Contact" content="contact me" />
      </Head>
      <TransitionEfffect />
      <main className="flex w-full flex-col items-center justify-cente">
        <Layout className="pt-16">
          <TypingEffect
            text="Lets talk with me"
            className="!text-5xl xl:!text4xl  md:!text-4xl sm:!text-3xl mx-auto text-center mb-6 "
          />
          <div className=" relative bg-transparent w-[70%] items-center justify-center m-auto sm:w-[80%] xs:w-[90%] border p-8 shadow-2xl md:p-4 sm:p-2 xs:p-2">
            <div className="flex flex-row  hover:cursor-pointer justify-center items-center p-2 gap-6 ">
              <Link
                href="https://www.linkedin.com/in/sayantan-kabri-9907b7238/"
                className="mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <LinkedInIcon />{' '}
              </Link>{' '}
              <Link
                href="https://www.linkedin.com/in/sayantan-kabri-9907b7238/"
                className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              >
                <IconGithubnav />{' '}
              </Link>
              <Link
            href="/contact"
            className="mr-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            target="_blank"
          >
            <MailIcon />{' '}
          </Link>
            </div>
            <hr />
            <form action="post" className=" font-medium" id="form">
              <div className="flex flex-col w-full py-3">
                <label htmlFor="name" className="py-3 font-semibold ">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  placeholder="your name"
                  className="p-2 rounded-lg border border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1  placeholder:italic placeholder:text-slate-400 "
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col py-3">
                <label htmlFor="email" className="py-3 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  placeholder="you@example.com"
                  className="p-2 rounded-lg border border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1 placeholder:italic placeholder:text-slate-400"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col py-3">
                <label htmlFor="message" className="py-3 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="write your message here"
                  className="p-2 rounded-md border  border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1  placeholder:italic placeholder:text-slate-400"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-Charcoal rounded-lg py-2 px-3 text-White m-2 border border-black border-r-4 border-b-4 float-right shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-300"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Send Me
              </button>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;

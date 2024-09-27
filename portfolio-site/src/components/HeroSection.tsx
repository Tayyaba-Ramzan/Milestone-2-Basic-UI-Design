"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className="col-span-12 sm:col-span-7 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I am {""}</span>
              <br />
              <TypeAnimation
                sequence={[
                  'Tayyaba Ramzan',
                  1000,
                  'Software Engineer',
                  1000,
                  'Web Developer',
                  1000,
                  'Programmer',
                  1000,
                  'Designer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'Coder',
                  1000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mt-6 lg:text-xl">Welcome to my portfolio! I'm Tayyaba Ramzan, a software engineer passionate about artificial intelligence and Web 3.0. I love creating smart software and engaging online experiences, always seeking innovative ways to solve problems. In my portfolio, you'll find projects where I blend creativity with technology, from AI tools to Web 3.0 applications.</p>
            <div className="flex flex-col sm:flex-row mt-8">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-0 sm:mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire me</button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-4 sm:mt-0">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"><Link href="/CV.pdf" target="_blank">Download CV</Link></span>
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className="col-span-12 sm:col-span-5 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={"/girl.png"}
                alt="hero image"
                width={300}
                height={300}
                className="absolute inset-0 m-auto h-full w-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

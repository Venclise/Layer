import Tag from "@/components/Tag";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AnimatedText from "@/lib/gsap";

const techs = [
  {
    id: 1,
    title: "Figma",
    img: "/figma-logo.svg",
    desc: "Figma is a collaborative interface design tool.",
  },
  {
    id: 2,
    title: "Notion",
    img: "/notion-logo.svg",
    desc: "Notion is all-in-one workspace for notes and docs.",
  },
  {
    id: 3,
    title: "Framer",
    img: "/framer-logo.svg",
    desc: "Framer is a professional website prototying tool.",
  },
  {
    id: 4,
    title: "Slack",
    img: "/slack-logo.svg",
    desc: "Slack is a powerful team management tool.",
  },
  {
    id: 5,
    title: "Relume",
    img: "/relume-logo.svg",
    desc: "Relume is no-code tool.",
  },
  {
    id: 6,
    title: "Github",
    img: "/github-logo.svg",
    desc: "GitHub id the leading platform for code collaboration.",
  },
];
export default function Integrations() {
  return (
    <main id="integration" className="w-full h-max pad-2 flex items-center md:justify-between  flex-col lg:flex-row gap-12 lg:gap-0 ">
      <div className="flex justify-center flex-col gap-6">
        <Tag text="integrations" />
        <AnimatedText animate="leftToRight">

        <h1 className="text-5xl md:text-6xl text-white ">
          Plays well <br /> with <span className="text-lime-400 ">others</span>
        </h1>
        </AnimatedText>
        <AnimatedText animate="leftToRight" delay={.5}>

        <p className="font-normal text-gray-400 text-md max-w-md ">
        
          Layers seamlessly connects with your favourite tools, making it easy
          to plug into any workflow and collaborate acroos platforms.
        </p>
        </AnimatedText>
      </div>
      <div className="w-full lg:w-[50%] h-max  flex flex-col items-center justfiy-center gap-8 ">
        <Marquee direction="right" className="flex items-center justfiy-center gap-8">
          {techs.map(({ id, title, img, desc }) => {
            return (
              <div
                key={id}
                style={{margin: "0 2rem"}}
                className="flex items-center justify-around pad-2 flex-col bg-black border-2 border-[#111] rounded-2xl w-[15rem] h-[15rem]  "
              >
                <Image src={img} alt={title} height="140" width="80" />
                <h2 className="text-white text-2xl ">{title}</h2>
                <p className="text-gray-400 text-md text-center">{desc}</p>
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="left" className="w-full  flex items-center justfiy-center gap-8">
          {techs.map(({ id, title, img, desc }) => {
            return (
              <div
                key={id}
                style={{margin: "0 2rem"}}
                className="flex items-center justify-around pad-2 flex-col bg-black border-2 border-[#111] rounded-2xl w-[15rem] h-[15rem]  "
              >
                <Image src={img} alt={title} height="140" width="80" />
                <h2 className="text-white text-2xl ">{title}</h2>
                <p className="text-gray-400 text-md text-center">{desc}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </main>
  );
}

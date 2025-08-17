import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";

const otherFeatures = [
  {name:"Asset Library",},
    {name:"Code Preview",},
        {name:"Flow mode",},
            {name:"Smart Sync",},
                {name:"Auto Layout",},
                    {name:"Fast Search",},
                        {name:"Smart Guides",},
]
export default function Features() {
  return (
    <div id="features" className="h-max lg:h-[150vh] w-full flex items-center justify-center flex-col gap-8 pad-2">
      <Tag text="* Features" />
      <h1 className="text-white text-4xl lg:text-6xl text-center">
        Where power meets <br />{" "}
        <span className="text-lime-400">Simplicity</span>
      </h1>
      <div className="flex  items-center justify-center w-full h-max flex-col gap-[2rem] lg:flex-row">
        <div className="flex justify-around  pad-2 gap-6 h-[23rem] border-1  border-[#444] bg-[#111] flex-col  w-[21rem] rounded-4xl ">
          <div className="flex items-center justify-center gap-8 ">
            <Image
              className="rounded-full border-4 border-solid border-blue-500 relative "
              alt="avatar"
              src="/avatar-ashwin-santiago.jpg"
              width="80"
              height="80"
            />
            <Image
              className="rounded-full border-4 border-solid border-blue-500 absolute "
              alt="avatar"
              src="/avatar-florence-shaw.jpg"
              width="80"
              height="80"
            />
            <Image
              className="rounded-full border-4 border-solid border-blue-500 z-10"
              alt="avatar"
              src="/avatar-lula-meyers.jpg"
              width="80"
              height="80"
            />
          </div>
          <div>
            <h1 className="text-white text-4xl">
              Real-time <br /> Collaboration.
            </h1>
            <p className="text-gray-500 text-lg ">
              Work together seamlessly with conflict free team editing.
            </p>
          </div>
        </div>

         <div className="flex justify-around  pad-2 gap-6 h-[23rem] bg-[#111] flex-col  w-[21rem] rounded-4xl border-1  border-[#444]">
          <div className="text-white opacity-[.5] font-semibold text-center text-3xl ">
            We've acheived <br/> <span className="text-lime-500 opacity-100"> incredible </span> <br/>growth this year.
          </div>
          <div>
            <h1 className="text-white text-4xl">
              Interactive <br /> Prototyping.
            </h1>
            <p className="text-gray-500 text-lg ">
              Engage your clients with prototypes that react to user actions
            </p>
          </div>
        </div>

         <div className="flex justify-around  pad-2 gap-6 h-[23rem] bg-[#111] flex-col  w-[21rem] rounded-4xl border-1  border-[#444]">
          <div className="flex items-center justify-center gap-4 ">
           <div className="bg-gray-200 w-[7rem] h-[3rem] text-center flex items-center justify-center rounded-2xl">
                Shift 
           </div>
           <div className="bg-gray-200 w-[5rem] h-[3rem] text-center flex items-center justify-center rounded-2xl">
                Alt
           </div>
           <div className="bg-gray-200 w-[5rem] h-[3rem] text-center flex items-center justify-center rounded-2xl">
                C
           </div>
           
          </div>
          <div>
            <h1 className="text-white text-4xl">
              Keyboard Quick <br /> Actions.
            </h1>
            <p className="text-gray-500 text-lg ">
            Powerful commands to help you create designs more quickly.
            </p>
          </div>
        </div>
  

      </div>
<div className="flex items-center justify-center gap-4 w-full h-max flex-wrap">

      {otherFeatures.map(({name}) => (
        <div key={name} className="w-[10rem] flex gap-2 items-center justify-center rounded-2xl pad-1 h-max text-white bg-[#111] border-2 border-[#333] ">
 <div className="h-[10px] w-[10px] bg-lime-500 rounded-full" ></div>
          {name}
          </div>
      ))}
      </div>
    </div>
  );
}

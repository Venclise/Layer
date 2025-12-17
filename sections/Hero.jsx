import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
    
      <div className=" lg:flex items-center justify-around h-screen w-full relative overflow-hidden ">
        <Image
      
          src="/design-example-1.png"
          alt="Example"
          className="hidden absolute left-[-7%] lg:block "
          width="300"
          height="400"
        />

        <main className="h-full w-full flex items-center justify-center flex-col p-8 gap-8">
          <div className="w-max pad-3 flex items-center justify-center font-semibold rounded-full h-10 bg-gradient-to-r from-purple-400 to-purple-500 text-white ">
            $7.5M seed round raised
          </div>

          <h1 className="text-6xl lg:text-8xl text-white text-center">
            Impactful design <br /> created effortlessly
          </h1>
          <p className="text-center text-gray-400 lg:text-lg text-sm">
            Design tools that slow you down. Layers combine powerful <br />
            features with an intuitive inteface that keeps you in your creative
            flow.{" "}
          </p>
          <div className="flex h-16 items-center justify-between rounded-full border-1 border-solid  border-gray-400 bg-transparent w-max lg:w-[40%] pad-1">
            <input
              type="text"
              placeholder="Enter your email.."
              className="h-full w-full text-md text-white outline-none"
            />
            <Button text="Sign up" />
          </div>
        </main>
        <Image
          src="/design-example-2.png"
          alt="Example"
          className="hidden absolute right-[-5%]  bottom-8 lg:block z-[-1]"
          width="300"
          height="400"
        />
      </div>
      <div className="w-full h-max pad-1 flex items-center justify-center flex-col gap-8 ">
        <h1 className="text-gray-400 text-xl text-center">
          Already Chosen by these markets.
        </h1>

        <marquee behavior="" direction="" className="w-[80%] h-[10rem] pad-2 ">
          <div className="flex items-center justfiy-center gap-8 ">
            <Image src="/acme-corp.svg" alt="acme" width="140" height="80" />
            <Image src="/apex.svg" alt="apex" width="140" height="80" />
            <Image src="/celestial.svg" alt="acme" width="140" height="80" />
            <Image src="/echo-valley.svg" alt="acme" width="140" height="80" />
            <Image src="/quantum.svg" alt="acme" width="140" height="80" />
            <Image src="/twice.svg" alt="acme" width="140" height="80" />
            <Image src="/pulse.svg" alt="acme" width="140" height="80" />
          </div>
        </marquee>
      </div>
    </>
  );
}

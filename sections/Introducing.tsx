import Tag from "@/components/Tag";
import Image from "next/image";
export default function Introducing() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-12 w-full h-screen pad-2 ">
     <Tag text="* Introducing layers"/>
      <p className="text-gray-400 text-4xl lg:text-7xl text-center">
        Your creative process deserve better. You're racing to create
        exceptional work, but traditional design tools slow you down with
        unnecessary complexity and steep learning curves.
      </p>
      <span className="text-lime-500 text-4xl lg:text-6xl">
        That's why we built layers.
      </span>
    </div>
  );
}

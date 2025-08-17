import Image from "next/image";
import Button from "./Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <div className="w-full h-[6rem] flex items-center justify-center  ">
      <header className="w-[90%] lg:w-[70%] pad-2  h-[3rem]  rounded-4xl border-[#111] fixed  bg-black z-50 border-2 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image src="/logo.svg" alt="Logo" width="120" height="30" />
        </div>

        <div className="hidden lg:flex items-center justify-center gap-4">
          <a href="#" className="text-gray-300  text-sm ">
            Home
          </a>
          <a href="#integration" className="text-gray-300 text-sm ">
            Integration
          </a>
          <a href="#features" className="text-gray-300 text-sm ">
            Features
          </a>
          <a href="#faq" className="text-gray-300 text-sm ">
            FAQs
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-2 ">
          <button className="w-[6rem] h-[3rem] text-white rounded-4xl border-2 border-solid hover:border-0 hover:bg-lime-500 hover:text-black transition-all border-[#222]">
            Log in
          </button>
            <button className="w-[6rem] h-[3rem] text-white rounded-4xl bg-lime-500  transition-all ">
            Sign up
          </button>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: "#FFFFFF" }}
              className="object-contain"
            >
              <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
            </svg>
          </SheetTrigger>
          <SheetContent className="opacity-100  border-0 outline-0 bg-black pad-2 h-full flex flex-col gap-8  items-start transition-all ">
            <SheetHeader>
              <SheetTitle>
                <Image src="/logo.svg" alt="Logo" width="140" height="60" />
              </SheetTitle>
                <div
                  className="flex items-start justify-start flex-col gap-4  pad-2"
                  style={{ marginTop: "5rem" }}
                >
                  <SheetClose>
                    {" "}
                    <a href="#" className="text-gray-300  text-2xl ">
                      Home
                    </a>
                  </SheetClose>
                  <SheetClose>
                    {" "}
                    <a href="#integration" className="text-gray-300 text-2xl ">
                      Integration
                    </a>
                  </SheetClose>
                  <SheetClose>
                    {" "}
                    <a href="#features" className="text-gray-300 text-2xl ">
                      Features
                    </a>
                  </SheetClose>
                  <SheetClose>
                    {" "}
                    <a href="#faq" className="text-gray-300 text-2xl ">
                      FAQs
                    </a>
                  </SheetClose>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button className="w-full h-[3rem] text-white rounded-4xl border-2 border-solid hover:border-0 hover:bg-lime-500 hover:text-black transition-all border-[#222]">
            Log in
          </button>
            <button className="w-full h-[3rem] text-white rounded-4xl   bg-lime-500  transition-all border-0">
           Sign up
          </button>
                </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

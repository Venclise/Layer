"use client"
import Tag from "@/components/Tag"
import AnimatedText from "@/lib/gsap";
import { useState } from "react";




const questions = [
  {
    id: 1,
    question: "How is layer different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritize speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    id: 2,
    question: "Is there a learning curve?",
    answer:
      "Not really! Layers provides a simple, intuitive UI so you can get work done in just a few clicks.",
  },
  {
    id: 3,
    question: "How do you handle version control?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam et officia voluptatum vitae, mollitia consequatur illo modi dolore dignissimos.",
  },
  {
    id: 4,
    question: "Can I work offline?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam et officia voluptatum vitae, mollitia consequatur illo modi dolore dignissimos.",
  },
  {
    id: 5,
    question: "How does Layers handle collaboration?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam et officia voluptatum vitae, mollitia consequatur illo modi dolore dignissimos.",
  },
];

export default function FAQ() {
  // Keep only ONE item open at a time. Start with none open (null)
  const [openId, setOpenId] = useState(null);

  const toggle = (id:any) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main
      id="faq"
      className="w-full h-screen pad-2  flex items-center justify-center flex-col gap-8 mt-12"
    >
      <Tag text="FAQ's" />

<AnimatedText animate="bottomToTop">

      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl text-white  ">
        Questions? We've got <br/> <span className="text-lime-500">answers.</span>
      </h1>
</AnimatedText>

      

      <div className="w-full md:w-[50%] lg:w-[50%] flex flex-col gap-3">
        {questions.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="w-full pad-1 cursor-pointer  rounded-2xl border border-[#222] bg-[#0d0d0d] shadow-sm hover:opacity-95 transition"
            >
              <button
                type="button"
                onClick={() => toggle(id)}
                className="w-full flex items-center justify-between gap-6 p-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${id}`}
                id={`faq-trigger-${id}`}
              >
                <span className="text-gray-200 text-base md:text-lg ">
                  {question}
                </span>
                <span
                  className="flex h-8 w-8 items-center justify-center  text-gray-300"
                  aria-hidden
                >
                  {isOpen ? <p className=" text-lime-500 text-xl ">-</p> : <p className=" text-lime-500 text-xl ">+</p>}
                </span>
              </button>

              {/* Collapsible panel */}
              <div
                id={`faq-panel-${id}`}
                role="region"
                aria-labelledby={`faq-trigger-${id}`}
                className={[
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-400 text-sm md:text-base leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

/*
Notes:
- This is an accessible accordion: the button controls a region via aria-controls and aria-expanded.
- Only one item is open at a time (controlled by `openId`). Click the open one to close it.
- The open/close animation uses a CSS grid trick (grid-rows-[0fr]/[1fr]) so the height animates smoothly without JS.
- If you want MULTIPLE items open simultaneously, replace the `openId` state with a Set of ids and toggle membership.
*/

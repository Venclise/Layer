import { Sparkle } from "lucide-react";

interface type {
    text: string,
}
export default function Tag({text}:type) {
    return (

     <div className="text-lime-500 border-1 flex items-center gap-1 text-sm border-solid border-lime-500 pad-1 w-max rounded-full uppercase">
      <Sparkle  className="h-4 w-4"/>
       {text}
      </div>
    )
}
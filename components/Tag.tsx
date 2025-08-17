interface type {
    text: string,
}
export default function Tag({text}:type) {
    return (

     <div className="text-lime-500 border-2 border-solid border-lime-500 pad-1 w-max rounded-full uppercase">
       {text}
      </div>
    )
}
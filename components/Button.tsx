interface props {
    text: string,
}
export default function Button({text}:props) {
    return (
        <button className="w-[6rem] cursor-pointer h-[3rem] bg-lime-500 hover:bg-lime-600 text-white border-none rounded-4xl">{text}</button>
    )
}
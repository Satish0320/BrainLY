import { ReactElement } from "react"


interface Ibutton {
    variants: "primary" | "secondary",
    text: string,
    startIcon: ReactElement,
    onClick? : () => void
}

const variantsStyle = {
    "primary": "bg-purple-400 text-white  ",
    "secondary": "bg-purple-200 text-pruple-200 ",
}

const defaultStyle = "px-4 py-2 rounded-md font-light flex items-center"

export const Button = ({ variants, text, startIcon, onClick }: Ibutton) => {
    return <button onClick={onClick} className={`${variantsStyle[variants]} ${defaultStyle}`}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}
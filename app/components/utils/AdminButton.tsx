import React from "react"

interface AdminButtonPropsInterface {
    text: string,
    color: "red" | "blue" | "purple",
    buttonType?: "button" | "reset" | "submit",
    buttonDisable?: boolean,
    buttonAction?: () => void
}

const colorClasses = {
    red: "bg-red-600 hover:bg-red-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",

}

function AdminButton({ text, color, buttonAction, buttonType = "button", buttonDisable = false }: AdminButtonPropsInterface) {
    return (
        <button
            type={buttonType}
            disabled={buttonDisable}
            onClick={() => buttonAction?.()}
            className={` ${colorClasses[color]} text-white w-full px-4 py-2 rounded-lg transition-colors  ${buttonDisable ? "opacity-50" : ""}`}

        >
            {text}
        </button>
    )
}

export default AdminButton


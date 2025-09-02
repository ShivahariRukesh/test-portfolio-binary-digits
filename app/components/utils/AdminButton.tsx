import React from "react"

interface AdminButtonPropsInterface {
    text: string,
    color: string,
    buttonType?: "button" | "reset" | "submit",
    buttonDisable?: boolean,
    buttonAction?: () => void
}
function AdminButton({ text, color, buttonAction, buttonType = "button", buttonDisable = false }: AdminButtonPropsInterface) {
    return (
        <button
            type={buttonType}
            disabled={buttonDisable}
            onClick={() => buttonAction?.()}
            className={`bg-${color}-600 hover:bg-${color}-700  text-white w-full px-4 py-2 rounded-lg transition-colors  ${buttonDisable ? "opacity-50" : ""}`}

        >
            {text}
        </button>
    )
}

export default AdminButton


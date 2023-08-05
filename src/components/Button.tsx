import React, { ReactNode } from "react";

interface props {
    text: string;
    fit?: boolean;
    icon?: ReactNode
}

export default function Button({ text, fit, icon }: props) {
    return (
        <button
            className={`${
                fit ? "w-fit" : ""
            } z-50 px-8 py-3 text-lg font-bold text-white shadow-lg cursor-pointer hover:brightness-110 shadow-blue-shadow bg-primary rounded-3xl flex gap-3 items-center`}
        >
            {text}
            { icon }
        </button>
    );
}

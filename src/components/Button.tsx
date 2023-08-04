import React from "react";

interface props {
    text: string;
    fit?: boolean;
}

export default function Button({ text, fit }: props) {
    return (
        <button
            className={`${ fit ? "w-fit" : "" } z-50 px-8 py-3 text-lg font-bold text-white shadow-lg cursor-pointer hover:brightness-110 shadow-blue-shadow bg-primary rounded-3xl`}
        >
            {text}
        </button>
    );
}

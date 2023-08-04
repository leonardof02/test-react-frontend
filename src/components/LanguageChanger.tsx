import React from "react";
import Image from "next/image";

export default function LanguageChanger() {
    
    return <button className="p-3 rounded-full hover:bg-slate-300">
        <Image width={27} height={18} src="/images/uk-flag.svg" alt="UK Flag"/>
    </button>;
}

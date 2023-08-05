import React, { useState } from "react";
import Image from "next/image";
import LanguageChanger from "./LanguageChanger";

const navbarOptions = ["Inicio", "Servicios", "Nosotros", "Herramientas", "Socios"];

export default function MobileNavbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className="flex justify-end md:hidden bg-background-blue">
            <button className="p-20 text-white bg-transparent" onClick={() => setOpen(true)}>
               <Image width={50} height={50} src="/images/menu.svg" alt="Menu Icon" />
            </button>
                <div className={`fixed bg-white transition-all overflow-hidden z-50 ${ open ? "h-full" : "h-0" }`}>
                    <button
                        className="w-12 h-12 p-2 m-3 rounded-full hover:bg-slate-300"
                        onClick={ () => setOpen(false) }
                    >
                        X
                    </button>
                    <ul className="flex flex-col items-start w-screen">
                        <div className="w-full p-5">
                            <LanguageChanger />
                        </div>
                        {navbarOptions.map((option, index) => (
                            <li
                                key={index}
                                className="w-full p-5 hover:cursor-pointer hover:text-primary hover:font-bold hover:bg-slate-300"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
        </nav>
    );
}

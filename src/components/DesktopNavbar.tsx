import React from "react";
import Button from "./Button";
import LanguageChanger from "./LanguageChanger";
import { useTranslations } from "next-intl";

export default function DesktopNavbar() {

    const t = useTranslations("Navbar");
    const navbarOptions = [t("home"), t("services"), t("about"), t("tools"), t("partners")];

    return (
        <nav className="z-40 hidden w-full p-8 md:block bg-background-blue top-10">
            <div className="justify-between px-8 py-4 mx-10 text-sm uppercase bg-white rounded-lg shadow-2xl md:flex">
                <ul className="flex items-center gap-12 ms-12">
                    {navbarOptions.map((option, index) => (
                        <li
                            key={index}
                            className="hover:cursor-pointer hover:text-primary hover:font-bold"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                <div className="flex gap-5">
                    <Button text="Contactar" />
                    <LanguageChanger />
                </div>
            </div>
        </nav>
    );
}

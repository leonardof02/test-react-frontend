import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LanguageChanger() {
    const lang = useRouter();

    return (
        <button className="p-3 rounded-full hover:bg-slate-300">
            {lang.locale === "en" ? (
                <Link href="/" locale="es">
                    <Image width={27} height={18} src="/images/spn-flag.svg" alt="Spain Flag" />
                </Link>
            ) : (
                <Link href="/" locale="en">
                    <Image width={27} height={18} src="/images/uk-flag.svg" alt="UK Flag" />
                </Link>
            )}
        </button>
    );
}

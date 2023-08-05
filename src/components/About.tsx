import React from "react";
import Button from "./Button";
import CodingImage from "./CodingImage";

export default function About() {
    return (
        <section className="flex flex-col gap-4 mx-5 mt-8 mb-56 md:px-20 md:grid md:grid-cols-2 md:py-5 h-full md:max-h-[540px] w-auto">
            <div className="flex items-center w-full justify-centermx-10">
                <CodingImage />
            </div>
            <div className="flex flex-col gap-5 md:block">
                <h3 className="text-xl font-bold uppercase text-primary">Sobre Nosotros</h3>
                <h4 className="text-3xl font-bold text-black">Traducir este titulo y el navbar</h4>
                <p className="text-lighy-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
                    dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
                    animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?
                </p>
                <h4>Acceder a esta seccion mediante el context</h4>
                <ul>
                    <li>dfghdfghdfhgdfhdfghdfgh</li>
                    <li> dgfsdgsdgsdgsdgsdfgsdfg</li>
                    <li>klsdfjsklfj</li>
                </ul>
            </div>
        </section>
    );
}
